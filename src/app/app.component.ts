import { Component, OnInit, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { interval, map } from 'rxjs';
import { CountDownServiceService } from './services/count-down-service.service';
import * as dayjs from 'dayjs';
import { ProgressBarComponent } from './components/flowbite/progress-bar/progress-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProgressBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  countDownService = inject(CountDownServiceService);

  title = "This Year's Progress";
  progress = toSignal(this.countDownService.getProgress());

  ngOnInit(): void {
    initFlowbite();
  }

  getThisYear(): number {
    return dayjs().year();
  }
}
