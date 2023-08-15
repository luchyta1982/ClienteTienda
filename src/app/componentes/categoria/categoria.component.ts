import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/modelos/categoria.model';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  public frmCategoria!: FormGroup;
  public categoria!: Categoria;
  public mensaje: string = '';
  public listaCategorias: any;

  constructor(private location: Location, private categoriaService: CategoriaService) {

  }
  obtenerCategorias() {
    this.categoriaService.listarCategorias().subscribe(data => {
      console.log(data);
      this.listaCategorias = data;
    }, error => {
      console.log(error);
    })

  }
  public agregarCategoria = (frmCategoriaValue: { txtCategoria: string; }) => {
    //validar formularios
    if (this.frmCategoria.valid) {
      this.categoria = new Categoria(frmCategoriaValue.txtCategoria.valueOf());
    }
    this.categoriaService.agregarCategoria(this.categoria).subscribe(respuesta => {
      console.log(respuesta);
      this.mensaje = "Categoria agregada coreectamente";
    }, error => {
      console.log(error);
      this.mensaje = "Problemas al agregar categoria";
      this.frmCategoria.reset();
    });
  }
  ngOnInit(): void {
    this.frmCategoria = new FormGroup({
      txtCategoria: new FormControl('',
        [Validators.required, Validators.maxLength(60)]),
    });

  }

}
