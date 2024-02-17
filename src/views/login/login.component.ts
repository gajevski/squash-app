import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl<string>('', { nonNullable: true }),
    password: new FormControl<string>('', { nonNullable: true }),
  })

  private _authService: AuthService = inject(AuthService);

  public onLoginClick(): void {
    console.log(this.loginForm);
  }
}
