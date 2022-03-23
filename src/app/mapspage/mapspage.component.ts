import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mapspage',
  templateUrl: './mapspage.component.html',
  styleUrls: ['./mapspage.component.sass'],
})
export class MapspageComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.bindPlayerEvent();
    this.titleService.setTitle('鳳櫻祭2021｜マップ');
    this.metaService.addTag({
      name: 'description',
      content:
        '2021年度学習院中・高等科鳳櫻祭の公式ホームページです。校内・フロアマップを掲載しています。',
    });
    this.metaService.addTag({
      property: 'og:site_name',
      content: '2021年度学習院中・高等科鳳櫻祭',
    });
    this.metaService.addTag({
      property: 'og:title',
      content: '鳳櫻祭｜マップ',
    });
    this.metaService.addTag({ property: 'og:locale', content: 'ja_JP' });
    this.metaService.addTag({
      property: 'og:description',
      content:
        '2021年度学習院中・高等科鳳櫻祭の公式ホームページです。フロアマップを掲載しています。',
    });
    this.metaService.addTag({ property: 'og:type', content: 'website' });
    this.metaService.addTag({
      property: 'og:url',
      content: 'https://info.bshs.gakushuin.ac.jp/hououfes2021/maps',
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

  loaderDisplay = false;
  isPlaying1 = false;
  isPlaying2 = false;
  isPlaying3 = false;
  isPlaying4 = false;
  isPlaying5 = false;
  currentTime1 = 0;
  currentTime2 = 0;
  currentTime3 = 0;
  currentTime4 = 0;
  currentTime5 = 0;
  volume = 0.1;
  gainValue = 0.5;
  oldGainValue = 0.5;
  duration1 = 0.01;
  duration2 = 0.01;
  duration3 = 0.01;
  duration4 = 0.01;
  duration5 = 0.01;
  isMute = false;

  audioCtx = new window.AudioContext();
  gainNode = this.audioCtx.createGain();

  @ViewChild('audioPlayer1', { static: true }) player1!: ElementRef;
  @ViewChild('audioPlayer2', { static: true }) player2!: ElementRef;
  @ViewChild('audioPlayer3', { static: true }) player3!: ElementRef;
  @ViewChild('audioPlayer4', { static: true }) player4!: ElementRef;
  @ViewChild('audioPlayer5', { static: true }) player5!: ElementRef;

  private currentPlayedElem: HTMLAudioElement | null = null;

  onPaly(elm: HTMLAudioElement) {
    if (this.currentPlayedElem && this.currentPlayedElem !== elm) {
      this.currentPlayedElem.pause();
    }

    this.currentPlayedElem = elm;
  }

  bindPlayerEvent(): void {
    let source1 = this.audioCtx.createMediaElementSource(
      this.player1.nativeElement
    );
    this.player1.nativeElement.addEventListener('playing', () => {
      this.isPlaying1 = true;
      this.duration1 = Math.floor(this.player1.nativeElement.duration);
    });
    this.player1.nativeElement.addEventListener('pause', () => {
      this.isPlaying1 = false;
    });
    this.player1.nativeElement.addEventListener('timeupdate', () => {
      this.currentTime1 = Math.floor(this.player1.nativeElement.currentTime);
    });
    this.player1.nativeElement.addEventListener('volume', () => {
      this.volume = Math.floor(this.player1.nativeElement.volume);
    });
    this.player1.nativeElement.addEventListener('loadstart', () => {
      this.loaderDisplay = true;
    });
    this.player1.nativeElement.addEventListener('loadedmetadata', () => {
      this.loaderDisplay = false;
      this.duration1 = Math.floor(this.player1.nativeElement.duration);
    });
    let source2 = this.audioCtx.createMediaElementSource(
      this.player2.nativeElement
    );
    this.player2.nativeElement.addEventListener('playing', () => {
      this.isPlaying2 = true;
      this.duration2 = Math.floor(this.player2.nativeElement.duration);
    });
    this.player2.nativeElement.addEventListener('pause', () => {
      this.isPlaying2 = false;
    });
    this.player2.nativeElement.addEventListener('timeupdate', () => {
      this.currentTime2 = Math.floor(this.player2.nativeElement.currentTime);
    });
    this.player2.nativeElement.addEventListener('volume', () => {
      this.volume = Math.floor(this.player2.nativeElement.volume);
    });
    this.player2.nativeElement.addEventListener('loadstart', () => {
      this.loaderDisplay = true;
    });
    this.player2.nativeElement.addEventListener('loadedmetadata', () => {
      this.loaderDisplay = false;
      this.duration2 = Math.floor(this.player2.nativeElement.duration);
    });
    let source3 = this.audioCtx.createMediaElementSource(
      this.player3.nativeElement
    );
    this.player3.nativeElement.addEventListener('playing', () => {
      this.isPlaying3 = true;
      this.duration3 = Math.floor(this.player3.nativeElement.duration);
    });
    this.player3.nativeElement.addEventListener('pause', () => {
      this.isPlaying3 = false;
    });
    this.player3.nativeElement.addEventListener('timeupdate', () => {
      this.currentTime3 = Math.floor(this.player3.nativeElement.currentTime);
    });
    this.player3.nativeElement.addEventListener('volume', () => {
      this.volume = Math.floor(this.player3.nativeElement.volume);
    });
    this.player3.nativeElement.addEventListener('loadstart', () => {
      this.loaderDisplay = true;
    });
    this.player3.nativeElement.addEventListener('loadedmetadata', () => {
      this.loaderDisplay = false;
      this.duration3 = Math.floor(this.player3.nativeElement.duration);
    });
    let source4 = this.audioCtx.createMediaElementSource(
      this.player4.nativeElement
    );
    this.player4.nativeElement.addEventListener('playing', () => {
      this.isPlaying4 = true;
      this.duration4 = Math.floor(this.player4.nativeElement.duration);
    });
    this.player4.nativeElement.addEventListener('pause', () => {
      this.isPlaying4 = false;
    });
    this.player4.nativeElement.addEventListener('timeupdate', () => {
      this.currentTime4 = Math.floor(this.player4.nativeElement.currentTime);
    });
    this.player4.nativeElement.addEventListener('volume', () => {
      this.volume = Math.floor(this.player4.nativeElement.volume);
    });
    this.player4.nativeElement.addEventListener('loadstart', () => {
      this.loaderDisplay = true;
    });
    this.player4.nativeElement.addEventListener('loadedmetadata', () => {
      this.loaderDisplay = false;
      this.duration4 = Math.floor(this.player4.nativeElement.duration);
    });
    let source5 = this.audioCtx.createMediaElementSource(
      this.player5.nativeElement
    );
    this.player5.nativeElement.addEventListener('playing', () => {
      this.isPlaying5 = true;
      this.duration5 = Math.floor(this.player5.nativeElement.duration);
    });
    this.player5.nativeElement.addEventListener('pause', () => {
      this.isPlaying5 = false;
    });
    this.player5.nativeElement.addEventListener('timeupdate', () => {
      this.currentTime5 = Math.floor(this.player5.nativeElement.currentTime);
    });
    this.player5.nativeElement.addEventListener('volume', () => {
      this.volume = Math.floor(this.player5.nativeElement.volume);
    });
    this.player5.nativeElement.addEventListener('loadstart', () => {
      this.loaderDisplay = true;
    });
    this.player5.nativeElement.addEventListener('loadedmetadata', () => {
      this.loaderDisplay = false;
      this.duration5 = Math.floor(this.player5.nativeElement.duration);
    });
    source1.connect(this.gainNode).connect(this.audioCtx.destination);
    source2.connect(this.gainNode).connect(this.audioCtx.destination);
    source3.connect(this.gainNode).connect(this.audioCtx.destination);
    source4.connect(this.gainNode).connect(this.audioCtx.destination);
    source5.connect(this.gainNode).connect(this.audioCtx.destination);
    this.gainNode.gain.value = this.gainValue;
  }

  playBtnHandler(floorNum: number): void {
    let player;
    switch (floorNum) {
      case 1:
        player = this.player1;
        break;
      case 2:
        player = this.player2;
        break;
      case 3:
        player = this.player3;
        break;
      case 4:
        player = this.player4;
        break;
      default:
        player = this.player5;
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    if (this.loaderDisplay) {
      return;
    }
    if (player.nativeElement.paused) {
      player.nativeElement.play();
    } else {
      player.nativeElement.pause();
    }
  }
  volumePosChanged(event: MatSliderChange) {
    if (event.value != null) this.gainValue = event.value;
    if (event.value == 0) this.isMute = true;
    else this.isMute = false;
    this.gainNode.gain.value = this.gainValue;
    this.oldGainValue = this.gainValue;
  }
  onToggleMute() {
    if (!this.isMute) {
      this.oldGainValue = this.gainValue;
      this.gainValue = 0;
      this.gainNode.gain.value = this.gainValue;
      this.isMute = true;
    } else {
      this.gainValue = this.oldGainValue;
      this.gainNode.gain.value = this.gainValue;
      this.isMute = false;
    }
  }

  currTimePosChanged(event: MatSliderChange, floorNum: number) {
    let player;
    switch (floorNum) {
      case 1:
        player = this.player1;
        break;
      case 2:
        player = this.player2;
        break;
      case 3:
        player = this.player3;
        break;
      case 4:
        player = this.player4;
        break;
      default:
        player = this.player5;
    }
    player.nativeElement.currentTime = event.value;
  }
}
