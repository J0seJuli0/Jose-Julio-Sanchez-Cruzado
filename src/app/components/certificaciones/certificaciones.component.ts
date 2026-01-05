import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss']
})
export class CertificacionesComponent {

  certificationGroups = [
    {
      key: 'cloud',
      title: 'Cloud & Infraestructura',
      certifications: [
        {
          title: 'AWS Academy Graduate – Cloud Operations',
          issuer: 'AWS Academy',
          year: '2025',
          badge: 'assets/badges/aws-academy-graduate-cloud-operations-training-badg.png',
          file: 'assets/certificados/AWS_Academy_Graduate___Cloud_Operations__Certificate.pdf',
          verifyUrl: 'https://www.credly.com/badges/17ed1167-e5b1-4b91-a4f1-f3f2a4704876/public_url'
        },
        {
          title: 'Introduction to IoT',
          issuer: 'Cisco Networking Academy',
          year: '2023',
          badge: 'assets/badges/IOTLogo.jpg',
          file: 'assets/certificados/Introduction_to_IoT_certificate.pdf',
          verifyUrl: 'https://www.credly.com/badges/52b5985c-5c1a-43e9-be14-8745948d8711'
        }

      ]
    },
    {
      key: 'software',
      title: 'Desarrollo de Software',
      certifications: [
        {
          title: 'Curso Profesional de Git',
          issuer: 'Código Facilito',
          year: '2025',
          badge: 'assets/badges/GitIcon.png',
          file: 'assets/certificados/Certificado-CursoProfesionaldeGit.pdf',
          verifyUrl: 'https://codigofacilito.com/certificates/500ccee4-814b-42ef-a455-901dd06de01d'
        },
        {
          title: 'Fundamentos de Arquitectura de Software',
          issuer: 'Código Facilito',
          year: '2025',
          badge: 'assets/badges/software-architecture.png',
          file: 'assets/certificados/software-architecture-certificate.pdf',
          verifyUrl: 'https://codigofacilito.com/certificates/9cd8497a-c6db-4493-a5a2-b5110b21c230'
        },
        {
          title: 'Python Essentials 1',
          issuer: 'Cisco / OpenEDG',
          year: '2025',
          badge: 'assets/badges/python-essentials.png',
          file: 'assets/certificados/PythonEssentialsCertificate.pdf',
          verifyUrl: 'https://www.credly.com/badges/52091a1f-f882-46d4-9b8d-5dfcad0693e4/public_url'
        }
      ]
    },
    {
      key: 'security',
      title: 'Seguridad & Ethical Hacking',
      certifications: [
        {
          title: 'Ethical Hacking Professional (Participación)',
          issuer: 'Seguridad Cero',
          year: '2024',
          badge: 'assets/badges/ethicalHacking.jpg',
          file: 'assets/certificados/ethicalhackingCertificate.pdf',
          verifyUrl: ''
        }
      ]
    },
    {
      key: 'academic',
      title: 'Formación Académica',
      certifications: [
        {
          title: 'Constancia de Egresado – Computación e Informática',
          issuer: 'Instituto CIBERTEC',
          year: '2024',
          badge: 'assets/badges/graduate.png',
          file: 'assets/certificados/COVT.CIB-2025-001494_SANCHEZ CRUZADO, JOSE JULIO.pdf',
          verifyUrl: ''
        },
        {
          title: 'Desarrollo de Software y Gestión de Datos',
          issuer: 'Instituto CIBERTEC',
          year: '2023',
          badge: 'assets/badges/5610247.png',
          file: 'assets/certificados/DESAROLLO-SOFTWARE-GESTION-DATOS.pdf',
          verifyUrl: ''
        }
      ]
    },
    {
      key: 'soft',
      title: 'Habilidades Blandas',
      certifications: [
        {
          title: 'Trabajo en Equipo y Liderazgo',
          issuer: 'Instituto CIBERTEC',
          year: '2024',
          badge: 'assets/habilidades-blandas/reunion.png',
          file: 'assets/certificados/liderazgo-trabajo-equipo.pdf',
          verifyUrl: ''
        }
      ]
    },
    {
      key: 'tools',
      title: 'Herramientas & Productividad',
      certifications: [
        {
          title: 'Office Básico',
          issuer: 'Campus Romero',
          year: '2023',
          badge: 'assets/badges/officelogo.png',
          file: 'assets/certificados/Certificado_Office_Bsico.pdf',
          verifyUrl: ''
        },
        {
          title: 'Scrum Master',
          issuer: 'Campus Romero',
          year: '2023',
          badge: 'assets/badges/Scrum-Master-Badgle.png',
          file: 'assets/certificados/Scrum-Master.pdf',
          verifyUrl: 'https://agile-s-school-b953.thinkific.com/certificates/ybfxy63fxs'
        }
      ]
    }
  ];

  get totalCertifications(): number {
    return this.certificationGroups.reduce(
      (total, group) => total + group.certifications.length,
      0
    );
  }

}
