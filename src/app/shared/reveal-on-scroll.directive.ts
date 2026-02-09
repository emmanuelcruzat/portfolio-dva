import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[revealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input() revealThreshold = 0.15; // how much visible before triggering
  @Input() revealRootMargin = '0px 0px -10% 0px'; // trigger a bit before fully in view
  @Input() revealOnce = true;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    // Ensure base class exists
    this.el.nativeElement.classList.add('reveal');

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('is-visible');
            if (this.revealOnce) this.observer?.unobserve(this.el.nativeElement);
          } else if (!this.revealOnce) {
            this.el.nativeElement.classList.remove('is-visible');
          }
        }
      },
      {
        threshold: this.revealThreshold,
        rootMargin: this.revealRootMargin,
      },
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
