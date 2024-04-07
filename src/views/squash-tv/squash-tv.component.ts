import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-squash-tv',
    standalone: true,
    templateUrl: './squash-tv.component.html',
    styleUrl: './squash-tv.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterModule]
})
export class SquashTvComponent {

}
