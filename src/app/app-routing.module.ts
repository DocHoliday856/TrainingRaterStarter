import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SessionsListComponent } from './sessions/sessions-list/sessions-list.component';
import { SessionDetailComponent } from './sessions/session-detail/session-detail.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sessions', component: SessionsListComponent },
  { path: 'sessions/detail', component: SessionDetailComponent },
  { path: 'users', component: UsersListComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
