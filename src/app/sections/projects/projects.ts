import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { RevealOnScrollDirective } from '../../shared/reveal-on-scroll.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './projects.html',
})
export class Projects {
  projects = PROJECTS; // <-- THIS is what was missing
}
