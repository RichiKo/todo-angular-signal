import { Injectable, signal } from "@angular/core";
import { TodoModel } from "../types/todo.interface";
import { FilterType } from "../types/filter.enum";

@Injectable({
  providedIn: "root",
})
export class TodoAppService {
  todoList = signal<TodoModel[]>([]);
  todoFilter = signal<FilterType>(FilterType.ALL);

  addNewTodo(text: string) {
    const newTodo: TodoModel = {
      id: this.generateId(),
      text,
      isDone: false,
      isEdit: false,
    };

    this.todoList.update((values) => {
      return [...values, newTodo];
    });
  }

  toggleDone(id: string) {
    this.todoList.update((values) => {
      return values.map((value) =>
        value.id === id ? { ...value, isDone: !value.isDone } : value
      );
    });
  }

  removeItem(id: string) {
    this.todoList.update((values) => {
      return values.filter((value) => value.id !== id);
    });
  }

  editItemText(id: string, newText: string) {
    this.todoList.update((values) => {
      return values.map((value) =>
        value.id === id ? { ...value, text: newText } : value
      );
    });
  }

  toggleAll(done: boolean) {
    this.todoList.update((values) => {
      return values.map((value) => {
        return { ...value, isDone: done };
      });
    });
  }

  setFilter(filter: FilterType): void {
    this.todoFilter.set(filter);
  }

  clearCompleted(): void {
    this.todoList.update((values) => {
      return values.filter((todo) => !todo.isDone);
    });
  }

  private generateId(): string {
    return "id" + Math.random().toString(16).slice(2);
  }
}
