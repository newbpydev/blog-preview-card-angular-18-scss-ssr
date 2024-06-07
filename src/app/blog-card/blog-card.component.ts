import { Component, input } from '@angular/core';

import { Blog } from '../types/blog';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  blog = input.required<Blog>();
}
