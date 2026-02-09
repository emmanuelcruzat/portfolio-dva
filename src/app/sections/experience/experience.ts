import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';
@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  imports: [RevealOnScrollDirective],
})
export class Experience {}
