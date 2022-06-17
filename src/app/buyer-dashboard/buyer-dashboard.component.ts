import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-buyer-dashboard',
  templateUrl: './buyer-dashboard.component.html',
  styleUrls: ['./buyer-dashboard.component.css']
})
export class BuyerDashboardComponent implements OnInit {

  public products!: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  public getProduct():void{
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
