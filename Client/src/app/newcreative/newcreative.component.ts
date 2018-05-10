import { Component, OnInit, Output } from '@angular/core';
import { CreativeService } from '../creative.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newcreative',
  templateUrl: './newcreative.component.html',
  styleUrls: ['./newcreative.component.css'],
  providers: [CreativeService]
})
export class NewcreativeComponent implements OnInit {

  constructor(private creativeService: CreativeService,
              private router: Router) { }

  ngOnInit() {
  }

  // creative object, bound to the form fields
  creative:any = {}

save(newCreativeForm) : void {
  this.creative.status = 'New';
  this.creativeService.createCreative(this.creative)
        .subscribe((creative)=>{
          console.log(creative);
        });
             this.router.navigate(['/gallery']);
  }

  // define allowable fields
  lobs = [
    'Mainstreet',
    'Upmarket',
    "Sony",
    "Small Business"]

    status = [
      'New',
      'Complete',
      'Pending',
      'Reviewed']

  vendors = [
      'DD Ronelly',
      'Outlet',
      "Bartleby's",
      "JLM"]

  volumes = [
    '1 to 100,000',
    '100,001 to 250,000',
    '250,001 to 500,000',
    '500,001 to 1,000,000',
    '1,000,001 to 2,500,000',
    '2,500,001 to 10,000,000',
    '>10,000,000']

  printMethods = [
    'Inkjet',
    'Laser',
    "MICR"
  ]

  simplexDuplexs = [
    'Simpex',
    'Duplex'
  ]

  heights = [
    '11',
    '14',
    '17',
    '22',
  ]

  inserts = [
    '1',
    '2',
  ]

months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Decemeber'
]

weeks = [
  '1',
  '2',
  '3',
  '4',
  '5'
]

miscCharges = [
  {charge:'Spot Glue',code:'SPG'},
  {charge:'Glitter',code:'GLR'},
  {charge:'Waffer Seal',code:'WFS'},
  {charge:'Attractive Smell',code:'SML'},
  {charge:'Matt Bartles Awesomeness',code:'A1+'}
]

resFams = [
  'Interstack Card Affix',
  'Closed Face with Unique Spot Emboss',
  'Interstack Cardstock Buckslip'
]

}
