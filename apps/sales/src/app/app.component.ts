import { Component, OnInit } from '@angular/core';

import { TutorialService } from '@workspace/ui';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    TutorialService,
  ]
})
export class AppComponent implements OnInit {
  title = 'sales';

  constructor(private tutorialService: TutorialService) {}

  ngOnInit () {
    setTimeout(() => {
      this.tutorialService.call('incluir');
    }, 3000);
  }
}
