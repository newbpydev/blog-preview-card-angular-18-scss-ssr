import { Component, input } from '@angular/core';

import { Blog } from '../types/blog';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './blog-card.component.html',
  styleUrl: './blog-card.component.scss',
})
export class BlogCardComponent {
  blog = input.required<Blog>();
}
