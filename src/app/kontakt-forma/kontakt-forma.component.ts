import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt-forma',
  templateUrl: './kontakt-forma.component.html',
  styleUrls: ['./kontakt-forma.component.css']
})
export class KontaktFormaComponent {

  log(x){
    console.log(x);
  }
  onSave($event){
    console.log("Poslato",$event);
  }

   //property-binding
 contact_icon = 'icon-envelope-o';
 contact_info = 'mladen.karic1@yahoo.com';

 location_icon = 'icon-map-o';
 location_info = 'Beograd, Mije Kovačevića 7b';

 phone_icon = 'icon-phone';
 phone_info = '061 6342 379';


}
