import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseURL = 'http://localhost:3000/api/v1/';
  constructor(private http: HttpClient) { }

  getTransactions(startDate: string, endDate: string) {
    return this.http.get(`${this.baseURL}transactions?startDate=${startDate}&endDate=${endDate}`);
  }

  getTransactionsById(id: any) {
    return this.http.get(`${this.baseURL}transactions/${id}`);
  }

  updateTransaction(id: number, comments: string) {
    return this.http.put(`${this.baseURL}transactions/${id}`, { comments });
  }

}
