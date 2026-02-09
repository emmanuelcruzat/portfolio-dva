import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  templateUrl: './education.html',
  imports: [RevealOnScrollDirective],
})
export class Education {}
