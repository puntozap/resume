import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { SkillsComponent } from './skills/skills.component';
import { ListSkillsComponent } from './list-skills/list-skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { MeComponent } from './me/me.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { CoursesComponent } from './courses/courses.component';




@NgModule({
  declarations: [
    HomeComponent,
    SkillsComponent,
    ListSkillsComponent,
    ExperienceComponent,
    MeComponent,
    PorfolioComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
