import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomNavComponent {
  public currentRoute!: string;
  
  constructor(private _router: Router) {}


  public isActive(route: string): boolean {
    return this._router.url === route;
  }
}
