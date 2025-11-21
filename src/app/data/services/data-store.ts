import { Injectable, signal, computed } from '@angular/core';
import { learningTodoList } from '../angularTodoList';
import { Todo } from '../../pages/home/home';

@Injectable({
  providedIn: 'root',
})
export class DataStore {
    protected readonly todos = signal<Todo[]>(learningTodoList);
    public readonly todoListSorted = computed(() =>
        this.todos().slice().sort((a, b) => {
            if (a.completed === b.completed) return 0; // 状态相同，保持原序
            if (!a.completed && b.completed) return -1; // a未完成，b已完成，a排前
            if (a.completed && !b.completed) return 1;  // a已完成，b未完成，a排后
            return 0;
        })
    );
    public readonly toggleTodo = (id: string) => {
        this.todos.update(todos => todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };
}
