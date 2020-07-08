import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  localhost = environment.baseURL;

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get(this.localhost + 'read-csv')
  }

  getProductById(id) {
    return this.http.get(this.localhost + `product/${id}`)
  }

}
