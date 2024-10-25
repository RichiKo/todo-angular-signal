import { CommonModule, NgClass } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TodoModel } from "../../types/todo.interface";

@Component({
  selector: "todo-item",
  templateUrl: "./todo-item.component.html",
  standalone: true,
  imports: [CommonModule, NgClass],
})
export class TodoItemComponent {
  @Input({ required: true }) todoItem!: TodoModel;
  @Output() toggleDoneEvent = new EventEmitter<string>();
  @Output() removeEvent = new EventEmitter<string>();
  @Output() editTextEvent = new EventEmitter<[string, string]>();

  editedText = "";
  isEdit = false;

  onEditItemText(event: Event): void {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    this.editedText = target.value;
  }

  onUpdateText(): void {
    this.editTextEvent.emit([this.todoItem.id, this.editedText]);
    this.editedText = "";
    this.isEdit = false;
  }
}
