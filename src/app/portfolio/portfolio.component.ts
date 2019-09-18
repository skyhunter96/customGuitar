import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {


  portfolio;
  constructor(private service: PortfolioService) {

   }

  ngOnInit() {
      this.service.dohvatiPortfolio().subscribe(
        response => {
          console.log(response);
          this.portfolio = response;
        },
        error => {
          console.log(error);
        }
      );
  }

}
