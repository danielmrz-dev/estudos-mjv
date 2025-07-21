import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponentContainer } from "./components/container/container.component.container";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContainerComponentContainer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Este é o título!';
}
