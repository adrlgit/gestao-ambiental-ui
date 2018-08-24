import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ItemService } from '../item.service';


@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  itens = [];
  clientes: Array<any>;

  constructor(private itemService: ItemService) {
    this.consultar();
   }

  consultar() {
    this.itemService.listar()
      .subscribe(dados => this.itens = dados);
  }
  ngOnInit() {
    this.itemService.listarClientes()
      .subscribe(Response => this.clientes = Response);
  }

  adicionar(frm: FormControl) {
    console.log(frm.value);

    this.itemService.adicionar(frm.value)
      .subscribe(() => {
      frm.reset();
      this.consultar();
    });
  }

}
