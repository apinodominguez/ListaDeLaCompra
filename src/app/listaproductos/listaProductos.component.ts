import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',y
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: any[];

  constructor() {
    const prod1 = {
      nombre: 'Pan',
      descripcion: 'Pan de masa madre hecho artesanalmente.',
      img: 'assets/image/bread.png',
      comprado: true
    };
    const prod2 = {
      nombre: 'Pescado',
      descripcion: 'Pescado procedente de mares gallegos. Disponible en diferentes variedades.',
      img: 'assets/image/fish.png',
      comprado: false
    };
    const prod3 = {
      nombre: 'Carne',
      descripcion: 'Carne de cerdo, vaca...',
      img: 'assets/image/meat.png',
      comprado: false
    };
    const prod4 = {
      nombre: 'Huevos',
      descripcion: 'Huevos de gallinas camperas.',
      img: 'assets/image/egg.png',
      comprado: true
    };
    const prod5 = {
      nombre: 'Café',
      descripcion: 'Café procedente de Colombia.',
      img: 'assets/image/coffee.png',
      comprado: false
    };
    const prod6 = {
      nombre: 'Leche',
      descripcion: 'Leche de vaca, procedente de Galicia.',
      img: 'assets/image/milk.png',
      comprado: false
    };
    const prod7 = {
      nombre: 'Queso',
      descripcion: 'Queso de cabra',
      img: 'assets/image/cheese.png',
      comprado: true
    };
    const prod8 = {
      nombre: 'Manzanas',
      descripcion: 'Manzanas golden',
      img: 'assets/image/apple.png',
      comprado: false
    };
    const prod9 = {
      nombre: 'Chocolate',
      descripcion: 'Chocolate con leche',
      img: 'assets/image/chocolate.png',
      comprado: false
    };
    const prod10 = {
      nombre: 'Miel',
      descripcion: 'Miel de abejas',
      img: 'assets/image/honey.png',
      comprado: false
    };
    const prod11 = {
      nombre: 'Cerveza',
      descripcion: 'Estrella Galicia',
      img: 'assets/image/beer.png',
      comprado: false
    };
    const prod12 = {
      nombre: 'Zanahorias',
      descripcion: 'Dos kilos de zanahorias',
      img: 'assets/image/carrot.png',
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
