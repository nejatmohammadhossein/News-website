import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'jalali-moment';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
  newsTitle='';
  newsCategory='1';
  newsDate: string = new Date().toISOString();
  newsText='';
  todayJalali: any;
  invalidValue=false;
  constructor(private auth:AppService, private http:HttpClient) { }

  ngOnInit(): void {
    this.todayJalali = moment().locale('fa').format('YYYY/M/D');
  }
  onSubmit(userValue:any){
    userValue.name=this.auth.name;
    console.log(userValue);
    if(userValue.newsTitle != '' && userValue.newsText != ''){
      this.http.post('http://127.0.0.1:3000/admin/register_news',userValue).
      subscribe((resuult)=>{
       
      });
      this.newsTitle = '';
      this.newsCategory = '1';
      this.newsText = '';
      window.alert('خبر جدید ثبت شد');
    }else{
      this.invalidValue=true;
    }
    

  }

}
