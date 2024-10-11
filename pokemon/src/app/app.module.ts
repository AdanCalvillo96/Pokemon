import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; 
import { FooterComponent } from './components/footer/footer.component';
import { PokemonListComponent } from './components/components/pokemon-list/pokemon-list.component';




@NgModule({
    declarations: [
      AppComponent, // componentes
      HeaderComponent,
      FooterComponent,
      
    ],
    imports: [
      BrowserModule, // Importacion de modulos
      PokemonListComponent
    ],
      providers:[
        provideHttpClient()
      ],
    bootstrap: [AppComponent], // Componente raíz
  })
  export class AppModule {}