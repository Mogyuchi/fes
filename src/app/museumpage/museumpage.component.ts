import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-museumpage',
  templateUrl: './museumpage.component.html',
  styleUrls: ['./museumpage.component.sass'],
})
export class MuseumpageComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('鳳櫻祭2021｜ミュージアム');
    this.metaService.addTag({
      name: 'description',
      content: '2021年度学習院中・高等科鳳櫻祭公式ホームページ',
    });
    this.metaService.addTag({
      property: 'og:site_name',
      content: '2021年度学習院中・高等科鳳櫻祭',
    });
    this.metaService.addTag({
      property: 'og:title',
      content: '鳳櫻祭｜ミュージアム',
    });
    this.metaService.addTag({ property: 'og:locale', content: 'ja_JP' });
    this.metaService.addTag({
      property: 'og:description',
      content: '2021年度学習院中・高等科鳳櫻祭の公式ホームページです。',
    });
    this.metaService.addTag({ property: 'og:type', content: 'website' });
    this.metaService.addTag({
      property: 'og:url',
      content: 'https://info.bshs.gakushuin.ac.jp/hououfes2021/museum',
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
}
