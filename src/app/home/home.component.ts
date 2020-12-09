import { trigger, style, state, transition, animate, group, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

import { bounce, bounceOutUp, jello, wobble } from 'ng-animate';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('bounce', [
      transition(':enter', useAnimation(bounce)),
      transition(':leave', useAnimation(bounceOutUp))
    ]),
    trigger('wobble', [

      transition('step1 <=> *', useAnimation(wobble)),
      transition('step2 <=> *', useAnimation(jello))
    ])


    // trigger('box', [
    //   state('start', style({ background: 'blue' })),
    //   state('end', style({ background: 'red', transform: 'scale(1.2)' })),
    //   state('special', style({
    //     background: 'orange', transform: 'scale(0.5)', borderRadius: '50%'
    //   })),
    //   transition('start => end', animate(450)),
    //   transition('end => start', animate('800ms ease-in')),
    //   transition('special <=> *', [
    //     style({ background: 'green' }),
    //     animate('1s', style({
    //       background: 'pink'
    //     })),
    //     animate(750)
    //   ]),
    //   //void => *
    //   transition(':enter', [
    //     style({ opacity: 0 }),
    //     group([
    //       animate('800ms ease-in', style({
    //         opacity: 1
    //       })),
    //       animate('800ms ease-in', style({
    //         color: 'white',
    //         fontSize: '1.2rem'
    //       }))
    //     ])
    //   ]),
    //   //* => void
    //   transition(':leave', [
    //     style({ opacity: 1 }),
    //     group([
    //       animate('800ms ease-in', style({
    //         opacity: 0,
    //         transform: 'scale(1.2)'
    //       })),
    //       animate('400ms ease-in', style({
    //         color: 'pink',
    //         fontSize: '0rem'
    //       }))
    //     ])
    //   ])
    // ]),
  ]
})
export class HomeComponent implements OnInit {

  boxState = 'start';
  visible = true;
  wobble = 'step1';

  constructor() { }

  ngOnInit(): void {
  }

  animate() {
    this.boxState = this.boxState === 'end' ? 'start' : 'end';
  }

  wobbleFunc() {
    this.wobble = this.wobble === 'step1' ? 'step2' : 'step1';
  }
}
