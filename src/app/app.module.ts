import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login, InfoPage } from '../pages/login/login';
import { LoadingService } from '../services/loading-service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { RegisterHub } from '../pages/register/register-hub/register-hub';
import { RegisterFormModule } from '../pages/register/register-hub/register-form/register-form.module';
import { TabsPageModule } from '../pages/tabsPage/tabsPage.module';
import { UserSettings } from '../pages/userSettings/user-settings';
import { UserInfoHeaderModule } from '../components/user-info-header/user-info-header.module';
import { SecureStorage } from '@ionic-native/secure-storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    InfoPage,
    UserSettings,
    RegisterHub
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RegisterFormModule,
    TabsPageModule,
    NgxQRCodeModule,
    UserInfoHeaderModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    InfoPage,
    UserSettings,
    RegisterHub

  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoadingService,
    BarcodeScanner,
    SecureStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
