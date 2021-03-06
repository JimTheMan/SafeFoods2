/// <reference path="../typings/index.d.ts"/>

import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig} from '@angular/router';
import {AppComponent} from './app/containers/App';
import {DashboardComponent} from './app/containers/dashboard/Dashboard';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})
export class RootComponent {
}

export const routes: RouterConfig = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];
