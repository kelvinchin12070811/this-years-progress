import { Component, OnInit, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { interval, map } from 'rxjs';
import { CountDownServiceService } from './services/count-down-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
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
}
