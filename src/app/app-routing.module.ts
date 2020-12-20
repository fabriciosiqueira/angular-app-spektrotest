import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "produto-list",
    component: ProdutoListaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
