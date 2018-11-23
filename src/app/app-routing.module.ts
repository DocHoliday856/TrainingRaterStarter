import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SessionsListComponent } from './sessions/sessions-list/sessions-list.component';
import { SessionsDetailComponent } from './sessions/session-detail/session-detail.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersDetailComponent } from './users/user-detail/user-detail.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sessions', component: SessionsListComponent },
  { path: 'sessions/:sessionId', component: SessionsDetailComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:userId', component: UsersDetailComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
