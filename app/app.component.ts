import {Component} from "angular2/core";
import {Pelicula} from "./model/pelicula";

@Component({
    selector: "mi-app",
    templateUrl: "app/view/peliculas.html",
    styleUrls: ["../assets/css/styles.css"]
})

export class AppComponent{
    public titulo:string = "Peliculas con Angular 2";
    // public pelicula:Pelicula;
    public mostrarPeliculas:boolean;
    public peliculas:Array<Pelicula>;


    constructor (){
        this.mostrarPeliculas = false;
        // this.pelicula = new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016);

        this.peliculas = [
            new Pelicula(1, "Batman vs Superman", "Zack Snider", 2016),
            new Pelicula(2, "Donde estan las rubias", "Un director", 2005),
            new Pelicula(3, "El origen", "otro director", 2009)
        ]
        this.debug();
    }

    mostrarOcultar(value){
        this.mostrarPeliculas = value;
    }

    debug(){
        console.log(this.peliculas);
    }
};