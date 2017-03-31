import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  readonly siteTitle = 'My First Static Webiste';

  constructor(private title: Title, private meta: Meta) { }

  setTitle(title: string[]): SeoService {
    title.push(this.siteTitle);
    this.title.setTitle(title.join(' | '));
    return this;
  }

  setDescription(description: string): SeoService {
    this.meta.updateTag({
      name: 'description',
      content: description
    });
    return this;
  }
}
