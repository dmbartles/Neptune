import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CreativeService } from '../creative.service';

@Component({
  selector: 'app-creative',
  templateUrl: './creative.component.html',
  styleUrls: ['./creative.component.css'],
  providers: [CreativeService]
})
export class CreativeComponent implements OnInit {

  @Input() creative;

  constructor(private creativeService:CreativeService) { }

  ngOnInit() {
  }

}
