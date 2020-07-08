import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  localhost = environment.baseURL;

  constructor(private http: HttpClient) { }

  // *************************
  // All Products Api's Endpoints
  // *************************

  // getting all products endpoint
  getAllProducts() {
    return this.http.get(this.localhost + 'read-csv')
  }

  // get product by id endpoint
  getProductById(id) {
    return this.http.get(this.localhost + `product/${id}`)
  }

  // upload csv file endpoint
  uploadCsv(file) {
    return this.http.post(this.localhost + `upload-csv`, file)
  }
}
