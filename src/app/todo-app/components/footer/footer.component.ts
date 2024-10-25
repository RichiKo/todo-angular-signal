import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { TodoAppService } from "../../services/todo-app.service";
import { FilterType } from "../../types/filter.enum";

@Component({
  selector: "todo-footer",
  templateUrl: "./footer.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class TodoFooterComponent {
  filterType = FilterType;
  todoAppService = inject(TodoAppService);
}
