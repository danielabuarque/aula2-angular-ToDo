import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tarefas: string[]=[];
  tarefa_atual: string ='' ;

adicionarTarefa(){
  this.tarefas.push(this.tarefa_atual)
  this.tarefa_atual=''
}

deletarTarefa(id:number){
  if(confirm("Você realmente quer excluir essa tarefa?"))
  this.tarefas.splice(id,1)
}
}
