import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
})
export class Navbar {
  open = false;

  constructor(private router: Router) {}

  toggle() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }

  /**
   * Scroll to a section by id (e.g. 'about', 'projects').
   * If you're not on '/', it navigates home first, then scrolls.
   */
  goToSection(id: string) {
    const scroll = () => {
      const el = document.getElementById(id);
      if (!el) return;

      // If you have a sticky navbar, this prevents it from covering the title:
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });

      this.close();
    };

    if (this.router.url !== '/') {
      this.router.navigateByUrl('/').then(() => setTimeout(scroll, 0));
    } else {
      scroll();
    }
  }
}
