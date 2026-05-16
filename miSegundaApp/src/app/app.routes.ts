import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { AboutPage } from './pages/about-page/about-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { NotfoundPage } from './pages/notfound-page/notfound-page';
import { NewCountryPage } from './pages/new-country-page/new-country-page';
import { LoginPage } from './pages/login-page/login-page';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: 'home', component: HomePage, canActivate: [authGuard] },
    { path: 'about', component: AboutPage },
    { path: 'contact', component: ContactPage },
    { path: 'new-country', component: NewCountryPage },
    { path: 'login', component: LoginPage},
    {path: '', redirectTo: 'home', pathMatch: 'full' }, //full para que coincida totalmente la ruta
    //prefix para que si la incluye en cualquier parte de la ruta redireccione ahi
    { path: 'not-found', component: NotfoundPage },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];