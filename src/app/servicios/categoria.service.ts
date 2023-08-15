import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/modelos/categoria.model';



@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url = 'http://192.168.137.176:8000/categoria';
  constructor(private http: HttpClient){
  }
  listarCategorias():Observable<any>{
    return this.http.get(this.url);
  }
  getCategoria(id: string):Observable<any>{
    return this.http.get(this.url);
  }
  eliminarCategoria(id: string):Observable<any>{
    return this.http.get(this.url+'/'+id);
  }
  agregarCategoria(categoria: Categoria): Observable <any>{
    return this.http.post(this.url, categoria);
  }
  editarCategoria (id:string, categoria:Categoria): Observable<any> {
    return this.http.put(this.url+"/", categoria);
  }
}


