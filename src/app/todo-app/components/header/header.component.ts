import { CommonModule } from "@angular/common";
import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from "@angular/core";
import { TodoAppService } from "../../services/todo-app.service";

@Component({
  selector: "todo-header",
  standalone: true,
  templateUrl: "./header.component.html",
  imports: [CommonModule],
})
export class TodoHeaderComponent implements OnInit {
  @ViewChild("input", { read: ElementRef, static: true }) input!: ElementRef;

  inputValue = "";
  todoAppService = inject(TodoAppService);

  ngOnInit(): void {
    this.input.nativeElement.focus();
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
  }

  save() {
    this.todoAppService.addNewTodo(this.inputValue);
    this.inputValue = "";
  }
}
