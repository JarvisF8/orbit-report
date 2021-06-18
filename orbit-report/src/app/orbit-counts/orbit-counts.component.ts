import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }
  addTotal(): number {
    let total: number = 0;
    for(let i in this.satellites) {
      total += 1;
    }
    return total;
  }
  addDebris(): number {
    let total: number = 0;
    for(let i in this.satellites) {
      if(this.satellites[i]['type'] === 'Space Debris') {
        total += 1;
      }
    }
    return total;
  }

  addCommunication(): number {
    let total: number = 0;
    for(let i in this.satellites) {
      if(this.satellites[i]['type'] === 'Communication') {
        total += 1;
      }
    }
    return total;
  }

  addProbe(): number {
    let total: number = 0;
    for(let i in this.satellites) {
      if(this.satellites[i]['type'] === 'Probe') {
        total += 1;
      }
    }
    return total;
  }

  addPositioning(): number {
    let total: number = 0;
    for(let i in this.satellites) {
      if(this.satellites[i]['type'] === 'Positioning') {
        total += 1;
      }
    }
    return total;
  }

  addSpaceStation(): number {
    let total: number = 0;
    for(let i in this.satellites) {
      if(this.satellites[i]['type'] === 'Space Station') {
        total += 1;
      }
    }
    return total;
  }

  addTelescope(): number {
    let total: number = 0;
    for(let i in this.satellites) {
      if(this.satellites[i]['type'] === 'Telescope') {
        total += 1;
      }
    }
    return total;
  }

}
