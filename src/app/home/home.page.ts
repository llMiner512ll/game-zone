import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Componentes: Componente []=[
    {
      icon: 'mail-unread-outline',
      name: 'Home',
      redirectTo: '/home'
    }
  ];
  constructor() {}

  ngOnInit() {
  }
}
