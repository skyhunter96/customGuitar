import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

@Injectable()
export class PortfolioService {

    constructor(private service: HttpClient){
   
    }

    dohvatiPortfolio(){
        var portfolio = this.service.get("http://localhost:4200/assets/jsons/portfolio.json");
        return portfolio;
    }

}