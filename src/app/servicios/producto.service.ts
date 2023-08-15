import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/modelos/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://192.168.137.176:8000/producto';
  constructor(private http: HttpClient){
  }
  getProductos():Observable<any>{
    return this.http.get(this.url);
  }
  getProducto(id: string):Observable<any>{
    return this.http.get(this.url+"/"+id);
  }
  eliminarProducto(id: string):Observable<any>{
    return this.http.delete(this.url+'/'+id);
  }
  /*
  *@param producto
  *@return producto agregado en formato json
  */
  agregarProducto(producto: any): Observable <any>{
    return this.http.post(this.url, producto);
  }
  editarProducto(id: string, producto: Producto): Observable <any>{
    return this.http.post(this.url+"/"+id, producto);
  }

}
