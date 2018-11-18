import { trigger, style, animate, transition } from '@angular/animations';

export const easeInOutAnimation =
  trigger('easeInOut', [
    transition(':enter', [ // :enter is alias to 'void => *'
      style({
        opacity: 0
      }),
      animate('200ms ease-in',
      style({
        opacity: 1
      }))
    ]),
    transition(':leave', [ // :leave is alias to '* => void'
      style({
        opacity: 1
      }),
      animate('200ms ease-in',
      style({
        opacity: 0
      }))
    ])
  ]);
