import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersViewerComponent } from './users-viewer/users-viewer.component';
import { SummaryWindowComponent } from './users-viewer/summary-window/summary-window.component';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UsersViewerComponent,
    SummaryWindowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SummaryWindowComponent]
})
export class AppModule { }
