import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-tic-tok',
  templateUrl: './tic-tok.component.html',
  styleUrls: ['./tic-tok.component.css']
})
export class TicTokComponent implements OnInit {
  ticTokFor: FormGroup;
  imagesArray = [];
  myNumber: any;
  constructor(private formCreate: FormBuilder) { }

  ngOnInit() {
    this.myNumber = JSON.parse(localStorage.getItem('localUser'));
    this.ticTokFor = this.formCreate.group({
      first: '',
      second: '',
      third: '',
      fourth: '',
      fifth: '',
      sixth: '',
      seventh: '',
      eighth: '',
      nonth: ''
    });
    this.imagesArray[1] =  {imageSrc : ''};
    this.imagesArray[2] = {imageSrc : ''};
    this.imagesArray[3] = {imageSrc : ''};
    this.imagesArray[4] = {imageSrc : ''};
    this.imagesArray[5] = {imageSrc : ''};
    this.imagesArray[6] = {imageSrc : ''};
    this.imagesArray[7] = {imageSrc : ''};
    this.imagesArray[8] = {imageSrc : ''};
    this.imagesArray[9] = {imageSrc : ''};

  }
  updateTheDb(value, myNumber) {
    console.log('as', value, myNumber);
    this.ticTokFor.patchValue({first : myNumber.user});
    this.imagesArray[value] = {imageSrc : './../../assets/X.png'};
    console.log('df', this.imagesArray);
  }
}
