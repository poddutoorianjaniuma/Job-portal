import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{AboutusComponent} from './aboutus/aboutus.component';
import{RecruiterComponent} from './recruiter/recruiter.component';
import{signupComponent} from './signup/signup.component';
import{LatestnewsComponent} from './latestnews/latestnews.component';
import{ContactusComponent} from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { JobseekerprofileComponent } from './jobseekerprofile/jobseekerprofile.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { JobseekerhomepageComponent } from './jobseekerhomepage/jobseekerhomepage.component';
import{HeaderComponent} from './header/header.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'recruiter',component:RecruiterComponent},
  {path:'jobseeker',component:signupComponent},
  {path:'latestnews',component:LatestnewsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'forgetpwd',component:ForgetpwdComponent},
  {path:'jobseekerhomepage',component:JobseekerhomepageComponent},
  {path:'recruiter',component:RecruiterComponent},
  {path:'jobseekerprofile',component:JobseekerprofileComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }