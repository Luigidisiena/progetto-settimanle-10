import { Component, OnInit } from '@angular/core';
import { Todoo } from 'src/app/models/toDoInterface';

let i = 0;
let lista: Todoo[] = [];
let listaF: Todoo[] = [];
let listaT: Todoo[] = [];


@Component({
  template: `
    <form>
    <div *ngIf="listaT.length>0">

      <ul id="task-dafare" *ngFor="let item of listaT">
        <li>{{item.title}} <button class="complete" (click)="completeTask(item)" >✅</button> </li>
      </ul>
    </div>
      <input type="text" [(ngModel)]="todo" name="todo"><button (click)="prendiDati();stampaDati()">X</button>
    </form>
  `,
  styles: [
  ]
})

export class DaFareComponent implements OnInit {

  listaT: Todoo[] = [];
  listaF: Todoo[] = [];
  todo: string = '';

  constructor() { }
  ngOnInit(): void {

    this.stampaDati();

  }
  prendiDati() {

    let elemento = new Todoo(i, this.todo, false);
    console.clear();
    lista.push(elemento);
    i++;

  }
  stampaDati(): Promise<Todoo[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        listaF = [];
        listaT = [];
        listaF = lista.filter(function (el) {
          return el.completed == true;
        });
        this.listaT = lista.filter(function (el) {
          return el.completed == false;
        });
        listaT = this.listaT;

        if (listaT != null) {
          res(listaT)
        }
      }, 1000);
    })
  }
  completeTask(item: any) {
    let q = item.id;
    console.log(q)

    console.log("prima tr" + listaT.length)

    lista[q].completed = true;
    this.stampaDati();

    console.log("prima tr" + listaT.length)
    console.log("seconda F" + listaF.length)
  }
}

export function getListaT(): Todoo[] {
  return listaT;
}
export function getListaF(): Todoo[] {
  return listaF;
}

