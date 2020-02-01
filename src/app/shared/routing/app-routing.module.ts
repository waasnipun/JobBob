import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Required components for which route services to be activated
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';
import { EditprofileComponent } from '../../editprofile/editprofile.component';
// Import canActivate guard services
import { AuthGuard } from "../../shared/guard/auth.guard";
import { SecureInnerPagesGuard } from "../../shared/guard/secure-inner-pages.guard";
import { SearchComponent } from 'src/app/search/search.component';
import { CompanyDashboardComponent } from 'src/app/company-dashboard/company-dashboard.component';
import { EditProfileCompanyComponent } from 'src/app/edit-profile-company/edit-profile-company.component';
import { SignupcompanyComponent } from 'src/app/signupcompany/signupcompany.component';

// Include route guard in routes array
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user', component: SignUpComponent,canActivate: [SecureInnerPagesGuard]},
  { path: 'register-user-company', component: SignupcompanyComponent,canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'search', component: SearchComponent },
  { path: 'editprofilecompany', component: EditProfileCompanyComponent },
  { path: 'companydashboard', component: CompanyDashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }