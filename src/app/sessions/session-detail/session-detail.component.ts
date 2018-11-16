import { Component, OnInit } from '@angular/core';
import { SessionsService, ISession } from '../sessions.service';

const defaultSession:  ISession = {
  id: 0,
  name: '',
  location: '',
  startTime: new Date(),
  createdAt: null,
  updatedAt: null,
};

@Component({
  templateUrl: './session-detail.component.html',
})
export class SessionDetailComponent implements OnInit {

session: ISession = {...defaultSession};
// TODO CCC: this is hard coded and should be coming from
// the new Date(), butISO String not working right
// fix later
startTimeAsString = '2018-11-15T23:34';

  constructor(
    private sessionsService: SessionsService,
    ) { }

  ngOnInit() {
  }


  submit(): void {
    console.log(this.session);
    console.log(this.sessionsService);
    this.sessionsService.createSessions(this.session)
      .subscribe();
  }
}
