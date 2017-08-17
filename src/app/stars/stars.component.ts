import {Component, Input, OnInit} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  public rating: number;
  public stars: boolean[];

  constructor() {
  }

  ngOnInit() {
    this.stars = [];
    for (let i = 0; i < 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
