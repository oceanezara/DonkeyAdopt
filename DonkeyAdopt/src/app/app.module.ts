import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppCreateDonkeyComponent } from './app-create-donkey/app-create-donkey.component';
import { AppListDonkeyComponent } from './app-list-donkey/app-list-donkey.component';
import { AppUserDonkeyComponent } from './app-user-donkey/app-user-donkey.component';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    AppCreateDonkeyComponent,
    AppListDonkeyComponent,
    AppUserDonkeyComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
