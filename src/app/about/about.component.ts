import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  imagePath: string = 'assets/images/main.jpg';
  currentSlide = 0;

  ngOnInit() {
    const carouselInner = document.querySelector(
      '.carousel-inner'
    ) as HTMLElement;
    const prevControl = document.querySelector(
      '.carousel-control.prev'
    ) as HTMLElement;
    const nextControl = document.querySelector(
      '.carousel-control.next'
    ) as HTMLElement;

    prevControl.addEventListener('click', () => {
      if (this.currentSlide > 0) {
        this.currentSlide--;
        this.updateCarouselPosition(carouselInner);
      }
    });

    nextControl.addEventListener('click', () => {
      const totalSlides = carouselInner.childElementCount;
      if (this.currentSlide < totalSlides - 1) {
        this.currentSlide++;
        this.updateCarouselPosition(carouselInner);
      }
    });
  }

  updateCarouselPosition(carouselInner: HTMLElement) {
    carouselInner.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  }
}
