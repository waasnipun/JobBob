import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';

// needed for auto complete
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//material functions
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


// Auth service
import { AuthService } from "./shared/services/auth.service";
import { EditprofileComponent } from './editprofile/editprofile.component';
import { SearchComponent } from './search/search.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { EditProfileCompanyComponent } from './edit-profile-company/edit-profile-company.component';
import { SearchCompanyComponent } from './search-company/search-company.component';
import { SignupcompanyComponent } from './signupcompany/signupcompany.component';
<<<<<<< HEAD
import { NewsearchComponent } from './newsearch/newsearch.component';
=======
import { StdUsrProfileComponent } from './std-usr-profile/std-usr-profile.component';
>>>>>>> 78d7de07c116813a6908cb3d2c436e08ef49c706


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    EditprofileComponent,
    SearchComponent,
    CompanyDashboardComponent,
    EditProfileCompanyComponent,
    SearchCompanyComponent,
    SignupcompanyComponent,
<<<<<<< HEAD
    NewsearchComponent,
=======
    StdUsrProfileComponent,
>>>>>>> 78d7de07c116813a6908cb3d2c436e08ef49c706
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }