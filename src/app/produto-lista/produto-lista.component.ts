import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { ProdutosService } from '../produtos.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  public loading = true;
  public errorMsg: string;
  public successMsg: string;
  public produtos: Produto[];
  public columns = ['nome','categoria','qtd','preco','cancel'];

  constructor(private produtoService: ProdutosService) { }

  ngOnInit() {
    this.produtoService.getProdutos()
      .subscribe((produtos: Produto[]) => {
        this.produtos = produtos;
        this.loading = false;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
        this.loading = false;
      })
  }

  cancelProduto(id: string) {
    this.produtoService.cancelProduto(id)
      .pipe(
        mergeMap(() => this.produtoService.getProdutos())
      ).subscribe((produtos: Produto[]) => {
        this.produtos = produtos;
        this.successMsg = 'Produto cancelado com sucesso'
      }, 
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      })
  }

}
