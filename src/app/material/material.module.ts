import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
// import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatDividerModule} from '@angular/material/divider';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { MatNativeDateModule } from '@angular/material/core/datetime';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSelectModule } from "@angular/material/select";
import {MatChipsModule} from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';


const materials=[
  MatToolbarModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatExpansionModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  FormsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule,
  ReactiveFormsModule,
  MatSidenavModule,
  MatSelectModule,
  MatChipsModule,
  // MatCarouselModule,
  MatBadgeModule,
  MatDividerModule,
  MatStepperModule,
  MatTooltipModule,
  MatMenuModule,
  MatProgressBarModule,MatTabsModule
]

@NgModule({
  declarations: [],
  exports:[materials],
  imports: [
    CommonModule,materials
  ],
})
export class MaterialModule { }
