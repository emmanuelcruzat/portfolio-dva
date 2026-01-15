import { Component } from '@angular/core';
import { Hero } from '../../sections/hero/hero';
import { Projects } from '../../sections/projects/projects';
import { Skills } from '../../sections/skills/skills';
import { Education } from '../../sections/education/education';
import { Experience } from '../../sections/experience/experience';
import { Certifications } from '../../sections/certifications/certifications';
import { About } from '../../sections/about/about';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, Projects, Skills, Education, Experience, Certifications, About],
  templateUrl: './home.html',
})
export class HomeComponent {}
