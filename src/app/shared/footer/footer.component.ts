import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = '//counter.top.ge/counter.js';
    document.body.appendChild(script);
  }
}
