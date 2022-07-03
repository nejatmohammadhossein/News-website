import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Models } from 'src/app/services/models';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'فرادرس';
  newsList:Models.news[]=[];

  constructor(public dilog: MatDialog, private http:HttpClient){}
  
  openDialogLogin(){
    this.dilog.open(LoginComponent,{height:"60%",width: "70%"});
  }
  openDialogRegister(){
    this.dilog.open(RegisterComponent,{height:"80%",width: "70%"});
  }

  ngOnInit(): void {
    this.showNews();
  }
  showNews(){
    this.http.post("http://127.0.0.1:3000/showNews",'').subscribe( res =>{
      //console.log(res);
      var y = JSON.stringify(res);
      this.newsList = JSON.parse(y);
      for(let m of this.newsList){
        m.message = m.message.slice(m.message.search("<img"),
        m.message.search("/>")) + "width=100px height=100px />";
      }
      console.log(this.newsList[1].message);
      
      
    })
  }

}
