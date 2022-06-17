import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  public products!: Product[];

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(){
    this.productService.getProducts().subscribe({
      next: (response: Product[]) => {
        this.products = response;
        console.log(this.products);
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

}
