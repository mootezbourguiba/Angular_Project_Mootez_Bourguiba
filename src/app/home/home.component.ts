import { Component } from '@angular/core';
import { ListCategoriesComponent } from '../list-categories/list-categories.component';

@Component({
  standalone: true,
  imports: [ListCategoriesComponent],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { }
