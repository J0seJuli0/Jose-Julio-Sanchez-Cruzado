import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  proyectos = [
    {
      titulo: 'Facturador',
      descripcion: 'Sistema Web de control de inventario y emisión de comprobantes electrónicos hacia sunat.',
      imagen: 'img/Facturacion.png',
      link: 'https://gamiimports.com',
      github: 'https://github.com/julio/prestamos'
    },
    {
      titulo: 'RappiPizza',
      descripcion: 'Aplicación Angular para pedidos online',
      imagen: 'pizzeria.jpg',
      link: 'https://misitio.com/rappipizza',
      github: 'https://github.com/julio/rappipizza'
    },
    {
      titulo: 'Mi Portafolio',
      descripcion: 'Portafolio personal en Angular con diseño moderno',
      imagen: 'img/MiPortafolio.png',
      link: '#',
      github: 'https://github.com/julio/portafolio'
    }
  ];
}
