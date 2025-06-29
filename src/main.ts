import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routerConfig from "./app/app.routes";
bootstrapApplication(AppComponent,{providers:[provideRouter(routerConfig)]})
  .catch((err) => console.error(err));

