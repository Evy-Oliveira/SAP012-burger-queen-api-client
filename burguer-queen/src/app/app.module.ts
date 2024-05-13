import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderLoginComponent } from './components/headers/header-login/header-login.component';
import { ButtonComponent } from './components/button/button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormLoginComponent } from "./components/form-login/form-login.component";
import {MatButtonModule} from '@angular/material/button';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        FooterComponent,
        HeaderLoginComponent,
        ButtonComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        FormLoginComponent,
        MatButtonModule
    ]
})
export class AppModule { }
