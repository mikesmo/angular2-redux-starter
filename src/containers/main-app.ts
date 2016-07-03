import { Component, ViewEncapsulation } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { NgRedux, select } from 'ng2-redux';

import { IAppState } from '../reducers';
import rootReducer from '../reducers';
import { middleware, enhancers } from '../store';

import {MdButton} from '@angular2-material/button/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MdIcon} from '@angular2-material/icon/icon';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';

@Component({
  selector: 'home',
  template: `
    <p>Welcome to this smart contracts demo!</p>
    <p>Open the sidenav to select a demo. </p>
  `
})
export class Home {}

@Component({
  selector: 'main-app',
  directives: [
    ROUTER_DIRECTIVES,
    MdButton,
    MdIcon,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdToolbar
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
