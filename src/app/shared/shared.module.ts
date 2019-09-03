import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@app/material.module';


@NgModule({
  declarations: [],
  imports: [LayoutModule, CdkTableModule, MaterialModule, RouterModule, CommonModule],
  exports: [
    LayoutModule,
    CdkTableModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  entryComponents: []
})
export class SharedModule {}
