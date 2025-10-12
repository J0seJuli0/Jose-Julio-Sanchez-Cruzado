import { Component, Inject, PLATFORM_ID, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpen = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth <= 768) {
        this.isOpen = false;
      }
    }
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth <= 768) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    }
  }
}
