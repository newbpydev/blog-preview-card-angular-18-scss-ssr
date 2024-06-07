import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BlogCardComponent } from './blog-card/blog-card.component';
import { Blog, exampleBlogCard } from './types/blog';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, BlogCardComponent],
})
export class AppComponent {
  blog: Blog | undefined = exampleBlogCard;
}
