import { Component, OnInit } from '@angular/core';
import data from '../assets/data.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  playerdata:any=[];
  title = 'useofjson';
  ngOnInit(){
    this.playerdata = data;
  }
}
