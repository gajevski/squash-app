import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-action-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-action-button.component.html',
  styleUrl: './main-action-button.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(150)
      ]),
      transition('* => void', [
        animate(150, style({ opacity: 0 }))
      ])
    ]),
    trigger('rotate', [
      state('default', style({
        transform: 'rotate(0)'
      })),
      state('rotated', style({
        transform: 'rotate(315deg)'
      })),
      transition('default <=> rotated', animate('400ms ease-out'))
    ])
  ]
})
export class MainActionButtonComponent {
  private _router: Router = inject(Router);
  public showButtons: boolean = false;
  public buttons: {
    label: string;
    color: string;
    action: () => void;
  }[] = [
      { label: '1', color: 'btn btn-circle btn-primary text-white', action: () => { this._router.navigate(['/sparring']) } },
      { label: '2', color: 'btn btn-circle btn-primary text-white', action: () => { } },
      { label: '3', color: 'btn btn-circle btn-primary text-white', action: () => { } },
    ];

  public toggleButtons(): void {
    this.showButtons = !this.showButtons;
  }
}
