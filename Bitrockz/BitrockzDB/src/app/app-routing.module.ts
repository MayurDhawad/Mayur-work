import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AddCoinComponent } from './add-coin/add-coin.component';
import { IcoComponent } from './ico/ico.component';
import { SupportComponent } from './support/support.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPageComponent } from './forgot-page/forgot-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApiComponent } from './api/api.component';
import { NewsComponent } from './news/news.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ListingVoteComponent } from './listing-vote/listing-vote.component';
import { BlogComponent } from './blog/blog.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { OurCompanyComponent } from './our-company/our-company.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TokenListingComponent } from './token-listing/token-listing.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeeComponent } from './fee/fee.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { DisclosuresComponent } from './disclosures/disclosures.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PractiseComponent } from './practise/practise.component';
import { AuthGuard } from './auth.guard';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsListComponent } from './news-list/news-list.component';



const routes: Routes = [
  
    {path:'', redirectTo:"/", pathMatch:"full"},
    {path:"", component:HomeComponent},
    {path:"exchange", component:ExchangeComponent},
    {path:"login", component:LoginComponent},
    {path:"signup", component:SignupComponent},
    {path:"ico", component:IcoComponent, canActivate: [AuthGuard]},
    {path:"addcoin", component:AddCoinComponent, canActivate: [AuthGuard]},
    {path:"support", component:SupportComponent},
    {path:"faq", component:FaqComponent},
    {path:"practise", component:PractiseComponent},
    {path:"api", component:ApiComponent},
    {path:"news", component:NewsComponent},
    {path:"news-details", component:NewsDetailsComponent},
    {path:"news-list", component:NewsListComponent},
    {path:"joinUs", component:JoinUsComponent},
    {path:"listingVote", component:ListingVoteComponent},
    {path:"blog", component:BlogComponent},
    {path:"forgot_password", component:ForgotPageComponent},  
    {path:"our-company", component:OurCompanyComponent},
    {path:"our-team", component:OurTeamComponent},
    {path:"contact-us", component:ContactUsComponent},
    {path:"token-listing", component:TokenListingComponent},
    {path:"feedback", component:FeedbackComponent},
    {path:"fee", component:FeeComponent},
    {path:"terms-of-service", component:TermsOfServiceComponent},
    {path:"disclosures", component:DisclosuresComponent},
    {path:"privacy-policy", component:PrivacyPolicyComponent},
    {path:"**", component:PageNotFoundComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
                                    HeaderComponent,
                                    FooterComponent,
                                    HomeComponent,
                                    ExchangeComponent,
                                    AddCoinComponent,
                                    IcoComponent,
                                    SupportComponent,
                                    FaqComponent,
                                    LoginComponent,
                                    SignupComponent,
                                    ApiComponent,
                                    NewsComponent,
                                    NewsDetailsComponent,
                                    NewsListComponent,
                                    JoinUsComponent,
                                    ListingVoteComponent,
                                    BlogComponent,
                                    ForgotPageComponent,
                                    OurCompanyComponent,
                                    OurTeamComponent,
                                    ContactUsComponent,
                                    PageNotFoundComponent,
                                    TokenListingComponent,
                                    FeedbackComponent,
                                    FeeComponent,
                                    TermsOfServiceComponent,
                                    DisclosuresComponent,
                                    PrivacyPolicyComponent,
                                    PractiseComponent,
                                  ]