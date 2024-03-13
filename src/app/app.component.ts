import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BottomNavComponent } from '../shared/components/bottom-nav/bottom-nav.component';
import { BehaviorSubject } from 'rxjs';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BottomNavComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent {
  static isBrowser: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);
  public isUserLoggedIn: BehaviorSubject<boolean> = inject(AuthService).isLoggedIn$;
  public showButtons: boolean = false;
  public buttons = [
    { label: 'Akcja 1', color: 'bg-blue-500 hover:bg-blue-700', action: () => {/* akcja */} },
    { label: 'Akcja 2', color: 'bg-green-500 hover:bg-green-700', action: () => {/* akcja */} },
    { label: 'Akcja 3', color: 'bg-red-500 hover:bg-red-700', action: () => {/* akcja */} },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    AppComponent.isBrowser.next(isPlatformBrowser(platformId));
  }

  public toggleButtons(): void {
    this.showButtons = !this.showButtons;
  }
}
