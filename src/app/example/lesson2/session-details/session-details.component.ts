import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Isession } from '../isession';
import { AuthService } from '../user/auth.service';
import { VoterService } from '../services/voter.service';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent implements OnChanges {
   
@Input() childSessions :Isession[]
@Input() Filterby:string="all"
@Input()VisibleSession:Isession[];
  constructor(private auth:AuthService,private voterService:VoterService) { }

  ngOnChanges() {
    if(this.childSessions!= null)
 this.FiltersessionByClick(this.Filterby);

 }
 toggleVote(session:Isession,ev:string)
 {
   console.log(ev)
   if(this.userHasVoted(session))
   {
     this.voterService.deleteVoter(session);
   }else {
     this.voterService.addVoter(session);
   }
 }

 userHasVoted(session:Isession):boolean
 {
  return this.voterService.IsSameUserVoted(session);
 }
  private FiltersessionByClick(filter) {
    if (filter == "all") {
      this.VisibleSession = this.childSessions.slice(0);
    }
    else {
      this.VisibleSession= this.childSessions.filter(session => {
        return session.level === filter;
      });
      console.log(this.VisibleSession);
    }
  }
}
