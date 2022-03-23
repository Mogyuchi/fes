import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MapspageComponent } from './mapspage/mapspage.component';
import { TimetablepageComponent } from './timetablepage/timetablepage.component';
import { ContentspageComponent } from './contentspage/contentspage.component';
import { MuseumpageComponent } from './museumpage/museumpage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'maps',
    component: MapspageComponent,
  },
  {
    path: 'timetable',
    component: TimetablepageComponent,
  },
  {
    path: 'contents',
    component: ContentspageComponent,
  },
  {
    path: 'museum',
    component: MuseumpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
