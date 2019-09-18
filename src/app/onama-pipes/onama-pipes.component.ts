import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onama-pipes',
  templateUrl: './onama-pipes.component.html',
  styleUrls: ['./onama-pipes.component.css'],
  template:
  
  `
  {{ onama.title | uppercase }} <br/> <br/>
  {{ onama.text1 }} <br/> <br/>
  {{ onama.text2 }} <br/> <br/>
  
  `
})
export class OnamaPipesComponent  {

//pipes
 onama = {
  title: 'O nama',
  text1: 'Prvu custom gitaru sam napravio 2014. godine. Od tada, kroz moju radionicu je prošao veliki broj ručno napravljenih gitara. Vremenom, oko sebe sam okupio tim ljudi koji dele istu viziju izrade najboljih mogućih custom gitara. Tokom izrade gitara, pažljivo sam pratio želje gitarista i težio ka tome da gitara odgovara njihovom stilu.',
  text2: 'Razlika u custom gitarama i gitarama velikih svetskih proizvođača je u tome što se od potonjih očekuje serijska produkcija tipiziranih gitara, a custom gitare se izrađuju prema Vašem stilu, i mi to težimo da postignemo.'
 }

}
