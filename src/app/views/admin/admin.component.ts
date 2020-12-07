import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService, ISidebar } from '../shared/layout/sidebar/sidebar.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit, OnDestroy {

  sidebar: ISidebar;
  subscription: Subscription;

  constructor(private _sidebarService: SidebarService) { }

  ngOnInit(): void {
    this.subscription = this._sidebarService.getSidebar().subscribe(
      res => {
        this.sidebar = res;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
