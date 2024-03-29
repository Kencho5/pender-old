import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { ResetComponent } from './reset/reset.component';
import { UploadComponent } from './upload/upload.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
// import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LoadingComponent } from './shared/loading/loading.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { LanguageSelectorComponent } from './shared/language-selector/language-selector.component';
import { UploadFormComponent } from './shared/upload-form/upload-form.component';
import { ServiceCostComponent } from './shared/service-cost/service-cost.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CitiesSelectorComponent } from './shared/cities-selector/cities-selector.component';
import { ContactComponent } from './contact/contact.component';
import { LoadingInterceptor } from './shared/loading/loading.interceptor';
import { BalanceComponent } from './balance/balance.component';
import { PaymentStatusComponent } from './payment-status/payment-status.component';
import { RulesComponent } from './rules/rules.component';
import { ReturnComponent } from './return/return.component';
import { UsageComponent } from './usage/usage.component';
import { MatMenuModule } from '@angular/material/menu';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    ResetComponent,
    UploadComponent,
    PostComponent,
    UserComponent,
    SearchComponent,
    LoadingComponent,
    LanguageSelectorComponent,
    UploadFormComponent,
    ServiceCostComponent,
    FooterComponent,
    CitiesSelectorComponent,
    ContactComponent,
    BalanceComponent,
    PaymentStatusComponent,
    RulesComponent,
    ReturnComponent,
    UsageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    CarouselModule,
    HttpClientModule,
    MatMenuModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    // MatProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
