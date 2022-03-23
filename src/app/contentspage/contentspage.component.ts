import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contentspage',
  templateUrl: './contentspage.component.html',
  styleUrls: ['./contentspage.component.sass'],
})
export class ContentspageComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}
  includeProtected = false;

  ngOnInit(): void {
    if (localStorage.getItem('includeProtected') != null) {
      this.includeProtected = Boolean(
        parseInt(localStorage.getItem('includeProtected')!)
      );
    }
    this.titleService.setTitle('鳳櫻祭2021｜コンテンツ');
    this.metaService.addTag({
      name: 'description',
      content:
        '2021年度学習院中・高等科鳳櫻祭の公式ホームページです。オンライン向けコンテンツを掲載しています。',
    });
    this.metaService.addTag({
      property: 'og:site_name',
      content: '2021年度学習院中・高等科鳳櫻祭',
    });
    this.metaService.addTag({
      property: 'og:title',
      content: '鳳櫻祭｜コンテンツ',
    });
    this.metaService.addTag({ property: 'og:locale', content: 'ja_JP' });
    this.metaService.addTag({
      property: 'og:description',
      content:
        '2021年度学習院中・高等科鳳櫻祭の公式ホームページです。オンライン向けコンテンツを掲載しています。',
    });
    this.metaService.addTag({ property: 'og:type', content: 'website' });
    this.metaService.addTag({
      property: 'og:url',
      content: 'https://info.bshs.gakushuin.ac.jp/hououfes2021/contents',
    });
    this.metaService.addTag({
      property: 'og:image',
      content: 'https://info.bshs.gakushuin.ac.jp/hououfes2021/assets/OGP.png',
    });
    this.metaService.addTag({
      property: 'twitter:card',
      content: 'summary',
    });
    this.metaService.addTag({
      property: 'twitter:site',
      content: '@hououfes_2021',
    });
    this.metaService.addTag({
      property: 'twitter:creator',
      content: '@hououfes_2021',
    });
  }
  onChange($event: MatSlideToggleChange) {
    this.includeProtected = $event.checked;
    localStorage.setItem('includeProtected', Number($event.checked).toString());
  }
}
