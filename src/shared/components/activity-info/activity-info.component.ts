import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Activity } from '../../models/activity';

@Component({
  selector: 'app-activity-info',
  standalone: true,
  imports: [],
  templateUrl: './activity-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActivityInfoComponent {
  @Input({ required: true }) activities!: Activity[];
}
