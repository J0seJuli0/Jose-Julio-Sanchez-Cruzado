import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proyectos = [
    {
      titulo: 'Facturador Electrónico',
      descripcion: 'Plataforma web para la emisión de comprobantes electrónicos integrados con SUNAT, que incluye gestión de inventario, control de ventas internas y generación automática de facturas y boletas en formato físico y digital.',
      descripcionCorta: 'Sistema de facturación electrónica con integración SUNAT',
      imagenes: ['proyectos/Dashboard-Gami.png', 'proyectos/Facturacion1.png', 'proyectos/Comprobante.png', 'proyectos/Cliente.png'],
      link: 'https://www.gamiimports.com',
      github: null,
      tecnologias: ['C#', 'Java Script', 'CSS', 'SUNAT API', 'Sql Server'],
      badge: 'Full Stack',
      lineasCodigo: '150K',
      complejidad: 'Producción',
      currentSlide: 0,
      autoSlideInterval: null as any
    },
    {
      titulo: 'RappiPizza Delivery',
      descripcion: 'Aplicación Angular moderna para pedidos online de pizza con carrito de compras, seguimiento en tiempo real y integración con pasarelas de pago.',
      descripcionCorta: 'App de delivery de pizza con seguimiento en tiempo real',
      imagenes: ['pizzeria.jpg', 'pizzeria2.jpg', 'pizzeria3.jpg'],
      link: 'https://misitio.com/rappipizza',
      github: 'https://github.com/julio/rappipizza',
      tecnologias: ['Angular', 'Firebase', 'Stripe', 'Leaflet'],
      badge: 'Frontend',
      lineasCodigo: '8K',
      complejidad: 'Intermedio',
      currentSlide: 0,
      autoSlideInterval: null as any
    },
    {
      titulo: 'Mi Portafolio Personal',
      descripcion: 'Portafolio personal desarrollado en Angular 19 con diseño responsive, animaciones CSS modernas y optimizado para SEO y rendimiento.',
      descripcionCorta: 'Portafolio personal con diseño moderno y responsive',
      imagenes: ['img/MiPortafolio.png', 'img/MiPortafolio2.png'],
      link: '#',
      github: 'https://github.com/julio/portafolio',
      tecnologias: ['Angular 19', 'TypeScript', 'SCSS', 'GSAP'],
      badge: 'Frontend',
      lineasCodigo: '5K',
      complejidad: 'Intermedio',
      currentSlide: 0,
      autoSlideInterval: null as any
    }
  ];

  ngOnInit() {
    this.proyectos.forEach(proyecto => {
      this.startAutoSlide(proyecto);
    });
  }

  startAutoSlide(proyecto: any) {
    proyecto.autoSlideInterval = setInterval(() => {
      this.nextSlide(proyecto);
    }, 4000);
  }

  stopAutoSlide(proyecto: any) {
    if (proyecto.autoSlideInterval) {
      clearInterval(proyecto.autoSlideInterval);
    }
  }

  nextSlide(proyecto: any) {
    proyecto.currentSlide = (proyecto.currentSlide + 1) % proyecto.imagenes.length;
  }

  prevSlide(proyecto: any) {
    proyecto.currentSlide = (proyecto.currentSlide - 1 + proyecto.imagenes.length) % proyecto.imagenes.length;
  }

  goToSlide(proyecto: any, index: number) {
    proyecto.currentSlide = index;
  }

  getBadgeClass(titulo: string): string {
    if (titulo.includes('Facturador')) return 'badge-fullstack';
    if (titulo.includes('RappiPizza')) return 'badge-web';
    return 'badge-mobile';
  }

  getBadgeIcon(titulo: string): string {
    if (titulo.includes('Facturador')) return 'bi-layers';
    if (titulo.includes('RappiPizza')) return 'bi-phone';
    if (titulo.includes('Portafolio')) return 'bi-globe';
    return 'bi-code-slash';
  }

  previewVisible = false;
  selectedProject: any = null;
  selectedImageIndex = 0;
  selectedImage = '';

  openPreview(proyecto: any) {
    this.selectedProject = proyecto;
    this.selectedImageIndex = 0;
    this.selectedImage = proyecto.imagenes[0];
    this.previewVisible = true;
  }

  closePreview() {
    this.previewVisible = false;
  }

  nextPreviewImage() {
    if (!this.selectedProject) return;
    this.selectedImageIndex = (this.selectedImageIndex + 1) % this.selectedProject.imagenes.length;
    this.selectedImage = this.selectedProject.imagenes[this.selectedImageIndex];
  }

  prevPreviewImage() {
    if (!this.selectedProject) return;
    this.selectedImageIndex =
      (this.selectedImageIndex - 1 + this.selectedProject.imagenes.length) %
      this.selectedProject.imagenes.length;
    this.selectedImage = this.selectedProject.imagenes[this.selectedImageIndex];
  }

}