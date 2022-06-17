import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiServerUrl}/product/all`);
  }
  public addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.apiServerUrl}/product/add`, product);
  }
  public updateProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.apiServerUrl}/product/update`, product);
  }
  public deleteProduct(productId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/product/delete/${productId}`);
  }
}
