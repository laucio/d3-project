import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  numbers: number[] = [];
  constructor() { 
    
  }

  ngOnInit() {
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
    }
  }

}
