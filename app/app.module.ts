import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { signupComponent } from './signup/signup.component';
import { JobseekerhomepageComponent } from './jobseekerhomepage/jobseekerhomepage.component';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { JobseekerprofileComponent } from './jobseekerprofile/jobseekerprofile.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { SearchjobComponent } from './searchjob/searchjob.component';
import { RecruiterprofileComponent } from './recruiterprofile/recruiterprofile.component';
import { RecruiterapplicationComponent } from './recruiterapplication/recruiterapplication.component';
import { LoginComponent } from './login/login.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    FeedbackComponent,
    HeaderComponent,
    HomeComponent,
    signupComponent,
    JobseekerhomepageComponent,
    LatestnewsComponent,
    JobseekerprofileComponent,
    RecruiterComponent,
    SearchjobComponent,
    RecruiterprofileComponent,
    RecruiterapplicationComponent,
    LoginComponent,
    ForgetpwdComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
