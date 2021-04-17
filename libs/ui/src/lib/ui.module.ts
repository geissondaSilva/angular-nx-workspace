import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialComponent } from './components/tutorial/tutorial.component';
import { TutorialMessageComponent } from './components/tutorial-message/tutorial-message.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TutorialComponent,
    TutorialMessageComponent
  ],
  exports: [
    TutorialComponent,
    TutorialMessageComponent,
  ]
})
export class UiModule {}
