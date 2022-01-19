import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AgmCoreModule } from '@agm/core';
import { PagonoudisModule } from './pagonoudis/pagonoudis.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PagonoudisModule,
    BrowserModule,
    NgxDropzoneModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyC0lYUb2GPxerQxVJ_3-oE-JulqAeoKXw0"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
