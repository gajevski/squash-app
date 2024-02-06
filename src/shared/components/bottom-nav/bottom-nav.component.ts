import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bottom-nav.component.html',
})

export class BottomNavComponent {
  public currentRoute!: string;
  private _router: Router = inject(Router);

  public isActive(route: string): boolean {
    return this._router.url === route;
  }
}
