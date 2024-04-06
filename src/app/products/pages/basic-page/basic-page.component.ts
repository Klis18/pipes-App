import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  public nameLower: string = 'kenia';
  public nameUpper: string = 'KENIA';
  public fullName: string = 'KeNiA nIeVeS';

  public customDate: Date = new Date();
}
