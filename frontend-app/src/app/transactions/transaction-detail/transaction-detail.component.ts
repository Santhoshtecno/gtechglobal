import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';

interface ApiResponse {
  message: string;
  code: string;
  data: {
    ID: string;
    Date: string;
    Comments: string;
  };
}

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent {
  transaction: any;
  id: any;
  constructor(
    private transactionService: TransactionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id !== null) {
      this.transactionService.getTransactionsById(this.id).subscribe(response => {
        this.transaction = response;
        console.log(this.transaction, "================")
      });
    }
  }

  saveComments() {
    this.transactionService.updateTransaction(this.id, this.transaction?.data.comments).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
