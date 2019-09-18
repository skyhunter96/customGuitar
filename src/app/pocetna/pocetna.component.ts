import { expandCollapse } from './pocetna.component.animations';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, useAnimation, query, animateChild, group, stagger, state } from '@angular/animations';
import { HostListener } from '@angular/core'
import { AfterContentInit, ElementRef } from '@angular/core';
@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css'],
  animations:[
  expandCollapse,
  trigger('slide',[
    transition(':enter',[
      style({transform: 'translateY(+50px)'}),
      animate(700),
    ])
  ]),
  trigger('scrollAnimation', [
    state('show', style({
      opacity: 1,
      transform: "translateX(0)"
    })),
    state('hide',   style({
      opacity: 0,
      transform: "translateX(-50%)"
    })),
    transition('show => hide', animate('1500ms ease-out')),
    transition('hide => show', animate('1500ms ease-in'))
  ])
]

})
export class PocetnaComponent {
 
  isExpanded: boolean;

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }

  state = 'hide'

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }

}
