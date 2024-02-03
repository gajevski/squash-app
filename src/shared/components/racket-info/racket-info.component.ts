import { Component, Input } from '@angular/core';
import { Racket } from '../../models/racket';

@Component({
  selector: 'app-racket-info',
  standalone: true,
  imports: [],
  templateUrl: './racket-info.component.html'
})
export class RacketInfoComponent {
  @Input({ required: true }) racket!: Racket;
}
