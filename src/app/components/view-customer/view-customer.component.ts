import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlTree } from '@angular/router';
import { ICustomer } from 'src/app/models/customer.model';
import { ITransaction } from 'src/app/models/transaction.model';
import { MainService } from 'src/app/services/main.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.scss']
})
export class ViewCustomerComponent implements OnInit {

  customerID!:number;
  transactionList:ITransaction[]=[];
 
  chart: any;
  amountList:any =[];
  dateList:any =[];
  customerName:string='';
  constructor(private  _ActivatedRoute:ActivatedRoute , private  _MainService:MainService){

  }
  ngOnInit(): void {
    this.customerID = this._ActivatedRoute.snapshot.params['id'];
    console.log(this.customerID);
    this.getCustomerById()
    this.getAllTransactionsByCustomerID();
  }
getCustomerById(){
  this._MainService.getCustomerById(this.customerID).subscribe({
    next:(res)=>{
     console.log(res);
     this.customerName = res.name
    }
  })
}
  getAllTransactionsByCustomerID(){
  this._MainService.getAllTransactionsByCustomerID(this.customerID).subscribe({
    next:(res)=>{
    this.transactionList = res;
    // console.log(this.transactionList);
   this.amountList = this.transactionList.map(item=>item.amount);
   this.dateList= this.transactionList.map(item=> item.date)
    // console.log(this.amountList);
    // console.log(this.dateList);


  },complete:()=>{
    this.chart = new Chart("myChart", {
      type: 'line',
      data : {
       labels: this.dateList,
         
        datasets: [{
          label: 'Transactions',
         data: this.amountList,
         borderColor: 'rgb(75, 192, 192)',
          

        }]
      }
    });
  }

});}

}
