import { Component, OnInit } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  Componentes: Componente []=[
    {
      icon: 'mail-unread-outline',
      name: 'Registro',
      redirectTo: '/registro'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
