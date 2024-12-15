import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Categorie } from '../models/categorie';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent implements OnInit {
  categoryId!: number;
  category: Categorie | undefined;

  categories: Categorie[] = [
    { id: 1, title: 'Grand électroménager', image: 'assets/images/categorie_electromenager.jpg', description: 'Description 1', available: true },
    { id: 2, title: 'Petit électroménager', image: 'assets/images/categorie_petit_electromenager.jpg', description: 'Description 2', available: true },
    { id: 3, title: 'Produits informatiques', image: 'assets/images/categorie_produits_informatiques.jpg', description: 'Description 3', available: true },
    { id: 4, title: 'Smart Phones', image: 'assets/images/categorie_smartPhone.jpg', description: 'Description 4', available: true },
    { id: 5, title: 'TV, images et son', image: 'assets/images/categorie_tv_image_son.jpg', description: 'Description 5', available: true },
    { id: 6, title: 'Produits voiture', image: 'assets/images/produits_nettoyages.jpg', description: 'Description 6', available: false }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.categoryId = this.route.parent?.snapshot.params['id'];
    this.category = this.categories.find(cat => cat.id == this.categoryId);
  }
}
