import {provideRouter, RouterConfig} from '@angular/router';
import {Home} from './containers/main-app';
import {InputDemo} from './components/material/input/input-demo';



export const routes: RouterConfig = [
  {path: '', component: Home},
  {path: 'input', component: InputDemo}
];

export const DEMO_APP_ROUTE_PROVIDER = provideRouter(routes);
