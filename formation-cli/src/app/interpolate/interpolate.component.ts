import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolate',
  templateUrl: './interpolate.component.html',
  styleUrls: ['./interpolate.component.css']
})
export class InterpolateComponent implements OnInit {
  prenom:string = "Sony";
  nom:string = "Lauret";
  formation:Formation = new Formation("test", "ceci est une formation");

  constructor() { }

  getFullName(){
    return this.prenom + ' ' + this.nom;
  }

  ngOnInit() {
  }

}

export class Formation {
  nom: string;
  description: string;

  constructor(nom:string, description:string){
    this.nom = nom;
    this.description = description;
  }
}