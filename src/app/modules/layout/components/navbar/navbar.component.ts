import { Component } from '@angular/core';
import { Menu } from '@modules/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menu: Menu[] = [
    {
      link: '/app',
      title: 'Home',
      icon: 'home'
    },
    {
      link: '/app/letras',
      title: 'Letras',
      icon: 'menu_book'
    },
    {
      link: '/app/parrafo',
      title: 'Parrafo',
      icon: 'library_books'
    },
    {
      link: '/app/reactivos',
      title: 'Reactivos',
      icon: 'edit_square'
    }
  ]
}
