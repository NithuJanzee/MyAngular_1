import { Component, Input } from '@angular/core';
import { TasksComponent } from "./tasks/tasks.component";
import { NewTasksComponent } from "./new-tasks/new-tasks.component";
import {type NewTaskData } from './tasks/tasks.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent, NewTasksComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // we want to out put name so we look for input 
  @Input({ required: true }) name!: string
  @Input({ required: true }) UserId!: string
  isAddingTask = false;
  Tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  get SelectedUserId() {
    return this.Tasks.filter((task) => task.userId === this.UserId)
  }

  onCompleteTask(id: string) {
    this.Tasks = this.Tasks.filter((task) => task.id !== id)
  }

  onStartAddTask() {
    this.isAddingTask = true; 
  }

  onCancelAddTask()
  {
    this.isAddingTask = false;
  }

  onAddTask(taskData:NewTaskData) {
    this.Tasks.push({
      id: new Date().getTime().toString(),
      userId:this.UserId,
      title:taskData.title,
      summary:taskData.summary,
      dueDate:taskData.date
    })
    this.isAddingTask = false;    
  }
}
