import { Component } from '@angular/core';
import { ListCategoriesComponent } from '../list-categories/list-categories.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, ListCategoriesComponent]
})
export class HomeComponent { }
