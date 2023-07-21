import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = "This Year's Progress";

  ngOnInit(): void {
    initFlowbite();
  }
}
