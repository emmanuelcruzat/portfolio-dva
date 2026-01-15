import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
})
export class Projects {
  projects = PROJECTS; // <-- THIS is what was missing
}
