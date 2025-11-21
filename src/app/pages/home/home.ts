import { Component, inject, signal } from '@angular/core';
import { DataStore } from '../../data/services/data-store';

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
    protected readonly title = signal('TodoList');
    protected readonly dataStore = inject(DataStore);
    protected readonly todoListSorted = this.dataStore.todoListSorted;
    protected readonly toggleTodo = this.dataStore.toggleTodo;
}
