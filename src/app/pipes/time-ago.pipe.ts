import { Pipe, PipeTransform } from '@angular/core';
import { intervals } from '../const/intervals.time';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date, ...args: any[]) {
    if (!value) {
      return '';
    }

    const seconds = Math.floor((Date.now() - new Date(value).getTime()) / 1000);

    if (seconds < 29) {
      return 'Just now';
    }

    for (const [interval, intervalSeconds] of Object.entries(intervals)) {
      const counter = Math.floor(seconds / intervalSeconds);
      if (counter > 0) {
        return (
          counter + ' ' + (counter === 1 ? interval : interval + 's') + ' ago'
        );
      }
    }

    return '';
  }
}
