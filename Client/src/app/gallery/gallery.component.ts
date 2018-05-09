import { Component, OnInit } from '@angular/core';
import { CreativeService } from '../creative.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [CreativeService]
})
export class GalleryComponent implements OnInit {

  constructor(private creativeService:CreativeService){
  }

  creativeList = null;

  ngOnInit() {
     this.updateCreativeList();
   }

   updateCreativeList():void{
     this.creativeService.listCreatives().subscribe((creatives)=>{
       this.creativeList = creatives;
     });
   }

}
