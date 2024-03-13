import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BottomNavComponent } from '../shared/components/bottom-nav/bottom-nav.component';
import { BehaviorSubject } from 'rxjs';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { AuthService } from '../shared/services/auth.service';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BottomNavComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

export class AppComponent {
  static isBrowser: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);
  public isUserLoggedIn: BehaviorSubject<boolean> = inject(AuthService).isLoggedIn$;
  public showButtons: boolean = false;
  public buttons = [
    { label: '1', color: 'btn btn-circle btn-primary btn-info text-white', action: () => {} },
    { label: '2', color: 'btn btn-circle btn-primary btn-info text-white', action: () => {} },
    { label: '3', color: 'btn btn-circle btn-primary btn-info text-white', action: () => {} },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
  }

  public toggleButtons(): void {
    this.showButtons = !this.showButtons;
  }
}
