import { Injectable } from '@angular/core';

 @Injectable()
export class UsersService {
  usersMock = [
    { Name: 'Shawn', Email: 'DokHoliday@yahoo.org', Phone: '235-666-7832', Role: 'Student' },
    { Name: 'John', Email: 'Djangular@comcast.net', Phone: '856-234-9087', Role: 'Instructor' },
    { Name: 'Jack', Email: 'Widdler15@yeti.com', Phone: '256-890-2349', Role: 'Student' },
    { Name: 'Scott', Email: 'GameJunkie@gmail.com', Phone: '345-678-9021', Role: 'Student' },
    { Name: 'Chris', Email: 'SecretPilgrim@gmail.com', Phone: '215-784-2837', Role: 'Instructor' },
  ];
  constructor() { }

  getUsers(): {}[] {
    return this.usersMock;
  }
}
