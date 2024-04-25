import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-practice',
    standalone: true,
    templateUrl: './practice.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterModule]
})
export class PracticeComponent {

}
