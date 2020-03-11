import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: any[];

  constructor() {
    const prod1 = {
      nombre: 'Pan',
      descripcion: 'Pan de masa madre hecho artesanalmente.',
      img: 'assets/images/bread.png',
      comprado: false
    };
    const prod2 = {
      nombre: 'Pescado',
      descripcion: 'Pescado procedente de mares gallegos. Disponible en diferentes variedades.',
      img: 'assets/images/fish.png',
      comprado: false
    };
    const prod3 = {
      nombre: 'Carne',
      descripcion: 'Carne de cerdo, vaca...',
      img: 'assets/images/meat.png',
      comprado: false
    };
    const prod4 = {
      nombre: 'Huevos',
      descripcion: 'Huevos de gallinas camperas.',
      img: 'assets/images/egg.png',
      comprado: false
    };
    const prod5 = {
      nombre: 'Café',
      descripcion: 'Café procedente de Colombia.',
      img: 'assets/images/coffee.png',
      comprado: false
    };
    const prod6 = {
      nombre: 'Leche',
      descripcion: 'Leche de vaca, procedente de Galicia.',
      img: 'assets/images/milk.png',
      comprado: false
    };
    const prod7 = {
      nombre: 'Queso',
      descripcion: 'Queso de cabra',
      img: 'assets/images/cheese.png',
      comprado: false
    };
    const prod8 = {
      nombre: 'Manzanas',
      descripcion: 'Manzanas golden',
      img: 'assets/images/apple.png',
      comprado: false
    };
    const prod9 = {
      nombre: 'Chocolate',
      descripcion: 'Chocolate con leche',
      img: 'assets/images/chocolate.png',
      comprado: false
    };
    const prod10 = {
      nombre: 'Miel',
      descripcion: 'Miel de abejas',
      img: 'assets/images/honey.png',
      comprado: false
    };
    const prod11 = {
      nombre: 'Cerveza',
      descripcion: 'Estrella Galicia',
      img: 'assets/images/beer.png',
      comprado: false
    };
    const prod12 = {
      nombre: 'Zanahorias',
      descripcion: 'Dos kilos de zanahorias',
      img: 'assets/images/carrot.png',
      comprado: false
    };
    this.productos = [];
    this.productos.push(prod1);
    this.productos.push(prod2);
    this.productos.push(prod3);
    this.productos.push(prod4);
    this.productos.push(prod5);
    this.productos.push(prod6);
    this.productos.push(prod7);
    this.productos.push(prod8);
    this.productos.push(prod9);
    this.productos.push(prod10);
    this.productos.push(prod11);
    this.productos.push(prod12);
  }

  seleccionarCompra(index) {
    this.productos[index].comprado = !this.productos[index].comprado;
  }

  ngOnInit() {
  }

}

