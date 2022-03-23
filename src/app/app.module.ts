import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomepageComponent } from './homepage/homepage.component';
import { MapspageComponent } from './mapspage/mapspage.component';
import { TimetablepageComponent } from './timetablepage/timetablepage.component';
import { ContentspageComponent } from './contentspage/contentspage.component';
import { MuseumpageComponent } from './museumpage/museumpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TimetableFirstMorningComponent } from './timetable-first-morning/timetable-first-morning.component';
import { TimetableFirstAfternoonComponent } from './timetable-first-afternoon/timetable-first-afternoon.component';
import { TimetableSecondMorningComponent } from './timetable-second-morning/timetable-second-morning.component';
import { TimetableSecondAfternoonComponent } from './timetable-second-afternoon/timetable-second-afternoon.component';
import { SecondsToMinutesPipe } from './seconds-to-minutes.pipe';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MapspageComponent,
    TimetablepageComponent,
    ContentspageComponent,
    MuseumpageComponent,
    HeaderComponent,
    FooterComponent,
    TimetableFirstMorningComponent,
    TimetableFirstAfternoonComponent,
    TimetableSecondMorningComponent,
    TimetableSecondAfternoonComponent,
    SecondsToMinutesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    BrowserAnimationsModule,
    MaterialModule,
    ScullyLibModule,
    NgxExtendedPdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
