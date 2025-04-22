import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrimerComponentComponent } from './modules/primer-component/primer-component.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivasEstructComponent } from './directivas-estruct/directivas-estruct.component';
import { DirectivasAtributoComponent } from './directivas-atributo/directivas-atributo.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponentComponent,
    CicloVidaComponent,
    DataBindingComponent,
    DirectivasEstructComponent,
    DirectivasAtributoComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
