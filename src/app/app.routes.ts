import { Routes } from '@angular/router';
import { register } from 'module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {path:'products' , component:ProductsComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'**',component:NotfoundComponent},
];


