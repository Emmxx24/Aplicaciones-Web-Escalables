import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./Components/header/header";
import { Content } from "./Components/content/content";
import { Footer } from "./Components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Content, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('miSegundaApp');
}
