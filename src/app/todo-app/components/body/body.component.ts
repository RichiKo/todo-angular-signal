import { CommonModule } from "@angular/common";
import { Component, computed, inject } from "@angular/core";
import { TodoAppService } from "../../services/todo-app.service";
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { FilterType } from "../../types/filter.enum";

@Component({
  selector: "todo-body",
  templateUrl: "./body.component.html",
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
})
export class TodoBodyComponent {
  todoAppService = inject(TodoAppService);

  todoFilteredList = computed(() => {
    const todoList = this.todoAppService.todoList();
    const filter = this.todoAppService.todoFilter();

    if (filter === FilterType.ACTIVE) {
      return todoList.filter((todo) => !todo.isDone);
    }

    if (filter === FilterType.COMPLETED) {
      return todoList.filter((todo) => todo.isDone);
    }
    return todoList;
  });

  isAllChecked = computed(() => {
    return this.todoAppService.todoList().every((todo) => todo.isDone);
  });

  toggleDone(id: string) {
    this.todoAppService.toggleDone(id);
  }

  removeItem(id: string) {
    this.todoAppService.removeItem(id);
  }

  editItemText([id, text]: [string, string]) {
    this.todoAppService.editItemText(id, text);
  }

  toggleAll(event: Event) {
    event.preventDefault();
    this.todoAppService.toggleAll((event.target as HTMLInputElement).checked);
  }
}
