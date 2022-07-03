import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public app:AppService, public dilog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogLogin(){
    this.dilog.open(LoginComponent,{height:"60%",width: "70%"});
  }

}
