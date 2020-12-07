import { AfterViewInit, Component, Injectable, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

@Injectable()
export class AppComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.renderer.addClass(document.body, 'show');
    }, 1000);
    setTimeout(() => {
      this.renderer.addClass(document.body, 'default-transition');
    }, 1500);
  }

}
