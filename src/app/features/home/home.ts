import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements AfterViewInit, OnDestroy {

  @ViewChild('homeSection')
  homeSection!: ElementRef<HTMLElement>;

  @ViewChild('featuresSection')
  featuresSection!: ElementRef<HTMLElement>;

  @ViewChild('targetAudienceSection')
  targetAudienceSection!: ElementRef<HTMLElement>;

  @ViewChild('whatYouCanDoSection')
  whatYouCanDoSection!: ElementRef<HTMLElement>;

  @ViewChild('ctaSection')
  ctaSection!: ElementRef<HTMLElement>;

  homeVisible = signal(false);
  featuresVisible = signal(false);
  targetVisible = signal(false);
  whatYouCanDoVisible = signal(false);
  ctaVisible = signal(false);


  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {

    const sections = [
      this.homeSection.nativeElement,
      this.featuresSection.nativeElement,
      this.targetAudienceSection.nativeElement,
      this.whatYouCanDoSection.nativeElement,
      this.ctaSection.nativeElement
    ];

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === this.homeSection.nativeElement) {
            this.homeVisible.set(true);
          } else if (entry.target === this.featuresSection.nativeElement) {
            this.featuresVisible.set(true);
          } else if (entry.target === this.targetAudienceSection.nativeElement) {
            this.targetVisible.set(true);
          } else if (entry.target === this.whatYouCanDoSection.nativeElement) {
            this.whatYouCanDoVisible.set(true);
          } else if (entry.target === this.ctaSection.nativeElement) {
            this.ctaVisible.set(true);
          }

          this.observer?.unobserve(entry.target);

        }

      });

    }, { threshold: 0.15 });

    sections.forEach((section) => {
      this.observer?.observe(section);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
