import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireDatabase } from '@angular/fire/database'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'

import { environment } from '../environments/environment'
import { AppMaterialModule } from './app-material.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthService } from './auth/auth.service'
import { SimpleDialogComponent } from './common/simple-dialog/simple-dialog.component'
import { Database } from './database'
import { HomeComponent } from './home/home.component'
import { InventoryModule } from './inventory/inventory.module'
import { LoginComponent } from './login/login.component'
import { ManagerModule } from './manager/manager.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    SimpleDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppMaterialModule,
    ManagerModule,
    InventoryModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(Database, {
      delay: 0,
    }),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [AngularFireAuth, AngularFireDatabase, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
