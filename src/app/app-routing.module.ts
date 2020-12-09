import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { MapComponent } from './map/map.component';
import { AboutextraComponent } from './aboutextra/aboutextra.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about', component: AboutComponent, children: [
      { path: 'extra', component: AboutextraComponent }  // http://localhost:4200/about/extra
    ]
  },
  { path: 'posts', component: PostComponent },
  { path: 'map', component: MapComponent },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
