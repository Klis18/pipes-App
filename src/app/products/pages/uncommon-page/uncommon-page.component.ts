import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


  // i18n Select 
  public name: string = 'Fernando';
  public gender: 'male'| 'female' = 'male';
  public invitacionMap = {
    'male' : 'invitarlo',
    'female' : 'invitarla'
  }

  changeClient(): void{
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[]=['Maria','José','Alejandra','Belén','Mario','Luisa','Anthony'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }
  deleteClient(): void{
    this.clients.shift();
  }
}
