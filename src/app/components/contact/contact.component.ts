import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nombre: string = '';
  email: string = '';
  asunto: string = '';
  mensaje: string = '';
  enviando: boolean = false;

  async enviarFormulario() {
    if (!this.nombre || !this.email || !this.asunto || !this.mensaje) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos antes de enviar.',
        confirmButtonColor: '#667eea'
      });
      return;
    }

    this.enviando = true;

    try {
      const response = await fetch('https://mail-portafolio.onrender.com/send_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: this.nombre,
          email: this.email,
          asunto: this.asunto,
          mensaje: this.mensaje
        })
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: 'success',
          title: '¡Mensaje enviado!',
          text: result.message || 'Tu mensaje fue enviado con éxito.',
          confirmButtonColor: '#667eea'
        });

        // Limpiar formulario
        this.nombre = '';
        this.email = '';
        this.asunto = '';
        this.mensaje = '';
      } else {
        throw new Error(result.error || 'Error al enviar el mensaje');
      }
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Error 😥',
        text: error.message || 'Ocurrió un problema al enviar tu mensaje.',
        confirmButtonColor: '#667eea'
      });
    } finally {
      this.enviando = false;
    }
  }
}
