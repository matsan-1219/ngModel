import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crud de registro con ngModel y ts';
  public numeroPersonas:number = 0;//reactiva el campo de texto

  public inventario:any = [
    {id:1, nombre: "pantalon", precio:250},
    {id:2, nombre: "chamarra", precio:500}
  ];

  public formulario:any ={
    id:null,
    nombre:null,
    precio:null
  }
  public limpiar(){
    this.formulario.id = null;
    this.formulario.nombre =null;
    this.formulario.precio =null;
  }
  public editar(){
  if(this.formulario.id != null && this.formulario.nombre !=null && this.formulario.precio != null){
    let id:number = this.formulario.id;
    for(let index = 0; index < this.inventario.length; index++){
      if(this.inventario[index].id == id){
        this.inventario[index].id= this.formulario.id;
        this.inventario[index].nombre= this.formulario.nombre;
        this.inventario[index].precio= this.formulario.precio;
        this.limpiar();
        alert("se ha modificado con exito !!");
        break;
      }
    }
  }else{
  alert("necesitas seleccionar un producto");
}
}
  public seleccionar(articulos:any){
    this.formulario.id = articulos.id;
    this.formulario.nombre = articulos.nombre;
    this.formulario.precio = articulos.precio;
  }
  public eliminar(id:number){
    for(let index =0; index<this.inventario.length; index++){
      if(this.inventario[index].id == id){
        this.inventario.splice(index,1);
        alert("eliminado con exito!!");
        break;
      }
    }
  }
  public buscarRepetido(id:number){
  let respuesta:boolean = false;
  for(let index =0; index < this.inventario.length; index++){
    if(this.inventario[index].id == id){
      respuesta = true;
      break;
    }
  } 
  return respuesta;
  }
  public agragar(){
    if(this.formulario.id != null 
      && this.formulario.id > 0
      && this.formulario.nombre !=null 
      && this.formulario.precio != null){
    let existe = this.buscarRepetido(this.formulario.id);
    if(!existe){
      let datoNuevo ={
        id : this.formulario.id,
        nombre : this.formulario.nombre,
        precio : this.formulario.precio
      };
      this.inventario.push(datoNuevo);
      this.limpiar();
      alert("agregado con exito");
      
    }else{
      alert("ese id ya existe, por favor agrega otro");
    }
  } else{
    alert("debes llenar todos los campos!!");
  }
 }
}
