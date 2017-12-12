import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent{

  @Input('totalCount') totalCount : number;

  onCLickIncrease(){
    this.totalCount += 1;
    console.log ("Total Count after Increament = " + this.totalCount);
  }
  onCLickDecrease(){
    this.totalCount -= 1;
    console.log ("Total Count after Decrement = " + this.totalCount);
  }
 
}
