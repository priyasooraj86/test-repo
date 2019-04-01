import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FireBaseConfig } from '../../environments/firebaseConfig';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(FireBaseConfig),
    AngularFireDatabaseModule,
		AngularFireAuthModule,
  ]
})
export class SharedModule { }
