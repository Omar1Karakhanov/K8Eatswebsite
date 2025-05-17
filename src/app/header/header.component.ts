import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen: boolean = false

  toggle() {
    this.isMenuOpen = !this.isMenuOpen ? true : false
  }
}
