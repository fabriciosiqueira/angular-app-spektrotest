import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';

import { Produto } from '../produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  public successMsg: string;
  public errorMsg: string;
  public nome: string;
  public categoria: string;
  public qtd: number;
  public preco: number;

  constructor(private produtoService: ProdutosService) { }

  ngOnInit() {
  }

  registerProduto() {
    this.successMsg = '';
    this.errorMsg = '';
    this.produtoService.registerProduto(this.nome,this.categoria,this.qtd,this.preco)
      .subscribe((registedProduto: Produto) => {
        this.nome='';
        this.categoria='';
        this.qtd=null;
        this.preco=null;
        this.successMsg = 'Produto registrado com sucesso';

      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
        
      })
  }
}
