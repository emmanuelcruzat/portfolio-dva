import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  imports: [RevealOnScrollDirective],
})
export class About {}
