import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing';
import { WelcomeComponent } from './welcome/welcome.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AdminComponent } from './admin/admin.component';
import { EditAnimalComponent } from './edit-animal/edit-animal.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AboutComponent } from './about/about.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
   AppComponent,
   WelcomeComponent,
   AnimalListComponent,
   AdminComponent,
   EditAnimalComponent,
   AnimalDetailComponent,
   AboutComponent
  ],
  imports: [
   BrowserModule,
   FormsModule,
   HttpModule,
   routing,
   AngularFireModule.initializeApp(firebaseConfig),
   AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
