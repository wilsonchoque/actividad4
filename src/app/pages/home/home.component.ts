import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre = "Maria";

  changeName(){
    this.nombre = "Andres";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
