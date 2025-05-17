import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IntroComponent, RouterOutlet, MainComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
   constructor(private router: Router) {}

  goToShop() {
    this.router.navigate(['/shop']);
  }
}
