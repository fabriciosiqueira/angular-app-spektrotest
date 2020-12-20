import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Produto } from './Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private BASE_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.BASE_URL}/produtos`)
  }

  registerProduto(nome:string, categoria:string, qtd:number, preco:number): Observable<Produto> {
    return this.http.post<Produto>(`${this.BASE_URL}/produtos`, {
      nome,
      categoria,
      qtd,
      preco
    })
  }

  cancelProduto(id:string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/produtos/${id}`)
  }

}
