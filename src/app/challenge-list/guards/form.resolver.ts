import { ChallengeListService } from './../services/challenge-list.service';
import { Users } from './../../model/users';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

@Injectable()
export class FormResolver implements Resolve<Users> {
  constructor(private challengeService: ChallengeListService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    let id = route.params['id'];
    console.log(id);
    return this.challengeService.getUserById(id);
  }
}
