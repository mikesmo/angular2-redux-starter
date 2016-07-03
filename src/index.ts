import 'reflect-metadata';
import 'babel-polyfill';
import 'core-js/es6';
import 'core-js/es7/reflect';
import '../shims/shims_for_IE';
import 'zone.js/dist/zone';
import 'ts-helpers';

import { enableProdMode, provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { APP_BASE_HREF } from '@angular/common/index';
import { NgRedux } from 'ng2-redux';

import { SessionActions } from './actions/session';
import { AuthService } from './services/auth/';
import { ServerService } from './services/server/';
import {MainApp} from './containers/main-app';

// Required by Angular Material
import {MdIconRegistry} from '@angular2-material/icon/icon-registry';
import {Renderer} from '@angular/core';
import {MdGestureConfig} from '@angular2-material/core/gestures/MdGestureConfig';
import {HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';
import {DEMO_APP_ROUTE_PROVIDER} from './routes';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

declare const __PRODUCTION__: boolean;
declare const __TEST__: boolean;

if (__PRODUCTION__) {
  enableProdMode();
} else {
  require('zone.js/dist/long-stack-trace-zone');
}

if (!__TEST__) {
  bootstrap(MainApp, [
    NgRedux,
    SessionActions,
    AuthService,
    ServerService,
    HTTP_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '/' }),
    // Required by Angular Material
    MdIconRegistry,
    Renderer,
    provide(HAMMER_GESTURE_CONFIG, {useClass: MdGestureConfig}),
    DEMO_APP_ROUTE_PROVIDER,
    disableDeprecatedForms(),
    provideForms(),
  ]);
}
