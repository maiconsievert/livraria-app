import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/Http';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { LivrosComponent } from "./components/livros.component";
import { LivrosServices } from "./services/livros.services";

@NgModule({
    declarations: [
        AppComponent, LivrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      MaterializeModule
    ],
    providers: [LivrosServices],
    bootstrap: [AppComponent]
})
export class AppModule { }
