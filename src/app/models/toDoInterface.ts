export interface Todo{
  id:number,
  title:string,
  completed: boolean
}
export class Todoo implements Todo{
  id: number;
  title: string;
  completed: boolean;

  constructor(id: number, title:string, completed:boolean) {
    this.id = id;
    this.title = title;
    this.completed = completed;
}

}
