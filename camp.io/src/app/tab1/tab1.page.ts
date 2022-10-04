import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as L from "leaflet"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  map: L.Map

  constructor(public router: Router) {}

  ngOnInit() {
    this.map = L.map('map', {
      center: [36.216536,-81.674616],
      zoom: 13,
      renderer: L.canvas(),
      // attributionControl: false
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap_',
    }).addTo(this.map)

    L.marker([36.215851,-81.684765]).addTo(this.map)
    .bindPopup('Appalachian State University: <br> Elevation 3,333 ft')
    L.marker([36.230833,-81.676111]).addTo(this.map)
    .bindPopup('Howard\'s Knob: <br> Elevation 4,396 ft')
    .on('click', () => this.router.navigateByUrl('/tab3'))

    //LOOK AT IMPORTS FOR TYPESCRIPT
    //L.Control.geocoder().addTo(this.map);

    //var searchLayer = L.layerGroup().addTo(this.map);
    //this.map.addControl( new L.Control.Search({layer: searchLayer}) );

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }
}
