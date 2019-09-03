import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SecureLayoutComponent } from './layouts/secure-layout/secure-layout.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    PublicLayoutComponent,
    SecureLayoutComponent,
  ],
  imports: [
    SharedModule,
    LayoutModule
  ],
  providers: [
  ]
})

export class CoreModule {
}
