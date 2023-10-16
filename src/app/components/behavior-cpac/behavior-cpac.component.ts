import { behaviors } from './../../../assets/data/behavior';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-behavior-cpac',
  templateUrl: './behavior-cpac.component.html',
  styleUrls: ['./behavior-cpac.component.css']
})
export class BehaviorCpacComponent implements OnInit {
  behaviors = behaviors;
  behave = behaviors[0];

  ngOnInit(): void {
    console.log(behaviors[0].reason);
    console.log(this.behave);
  }


}
