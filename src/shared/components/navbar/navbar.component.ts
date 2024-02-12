import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input({ required: true }) image!: string;

  public logout(): void {
    // TODO: new logout functionality
  }
}
