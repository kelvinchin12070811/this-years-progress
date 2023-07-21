import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountDownServiceService {
  private nextYear = dayjs(
    `${dayjs().year() + 1}-01-01T00:00:00`,
    'YYYY-MM-DDTHH:mm:ss'
  );

  private progress$ = interval(1000).pipe(
    map((_: any) => {
      const thisYearStart = dayjs(
        `${dayjs().year()}-01-01T00:00:00`,
        'YYYY-MM-DDTHH:mm:ss'
      ).unix();
      const today = dayjs().unix() - thisYearStart;
      const nextYearUnix = this.nextYear.unix() - thisYearStart;
      return Math.floor((today / nextYearUnix) * 100.0);
    })
  );

  constructor() {}

  getProgress() {
    return this.progress$;
  }
}
