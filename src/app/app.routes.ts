import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { OurProductComponent } from './pages/our-product/our-product.component';
import { GiveComponent } from './pages/give/give.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainLayoutComponent } from './features/layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './features/layout/auth-layout/auth-layout.component';
import { CartComponent } from './pages/cart/cart.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';


export const routes: Routes = [

{path:'' ,component:AuthLayoutComponent ,children:[
  {path:'' ,component:LoginComponent ,title:'login'},
{path:'login', component:LoginComponent ,title:'login'},
{path:'signup' ,component:SignupComponent ,title:'signup'},
]},
{path:'' ,component:MainLayoutComponent ,children:[
  {path:'' ,component:HomeComponent ,title:'home'},
  {path:'home', component:HomeComponent ,title:'home'},
{path:'ourProduct' ,component:OurProductComponent ,title:'ourProduct'},
{path:'give' ,component:GiveComponent ,title:'give&get'},
{path:'about' ,component:AboutComponent ,title:'about'},
{path:'contact' ,component:ContactComponent ,title:'contact'},
{path:'cart' ,component:CartComponent ,title:'cart'},
{path:'fav' ,component:FavouriteComponent ,title:'favourite'},
{path:'chat' ,component:ChatbotComponent ,title:'chatBot'},
]},
{path:'**' ,component:NotFoundComponent ,title:'notFound'}


];
