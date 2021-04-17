import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TutorialService {

  private event: Subject<string> = new Subject();

  call(name: string) {
    this.event.next(name);
  }

  onservice() {
    return this.event.asObservable();
  }
}
