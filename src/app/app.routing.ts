import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component'
import { AdminComponent } from './admin/admin.component'
import { AboutComponent }   from './about/about.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component'
import { AnimalListComponent } from './animal-list/animal-list.component'

const appRoutes: Routes = [
   {
    path: '',
    component: WelcomeComponent
   },
   {
   path: 'about',
   component: AboutComponent
   },
   {
   path: 'admin',
   component: AdminComponent
   },
   {
   path: 'animals/:id',
   component: AnimalDetailComponent
   },
   {
   path: 'animal-list',
   component: AnimalListComponent
   },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
