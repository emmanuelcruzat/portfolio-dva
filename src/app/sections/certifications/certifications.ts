import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-certs',
  standalone: true,
  templateUrl: './certifications.html',
  imports: [RevealOnScrollDirective],
})
export class Certifications {}
