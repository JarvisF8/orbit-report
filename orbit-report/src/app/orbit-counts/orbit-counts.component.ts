import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];
  type: string[] = ['', 'Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope'];


  constructor() { }

  ngOnInit() { }

  addMethod(input): number {
    if(input === ''){
      return this.satellites.length;
    }
    else{
      let total: number = 0;
      for(let i in this.satellites) {
        if(this.satellites[i].type === input) {
          total++;
        }
      }
      return total;
    }
  
  }   
}
  