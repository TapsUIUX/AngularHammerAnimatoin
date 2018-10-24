import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule, MatButtonModule,MatAutocompleteModule,MatFormFieldModule ,MatInputModule,MatExpansionModule} from '@angular/material';
import { HammerCardComponent } from './hammer-card/hammer-card.component';

//CUSTOMIZE GESTURE
//by default swip up and down are disable to make it work we have to enable them by below way.
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      // override hammerjs default configuration
      'swipe': { direction: Hammer.DIRECTION_ALL  }
  }
}

 
@NgModule({
  declarations: [
    AppComponent,
    HammerCardComponent,
    AngularMaterialComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule
  ],
  providers:[  { 
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig 
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }