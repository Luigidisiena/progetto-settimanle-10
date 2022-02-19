import { Component, OnInit } from '@angular/core';
import { getListaF } from '../da-fare/da-fare.component';
import { Todoo, Todo } from 'src/app/models/toDoInterface';


let listaF: Todoo[] = [];
@Component({

  template: `
  <p >completati</p>
    <ul id="task-completed" *ngFor="let item of listaF">
       <li>{{item.title}}</li>
      </ul>
  `,
  styles: [
  ]
})
export class CompletedComponent implements OnInit {
  lista: Todoo[] = [];
  listaT: Todoo[] = [];
  listaF: Todoo[] = [];

  constructor() {
  }

  ngOnInit(): void {

    this.listaF = getListaF();
    console.log(listaF);
  }


}
