import { Component } from '@angular/core';

interface Image {
  url: string;
  category: string;
}

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css'],
})
export class GallaryComponent {
  images: Image[] = [
    { url: 'assets/images/gallary1.jpg', category: 'pool' },
    { url: 'assets/images/gallary2.jpg', category: 'lobby' },
    { url: 'assets/images/gallary3.jpg', category: 'garden' },
    { url: 'assets/images/gallary1.jpg', category: 'pool' },
    { url: 'assets/images/gallary2.jpg', category: 'lobby' },
    { url: 'assets/images/gallary3.jpg', category: 'garden' },
  ];

  sortedImages: Image[] = this.images;

  sortImages(category: string) {
    if (category === 'all') {
      this.sortedImages = this.images;
    } else {
      this.sortedImages = this.images.filter(
        (image) => image.category === category
      );
    }
  }
}
