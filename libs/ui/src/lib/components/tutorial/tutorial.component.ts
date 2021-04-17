import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TutorialService } from '../../services/tutorial.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ui-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit, OnDestroy {

  @Input() public name: string | null;

  public viewMessage = false;

  private subscription: Subscription;

  constructor(
    private service: TutorialService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.service.onservice().subscribe(eventName => {
      if (eventName === this.name) {
        this.view();
      }
    });
    if (this.name == null) {
      console.error('The property name in tutorial is not inicialized!');
    }
  }

  private view() {
    this.viewMessage = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
