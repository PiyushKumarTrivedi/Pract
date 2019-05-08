import { Injectable } from '@angular/core';
import { Isession } from '../isession';
import { AuthService } from '../user/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VoterService {

  constructor(private auth:AuthService) { }

  addVoter(session:Isession)
  {
    session.voters.push(this.auth.CurrentUser.UserName);
  }
  deleteVoter(session:Isession)
  {
    console.log(session)
    session.voters = session.voters.filter(x=>x !== this.auth.CurrentUser.UserName);
    console.log(session)
  }

  IsSameUserVoted(session:Isession):boolean
  {
    return session.voters.some(x=>x === this.auth.CurrentUser.UserName)
  }
}
