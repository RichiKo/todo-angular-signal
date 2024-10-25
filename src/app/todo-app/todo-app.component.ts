import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TodoHeaderComponent } from "./components/header/header.component";
import { TodoBodyComponent } from "./components/body/body.component";
import { TodoFooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "todo-app",
  standalone: true,
  templateUrl: "./todo-app.component.html",
  imports: [
    CommonModule,
    TodoHeaderComponent,
    TodoBodyComponent,
    TodoFooterComponent,
  ],
})
export class TodoAppComponent {}
