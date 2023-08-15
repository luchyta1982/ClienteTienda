import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public listaProductos: any;
  public listaCategorias: any;
  display='none';
  idProducto:any;
  url:any;

  constructor(private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private router: Router){
      this.url = 'http://192.168.137.176:8000/media/fotos';
    }

  obtenerProductos(){
    this.productoService.getProductos().subscribe((result)=>{
      this.listaProductos=result;
    });
  }

  listarCategorias(){
    this.categoriaService.listarCategorias().subscribe((result)=>{
      this.listaCategorias=result;
    })
  }
  cerrarModal(){
    this.display='none';
  }

  abrirModalEliminar(id:number){
    this.display='block';
    this.idProducto=id;
  }
  eliminarProducto(){
    this.productoService.eliminarProducto(this.idProducto).subscribe((result)=>{
        this.obtenerProductos();
      },error =>{
        console.log(error);
      });
      this.display='none';
  }

  ngOnInit(): void {
    this.listarCategorias();
    this.obtenerProductos();
  }

}
