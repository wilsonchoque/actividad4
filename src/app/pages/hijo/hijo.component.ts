import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {


  nombreHijo = "Pedro";
  

  changeSonName(){
    this.nombreHijo = "Jose";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
