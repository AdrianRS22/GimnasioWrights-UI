import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit, OnDestroy {

  constructor(private _renderer: Renderer2) { }

  ngOnInit(): void {
    this._renderer.addClass(document.body, 'background');
    this._renderer.addClass(document.body, 'no-footer');
  }

  ngOnDestroy(): void {
    this._renderer.removeClass(document.body, 'background');
    this._renderer.removeClass(document.body, 'no-footer');
  }
}
