import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isMobile: boolean = false;
  isTablet: boolean = false;
  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }

  checkScreenSize() {
    if (!this.isBrowser) return;

    const width = window.innerWidth;
    this.isMobile = width <= 576;
    this.isTablet = width > 576 && width <= 991;
  }

  scrollToContact() {
    if (!this.isBrowser) return;

    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
