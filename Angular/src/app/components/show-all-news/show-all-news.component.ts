import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Models } from 'src/app/services/models';
import * as moment from 'jalali-moment';


@Component({
  selector: 'app-show-all-news',
  templateUrl: './show-all-news.component.html',
  styleUrls: ['./show-all-news.component.scss']
})
export class ShowAllNewsComponent implements OnInit {
  newsTitle:any;
  allNews: Models.news[]=[];
  key:string='shamsiDate';
  reverse:boolean=false;
  p:number = 1;
  constructor(private http:HttpClient) { }

  async ngOnInit() {
    this.allNews = await this.getAllNews().toPromise();
    let shamsiDate;
    for(let i=0; i<this.allNews.length;i++){
      shamsiDate = moment(this.allNews[i].newsDate).locale('fa').format('YYYY/M/D');
      this.allNews[i].shamsiDate = shamsiDate;
    }
    //console.log(this.allNews);

  }
  getAllNews():Observable<Models.news[]>{
    return this.http.post<Models.news[]>('http://127.0.0.1:3000/admin/show_news','')
            .pipe(map(r=>r))
  }

  
  search(){
    if(this.newsTitle == ''){
      this.ngOnInit();
    }else{
      this.allNews = this.allNews.filter( res =>{
        return res.title.match(this.newsTitle);
      })
    }
  }
 
  sort(key:any){
    this.key = key;
    this.reverse = ! this.reverse;
  }

  remove(id:any){
    
    var answer = window.confirm("آیا از حذف رکورد مطمین هستید؟");
    if(answer){
      //console.log(id);
      this.http.get(`http://127.0.0.1:3000/admin/delete_news/${id}`)
      .subscribe(r =>{
        window.alert(r);
      });
      this.ngOnInit();
    }
    else{}
  }
}
