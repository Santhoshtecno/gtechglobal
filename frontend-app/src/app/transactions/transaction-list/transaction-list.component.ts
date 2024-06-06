import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})


export class TransactionListComponent {
  transactions: any;

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {
    const startDate = '2021-01-01';
    const endDate = '2021-12-31';
    this.transactionService.getTransactions(startDate, endDate).subscribe(response => {
      this.transactions = response;
    });
  }

  viewTransaction(id: string): void {
    this.router.navigate(['/transaction', id]);
  }
}