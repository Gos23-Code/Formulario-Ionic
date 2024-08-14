import { Component } from '@angular/core';
import { Task } from 'src/app/home/Task.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// Title: String ='';
// Description: String='';
public Title: string = '';
public Description: string = '';
public ReCu: boolean = false;
Result: Task[] = [];
  constructor() {}

// async resetFields(){
//  if(this.Title.length >= 3 && this.Description.length >= 10){
//   const load = await this.presentLoading();
//   this.Title='';
//   this.Description='';
//  }else{
//   console.log('Voce Nao Cumplir Do Requisinhno')
//  }
// }
addTask(){
  if (this.Title.length >= 3 && this.Description.length >= 10){
    const newTask: Task = {
      title: this.Title,
      description: this.Description,
      Add: false,
      
    }
    this.Result.push(newTask)
    this.resetFields();
    console.log('', this.Result);
   }
  }

  resetFields(){
this.Title = '';
this.Description = '';

  }
validarRequisitos(){
  this.ReCu = this.Title.length >= 3 && this.Description.length >= 10; 
  }

  marAsDone(task:Task){
    const index = this.Result.indexOf(task);
    if(index !== 1){
      this.Result[index].Add = true;
    }
  }
 }
