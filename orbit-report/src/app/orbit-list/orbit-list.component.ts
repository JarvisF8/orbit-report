import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
   selector: 'app-orbit-list',
   templateUrl: './orbit-list.component.html',
   styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {
  
   @Input() satellites: Satellite[];
   isSorted: boolean = false;
   
   constructor() { }

   ngOnInit() { }

   sort(column: string): void {
    // array.sort modifies the array, sorting the items based on the given compare function
      if(this.isSorted === false) {
         this.satellites.sort(function(a: Satellite, b: Satellite): number {
            if(a[column] < b[column]) {
               return -1;
            } 
            else if (a[column] > b[column]) {
               return 1;
            }
            return 0;
         });
         this.isSorted = true;
      }
      else {
         this.satellites.sort(function(a: Satellite, b: Satellite): number {
            if(a[column] > b[column]) {
               return -1;
            } 
            else if (a[column] > b[column]) {
               return 1;
            }
            return 0;
         });
         this.isSorted = false;
      }
   }
   
   // addSatellite(name: string, type: string, operational: boolean, orbit: string, date: string): void {
   //    let satellite = new Satellite(name, type, date, orbit, operational);
   //    console.log(satellite)
   //    this.satellites.push(satellite);
   // }
      
}