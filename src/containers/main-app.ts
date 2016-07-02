import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { AsyncPipe } from '@angular/common';
import { NgRedux, select } from 'ng2-redux';

import { IAppState } from '../reducers';
import rootReducer from '../reducers';
import { middleware, enhancers } from '../store';

@Component({
  selector: 'home',
  template: `
    <p>Welcome to this smart contracts demo!</p>
    <p>Open the sidenav to select a demo. </p>
  `
})
export class Home {}

@RouteConfig([
  {path: '/', component: Home}
])

@Component({
  selector: 'main-app',
  directives: [
    ROUTER_DIRECTIVES
  ],
  pipes: [ AsyncPipe ],
  // Allow app to define global styles.
  encapsulation: ViewEncapsulation.None,
  styles: [ require('../styles/main.scss'), require('./demo-app.scss') ],
  template: require('./main-app.html')
})

export class MainApp {

  constructor(
    private ngRedux: NgRedux<IAppState>) {

    ngRedux.configureStore(rootReducer, {}, middleware, enhancers);
  }

}
