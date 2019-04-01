import { Component, OnInit , Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormGroup, FormControl, Validators,FormArray,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-bus-collapsible',
  templateUrl: './bus-collapsible.component.html',
  styleUrls: ['./bus-collapsible.component.less']
})
export class BusCollapsibleComponent implements OnInit,OnChanges {
  @Input() busData:{};
  collapsibleData:{};
  
  constructor() { 
    
  }
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "busData" changed
    if (changes['busData']) {
      console.log("BusDatafromcollapsiblengOnChanges",this.busData);
        this.collapsibleData = this.busData;
        console.log("BusDatafromcollapsiblengOnChanges",this.busData);
        console.log("CollapsibleDatafromcollapsiblengOnChanges",this.collapsibleData);

    }
  }
  ngOnInit() {
    
  }
  //commentFC = new FormControl();
  onCommentChange() {
  console.log(this.commentFC.value);
  } 
  commentFC = new FormControl('', [
    Validators.required, 
    Validators.maxLength(30)
  ]); 
  saveNotes(){
    /** Formulate the request body to be sent to backend*/
    
    console.log("Inside saveNotes");
  }

}
