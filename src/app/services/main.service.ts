import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerResponse, ICustomer } from '../models/customer.model';
import { ITransaction, ITransactionResponse } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  //as it need to run server locally so i used other way 
 // apiUrl: string = 'http://localhost:3000/'
 apiUrl:string = 'https://my-json-server.typicode.com/hanan-abdelmaseh/RouteTaskApi/'


  constructor(private _HttpClient: HttpClient) { }

  getAllCustomers(): Observable<customerResponse> {
    return this._HttpClient.get<customerResponse>(`${this.apiUrl}customers`)
  }
  getCustomerById(id:number): Observable<ICustomer> {
    return this._HttpClient.get<ICustomer>(`${this.apiUrl}customers/${id}`)
  }
  getAllTransactions(): Observable<ITransactionResponse> {
    return this._HttpClient.get<ITransactionResponse>(`${this.apiUrl}transactions`)
  }
  getTransactionsForUser(id:number): Observable<ITransaction> {
    return this._HttpClient.get<ITransaction>(`${this.apiUrl}transactions/${id}`)
  }
  getAllTransactionsByCustomerID(customer_id:number): Observable<ITransactionResponse> {
    return this._HttpClient.get<ITransactionResponse>(`${this.apiUrl}transactions`, {params:{customer_id:customer_id}})
  }
}
