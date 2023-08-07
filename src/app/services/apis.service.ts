import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http" 
import { Observable } from 'rxjs';
import { ApiResponse, Products } from '../interface/products.interface';
import { map } from "rxjs/operators"
import { Credentials, User, UserDetail } from '../interface/user.interface';
import { Items, items } from '../interface/items.interface';

const options = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

const headerOptions ={
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    "auth-token": localStorage.getItem("token")!
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  private api = "https://book-store-ay9n.onrender.com/api"

  constructor(private http: HttpClient) { }

  // Products and Items
  getProducts(): Observable<Products[]> {
    return this.http.get<ApiResponse>(`${this.api}/products/products`).pipe(
      map(response => response.products)
    )
  }

  getItems():Observable<Items[]>{
    return this.http.get<items>(`${ this.api }/items/getItems`, headerOptions).pipe(map(response => response.items))
  }

  addProducts(products: Products): Observable<Products>{
    return this.http.post<Products>(`${ this.api }/items/addItems`, products, headerOptions)
  }

  deleteProducts(id?:string):Observable<Items>{
    return this.http.delete<Items>(`${this.api}/items/deleteItems/${ id }`, headerOptions)
  }

  // Authentications
  login(user: User): Observable<string>{
    return this.http.post<Credentials>(`${ this.api }/user/auth`,user, options).pipe(
      map((response: Credentials) => {
        if (response.success) {
          localStorage.setItem('token', response.authToken);
          return response.authToken;
        } else {
          return 'Login Failed';
        }
      })
    )
  }

  register(user: User): Observable<string>{
    return this.http.post<Credentials>(`${ this.api }/user/createUser`,user, options ).pipe(
      map((response: Credentials) => {
        if (response.success) {
          localStorage.setItem('token', response.authToken);
          return response.authToken;
        } else {
          return 'Login Failed'; 
        }
      })
    )
  }

  getDetails():Observable<User>{
    return this.http.get<UserDetail>(`${this.api}/user/login`, headerOptions).pipe(map(response => response.user))
  }
}
