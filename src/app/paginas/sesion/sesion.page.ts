import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  Componentes: Componente []=[
    {
      icon: 'mail-unread-outline',
      name: 'Sesion',
      redirectTo: '/sesion'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
