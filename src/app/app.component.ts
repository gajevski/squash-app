import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BottomNavComponent } from '../shared/components/bottom-nav/bottom-nav.component';
import { BehaviorSubject } from 'rxjs';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { AuthService } from '../shared/services/auth.service';
import { MainActionButtonComponent } from "../shared/components/main-action-button/main-action-button.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterOutlet, BottomNavComponent, NavbarComponent, MainActionButtonComponent]
})

export class AppComponent {
  static isBrowser: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);
  public isUserLoggedIn: BehaviorSubject<boolean> = inject(AuthService).isLoggedIn$;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
  }
}
