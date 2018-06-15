import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// matirial anglar importes

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';
import { QuestionDetailComponent } from './question/question-detail.component';
import { AnswerFormComponent } from './answer/answer-form.component';
import { MomentModule } from 'ngx-moment';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
