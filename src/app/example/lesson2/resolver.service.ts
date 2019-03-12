import { Injectable } from '@angular/core';
 
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EventserviceService } from './event.service';
import { map } from 'rxjs/operators';

  

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<any> {

  constructor(private eventService:EventserviceService) { } 
 
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.eventService.getevent().pipe(map(e => e)) ;
  }
  
}
