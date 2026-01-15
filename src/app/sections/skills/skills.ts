import { Component } from '@angular/core';
import { SKILLS } from '../../data/skills';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
})
export class Skills {
  skills = SKILLS;
}
