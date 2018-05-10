import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CreativeService } from '../creative.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-updatecreative',
  templateUrl: './updatecreative.component.html',
  styleUrls: ['./updatecreative.component.css'],
  providers: [CreativeService]

})
export class UpdatecreativeComponent implements OnInit {

  constructor(private creativeService: CreativeService,
              private route: ActivatedRoute,
              private router: Router) { }

  // declare creative
  creative:any = {};

  // flag for edit mode
  editing:boolean=false;

  // bound to edit and cancel buttons in view
  setEditMode(mode):void{
    this.editing = (mode ? true : false);
  }

  ngOnInit() {
     this.getCreative();
   }

   getCreative():void{
     const param = this.route.snapshot.paramMap.get('id');
     this.creativeService.getCreative(param).subscribe((creative)=>{
       this.creative = creative;
     });
   }

   updateCreative(updateCreativeForm) : void {
     this.creative.status = 'Updated';
     const param = this.route.snapshot.paramMap.get('id');
     this.creativeService.updateCreative(param, this.creative)
           .subscribe((creative)=>{
             console.log(creative);
           });
       this.editing = false;
     }

   deleteCreative(){
     if (confirm(`Are you sure you want to delete ${this.creative.name}?`)){
       console.log(`deleting ${this.creative._id}`);
       this.creativeService.deleteCreative(this.creative._id)
         .subscribe((result)=>{
           alert(`${this.creative.name} has been deleted`);
           this.router.navigate(['/gallery']);
         })
       }
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

   months = ['January',
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
