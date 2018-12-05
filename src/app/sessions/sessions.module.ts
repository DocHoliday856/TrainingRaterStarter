import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SessionsListComponent } from './sessions-list/sessions-list.component';
import { SessionsDetailComponent } from './session-detail/session-detail.component';
import { SessionRatingComponent } from './session-rating/session-rating.component';

import { SessionRatingsService } from './session-rating/session-ratings.service';
import { SessionsService } from './sessions.service';

@NgModule({
    declarations: [
        SessionsListComponent,
        SessionsDetailComponent,
        SessionRatingComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
        SessionsService,
        SessionRatingsService,
    ],
})
export class SessionsModule { }
