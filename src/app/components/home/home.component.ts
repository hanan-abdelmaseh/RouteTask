import { Component, OnInit } from '@angular/core';
import { customerResponse, ICustomer } from 'src/app/models/customer.model';
import { ITransaction } from 'src/app/models/transaction.model';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
customersList:ICustomer[]=[];
transactionList:ITransaction[]=[];
customerListAfterFilterByAmount:ICustomer[]=[];
search!:string;
searchNumber!:number;
displayedColumns: string[] = ['Name','Transaction','Chart'];

  constructor(private _MainService:MainService){

  }
  ngOnInit(): void {
    this.getAllCustomers();
    this.getAllTransactions();
 
  }
  getAllCustomers(){
    this._MainService.getAllCustomers().subscribe({
      next:(res)=>{
       
       this.customersList= res;
       //console.log(this.customersList);
      }
    })
  }
  getAllTransactions(){
    this._MainService.getAllTransactions().subscribe({
      next:(res)=>{
       
       this.transactionList= res;
       //console.log(this.transactionList);
      }
    })
  }
  resetSearchInput() {
    this.search = '';
    this.getAllCustomers();
  }
  resetAmountSearch(){
    this.searchNumber=0;
    this.customerListAfterFilterByAmount=[]
    this.getAllTransactions();
    this.getAllCustomers();
  }
  filtetByName(searchValue :HTMLInputElement){
    if (searchValue) {
      this.customersList = this.customersList.filter(p => p.name.toLocaleLowerCase().includes(searchValue.value));
     
    }
  }
  filtetByamount(searchValue:number){
    if (searchValue) {
      this.transactionList = this.transactionList.filter(p => p.amount === searchValue);
    console.log(this.transactionList);
    console.log(this.transactionList.length)
    if(this.transactionList.length >0){
      for(let i =0 ; i <this.transactionList.length ; i++){
        this._MainService.getCustomerById(this.transactionList[i].customer_id).subscribe(res=>{
           this.customerListAfterFilterByAmount.push(res)
          console.log(this.customerListAfterFilterByAmount)
          this.customersList = this.customerListAfterFilterByAmount
          console.log(this.customersList.length)
        }
  
          );
      }
    }
    else{
      this.customersList=[]
    }
   


    
  }}

}
