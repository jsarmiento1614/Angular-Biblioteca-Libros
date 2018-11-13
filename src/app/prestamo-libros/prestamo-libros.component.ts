import { Component, OnInit } from '@angular/core';
import { Biblioteca } from 'src/shared/models/biblioteca';
import { PrestamoLibrosMock } from 'src/shared/biblioteca-mock';

@Component({
  selector: 'app-prestamo-libros',
  templateUrl: './prestamo-libros.component.html',
  styleUrls: ['./prestamo-libros.component.css']
})
export class PrestamoLibrosComponent implements OnInit {

  constructor() { }
  listaDeLibros:  Array<Biblioteca>;
  categoria: string[];
  libroSelecionado:Biblioteca;
  pLibro:number;

  ngOnInit() {
    this.listaDeLibros = PrestamoLibrosMock;
    this.categoria=["Medicina","Informática", "Ciencias Exactas"];
  }

  onSelect(libro:Biblioteca):void{
    this.libroSelecionado=libro;
  }

  prestarLibro():void{
    if (this.libroSelecionado.copiasDisponibles > 0){
      this.libroSelecionado.copiasDisponibles = this.libroSelecionado.copiasDisponibles - 1;
    }else{
      alert("No hay en stock")
    }

  }
}
