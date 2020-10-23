import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss'],
})
export class NewsletterComponent {
  @ViewChild('area') inputArea: any;

  areas = ['Tecnologia (Default)'];

  constructor() {}

  addAreas(item: string) {
    this.areas = [...this.areas, item];
    this.inputArea.nativeElement.value = ' ';
  }
}
