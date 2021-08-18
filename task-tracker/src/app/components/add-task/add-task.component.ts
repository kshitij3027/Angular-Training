import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { UiService } from "../../services/ui.service";
import { Subscription } from "rxjs";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  name: string=""
  email: string=""
  reminder: boolean=false
  showAddTask: boolean = false
  subscription:Subscription
  @Output() onAddTask: EventEmitter<any> = new EventEmitter()
  constructor(private uiService : UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value)=>
    this.showAddTask = value)
  }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.name){
      alert('Please add a task!')
      return;
    }
    const newTask = {
      id: Math.random(),
      name: this.name,
      email:this.email,
      username: "Bret",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: -37.3159,
        lng: 81.1496
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
    }
   
   
   
  
    this.onAddTask.emit(newTask)


    this.name=''
    this.email=''
    
  }

}
