import { Component } from '@angular/core';
import * as L from "leaflet"

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  map: L.Map

  constructor() {}

  ngOnInit() {
    this.map = L.map('map', {
      center: [ 36.21272,-81.67292 ],
      zoom: 13,
      renderer: L.canvas()
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(this.map)

    L.marker([36.21272,-81.67292]).addTo(this.map)
    .bindPopup('Appalachian State University')

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }
}
