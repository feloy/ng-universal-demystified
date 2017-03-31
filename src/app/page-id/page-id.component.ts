import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-page-id',
  templateUrl: './page-id.component.html',
  styleUrls: ['./page-id.component.css']
})
export class PageIdComponent implements OnInit {

  public id: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.params.pluck('id')
      .map((s: string) => s.replace(/.html$/, ''));
  }

}
