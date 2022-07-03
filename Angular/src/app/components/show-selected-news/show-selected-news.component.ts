import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Models } from 'src/app/services/models';

@Component({
  selector: 'app-show-selected-news',
  templateUrl: './show-selected-news.component.html',
  styleUrls: ['./show-selected-news.component.scss']
})
export class ShowSelectedNewsComponent implements OnInit {
  id:any;
  selectedNews:Models.news[] = [];
  title:String = '';
  message:String = '';
  constructor(private route:ActivatedRoute, private http:HttpClient) {
    this.id = route.snapshot.params.id;
    var data = this.id;
    //console.log(this.id);
    http.post("http://127.0.0.1:3000/showSelectedNews",{data})
    .subscribe(
      res =>{
        console.log(res);
        var y = JSON.stringify(res);
        this.selectedNews = JSON.parse(y);
        this.title = this.selectedNews[0].title;
        this.message = this.selectedNews[0].message;


      }
    )
   }

  ngOnInit(): void {
  }

}
