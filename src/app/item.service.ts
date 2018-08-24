import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

  @Injectable({
  providedIn: 'root'
})

export class ItemService {
  itensUrl = 'http://localhost:8080/itens';

  constructor(private http: HttpClient) { }


  listar() {
    return this.http.get<any[]>(this.itensUrl);
  }
  listarClientes(): Observable<any> {
    return this.http.get<any[]>(`${this.itensUrl}/clients`);
  }

  adicionar(item: any) {
    return this.http.post(this.itensUrl, item);
  }
}
