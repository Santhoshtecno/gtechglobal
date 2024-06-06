import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';


@NgModule({
  declarations: [
    TransactionDetailComponent,
    TransactionListComponent,
    AppLayoutComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    TransactionsRoutingModule,
  ]
})
export class TransactionsModule { }
