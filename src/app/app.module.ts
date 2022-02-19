import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HeaderModuleModule } from './header-module/header-module.module';
import { SharedModule } from 'src/@theme/shared.module';
import { AgmCoreModule } from '@agm/core';
import { ShopComponent } from './shop/shop.component';
import { AddproductComponent } from './shop/addproduct/addproduct.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from 'src/@theme/interceptor/httpinterceptor';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MapService } from 'src/@theme/Services/map.service';
import { MappageComponent } from './mappage/mappage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { TrackingComponent } from './tracking/tracking.component';
import { TrackingmapComponent } from './trackingmap/trackingmap.component';
import { CartComponent } from './cart/cart.component';
import { AgmDirectionModule } from 'agm-direction';
import { AddProductComponent } from './cart/add-product/add-product.component';
import { ContactComponent } from './contact/contact.component';
import { NgxStripeModule } from 'ngx-stripe';
import { PolicyComponent } from './policy/policy.component';
import { DpDatePickerModule } from 'ng2-date-picker';
import { NgSelectModule } from '@ng-select/ng-select';
import { GetAllShopComponent } from './get-all-shop/get-all-shop.component';
import { MailComponent } from './contact/mail/mail.component';
import { WarningComponent } from './shop/warning/warning.component';
import { FeedbackComponent } from './about/feedback/feedback.component';
import { ADDaddressComponent } from './cart/addaddress/addaddress.component';
import { CartconflictComponent } from './cart/cartconflict/cartconflict.component';
import { ChemicalAnalysisComponent } from './chemical-analysis/chemical-analysis.component';
import { MechanicalTestingComponent } from './mechanical-testing/mechanical-testing.component';
import { MetallographyTestingComponent } from './metallography-testing/metallography-testing.component';
import { CorrosionTestingComponent } from './corrosion-testing/corrosion-testing.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutComponent,
    ShopComponent,
    AddproductComponent,
    MappageComponent,
    CheckoutComponent,
    TrackingComponent,
    TrackingmapComponent,
    CartComponent,
    AddProductComponent,
    ContactComponent,
    PolicyComponent,
    GetAllShopComponent,
    MailComponent,
    WarningComponent,
    FeedbackComponent,
    ADDaddressComponent,
    CartconflictComponent,
    ChemicalAnalysisComponent,
    MechanicalTestingComponent,
    MetallographyTestingComponent,
    CorrosionTestingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModuleModule,
    GooglePlaceModule,
    SharedModule,
    AgmDirectionModule,
    DpDatePickerModule,
    NgSelectModule,
    NgxStripeModule.forRoot('pk_live_CIPXb77du7JuqBL8BHmHqM9t009dD6ONYf'),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCrr-U8HBzd2cqmW9UpipocVTl9rHjCphY',
    }),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
    MapService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
