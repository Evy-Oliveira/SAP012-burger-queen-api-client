import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderLoginComponent } from './components/headers/header-login/header-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { FormLoginComponent } from "./components/form-login/form-login.component";
import { MatButtonModule} from '@angular/material/button';
import { ButtonComponent } from "./components/button/button.component";
import { HttpClientModule } from '@angular/common/http';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { OpcoesComponent } from './pages/opcoes/opcoes.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        FooterComponent,
        HeaderLoginComponent,
        PedidoComponent,
        OpcoesComponent
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
        MatButtonModule,
        ButtonComponent,
        HttpClientModule
    ]
})
export class AppModule { }
