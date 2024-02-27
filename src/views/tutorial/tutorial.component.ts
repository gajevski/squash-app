import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [],
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TutorialComponent {

}
