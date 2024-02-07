import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HighlightCardComponent } from "../../shared/components/highlight-card/highlight-card.component";

@Component({
    selector: 'app-squash-tv',
    standalone: true,
    templateUrl: './squash-tv.component.html',
    styleUrl: './squash-tv.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [HighlightCardComponent]
})
export class SquashTvComponent {

}
