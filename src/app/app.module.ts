import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorMessageComponent } from './shared/error-message/error-message.component';
import { HeaderSearchComponent } from './shared/header-search/header-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieListItemComponent } from './shared/movie-list-item/movie-list-item.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ErrorMessageComponent,
        HeaderSearchComponent,
        MovieListItemComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgxPaginationModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
