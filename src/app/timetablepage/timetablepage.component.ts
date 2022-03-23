import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-timetablepage',
  templateUrl: './timetablepage.component.html',
  styleUrls: ['./timetablepage.component.sass'],
})
export class TimetablepageComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}
  selected = 'firstMorning';
  displayAll = true;

  ngOnInit(): void {
    if (sessionStorage.getItem('displayAll')) {
      this.displayAll = Boolean(
        parseInt(sessionStorage.getItem('displayAll')!)
      );
    }
    if (sessionStorage.getItem('timetable')) {
      this.selected = sessionStorage.getItem('timetable')!;
    } else {
      let nowTime: number = Date.now();
      if (nowTime > 1635561900000) {
        if (nowTime <= 1635575400000) {
          this.selected = 'firstAfternoon';
        } else if (nowTime <= 1635648300000) {
          this.selected = 'secondMorning';
        } else if (nowTime <= 1635661800000) {
          this.selected = 'secondAfternoon';
        }
      }
    }
    this.titleService.setTitle('鳳櫻祭2021｜タイムテーブル');
    this.metaService.addTag({
      name: 'description',
      content:
        '2021年度学習院中・高等科鳳櫻祭の公式ホームページです。タイムテーブルを記載しています。',
    });
    this.metaService.addTag({
      property: 'og:site_name',
      content: '2021年度学習院中・高等科鳳櫻祭',
    });
    this.metaService.addTag({
      property: 'og:title',
      content: '鳳櫻祭｜タイムテーブル',
    });
    this.metaService.addTag({ property: 'og:locale', content: 'ja_JP' });
    this.metaService.addTag({
      property: 'og:description',
      content:
        '2021年度学習院中・高等科鳳櫻祭の公式ホームページです。タイムテーブルを記載しています。',
    });
    this.metaService.addTag({ property: 'og:type', content: 'website' });
    this.metaService.addTag({
      property: 'og:url',
      content: 'https://info.bshs.gakushuin.ac.jp/hououfes2021/timetable',
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
  change(): void {
    sessionStorage.setItem('timetable', this.selected);
  }

  amTimes: String[] = [
    '09:00',
    '09:15',
    '09:30',
    '09:45',
    '10:00',
    '10:15',
    '10:30',
    '10:45',
    '11:00',
    '11:15',
    '11:30',
    '11:45',
  ];
  pmTimes: String[] = [
    '12:45',
    '13:00',
    '13:15',
    '13:30',
    '13:45',
    '14:00',
    '14:15',
    '14:30',
    '14:45',
    '15:00',
    '15:15',
    '15:30',
  ];
  onChange($event: MatSlideToggleChange) {
    this.displayAll = $event.checked;
    sessionStorage.setItem('displayAll', Number(this.displayAll).toString());
  }
}
