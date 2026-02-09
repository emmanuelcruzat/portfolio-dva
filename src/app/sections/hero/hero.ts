import { AfterViewInit, Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('typedTarget', { static: true }) typedTarget!: ElementRef<HTMLSpanElement>;
  private typed?: Typed;

  ngAfterViewInit(): void {
    this.typed = new Typed(this.typedTarget.nativeElement, {
      strings: [
        "Hi, I'm Emmanuel!",
        'Hallo, ich bin Emmanuel.',
        'Hola, soy Emmanuel.',
        'Bonjour, je suis Emmanuel.',
        'Ciao, sono Emmanuel.',
        'Привет, меня зовут Эммануэль.',
        'こんにちは、エマニュエルです。',
      ],
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 1200,
      startDelay: 300,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: '|',
    });
  }

  ngOnDestroy(): void {
    this.typed?.destroy();
  }
}
