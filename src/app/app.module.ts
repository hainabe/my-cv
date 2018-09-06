import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { WorkComponent } from './work/work.component';
import { ProfileComponent } from './profile/profile.component';
import { JobsComponent } from './jobs/jobs.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { FooterComponent } from './footer/footer.component';
import { LanguagesComponent } from './languages/languages.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    IntroductionComponent,
    WorkComponent,
    ProfileComponent,
    JobsComponent,
    SkillsComponent,
    EducationComponent,
    HobbiesComponent,
    FooterComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
