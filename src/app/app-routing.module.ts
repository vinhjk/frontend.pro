import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginUserComponent} from './component/user/login-user/login-user.component';
import {CreateUserComponent} from './component/user/create-user/create-user.component';
import {HomeComponent} from './component/layout/home/home.component';
import {ProgramAddComponent} from './component/programs/program-add/program-add.component';
import {ProgramListComponent} from './component/programs/program-list/program-list.component';
import {ProgramEditComponent} from './component/programs/program-edit/program-edit.component';
import {ObjectiveAddComponent} from './component/objective/objective-add/objective-add.component';
import {ObjectiveListComponent} from './component/objective/objective-list/objective-list.component';
import {ObjectiveEditComponent} from './component/objective/objective-edit/objective-edit.component';


const routes: Routes = [
  {path: 'register', component: CreateUserComponent},
  {path: 'login', component: LoginUserComponent},
  {path: 'home', component: HomeComponent},
  {path: 'create-program', component: ProgramAddComponent},
  {path: 'list-program', component: ProgramListComponent},
  {path: 'edit-program/:id', component: ProgramEditComponent},
  {path: 'create-objective', component: ObjectiveAddComponent},
  {path: 'list-objective', component: ObjectiveListComponent},
  {path: 'edit-objective/:id', component: ObjectiveEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
