import { Component, Input } from '@angular/core';
import { Statistics } from '../../models/statistics';

@Component({
  selector: 'app-statistics-info',
  standalone: true,
  imports: [],
  templateUrl: './statistics-info.component.html',
  styleUrl: './statistics-info.component.scss'
})
export class StatisticsInfoComponent {
  @Input({ required: true }) public statistics!: Statistics;
}
