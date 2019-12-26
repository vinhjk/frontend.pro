import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/layout/home/home.component';
import { ProgramAddComponent } from './component/programs/program-add/program-add.component';
import { ProgramEditComponent } from './component/programs/program-edit/program-edit.component';
import { ProgramListComponent } from './component/programs/program-list/program-list.component';
import { ProgramsComponent } from './component/programs/programs.component';
import { ObjectiveComponent } from './component/objective/objective.component';
import { ObjectiveAddComponent } from './component/objective/objective-add/objective-add.component';
import { ObjectiveEditComponent } from './component/objective/objective-edit/objective-edit.component';
import { ObjectiveListComponent } from './component/objective/objective-list/objective-list.component';
import { LearningOutcomesComponent } from './component/learning-outcomes/learning-outcomes.component';
import { LearningOutcomeAddComponent } from './component/learning-outcomes/learning-outcome-add/learning-outcome-add.component';
import { LearningOutcomeEditComponent } from './component/learning-outcomes/learning-outcome-edit/learning-outcome-edit.component';
import { LearningOutcomeListComponent } from './component/learning-outcomes/learning-outcome-list/learning-outcome-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './auth/auth-interceptor';
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { NavbarComponent } from './component/layout/navbar/navbar.component';
import { CreateUserComponent } from './component/user/create-user/create-user.component';
import { LoginUserComponent } from './component/user/login-user/login-user.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgramAddComponent,
    ProgramEditComponent,
    ProgramListComponent,
    ProgramsComponent,
    ObjectiveComponent,
    ObjectiveAddComponent,
    ObjectiveEditComponent,
    ObjectiveListComponent,
    LearningOutcomesComponent,
    LearningOutcomeAddComponent,
    LearningOutcomeEditComponent,
    LearningOutcomeListComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CreateUserComponent,
    LoginUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
