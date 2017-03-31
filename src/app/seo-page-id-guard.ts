import { SeoService } from './seo.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class SeoPageIdGuard implements CanActivate {

  public constructor(private seo: SeoService) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id = route.params['id'].replace(/.html$/, '');
    this.seo
      .setTitle([ 'Element #' + id, 'Elements List' ])
      .setDescription('Details of the element #' + id);
    return true;
  }
}
