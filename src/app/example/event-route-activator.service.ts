import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventserviceService } from './lesson2/event.service';


@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {


  constructor(private eventService: EventserviceService, private router: Router) { }



  // tslint:disable-next-line:max-line-length
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const eventExist =  !!this.eventService.geteventByid(+route.params['id']) as boolean;
    if (!eventExist) {
     this.router.navigate(['/404']);
   }
    return eventExist;
  }


}
