import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-lista-de-libros',
  templateUrl: './lista-de-libros.component.html',
  styleUrls: ['./lista-de-libros.component.css']
})
export class ListaDeLibrosComponent implements OnInit {

  libros: Array<Object>;
  errorHttp: Boolean;
  cargando:Boolean;


  constructor(private http: Http) {

  }

  ngOnInit() {
    this.cargando = true;
    this.cargarLista();
  }

  cargarLista() {
    this.http.request('assets/json/lista-de-libros.json').subscribe(
      (respuesta: Response) => { this.libros = respuesta.json(); this.cargando = false },
      (respuesta: Response) => { this.errorHttp = true }
    )
  }

}
