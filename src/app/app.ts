import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicNavbar } from './shared/public-navbar/public-navbar';
import { PublicFooter } from './shared/public-footer/public-footer';

@Component({
  imports: [RouterOutlet, PublicNavbar, PublicFooter],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('task-manager');
}
