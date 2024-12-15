import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms'; // Assurez-vous que NgForm est importé
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class FormProductComponent {
  product: any = {};

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
