import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tutorial-serve',
  standalone: true,
  imports: [],
  templateUrl: './tutorial-serve.component.html',
  styleUrl: './tutorial-serve.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TutorialServeComponent {

}
