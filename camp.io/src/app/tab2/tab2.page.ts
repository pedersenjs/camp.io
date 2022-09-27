import { Component } from '@angular/core';
import * as L from "leaflet"
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  map2: L.Map

  constructor() {}

  ngOnInit() {
    this.map2 = L.map('map', {
      center: [ 36.21272,-81.67292 ],
      zoom: 13,
      renderer: L.canvas()
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map2)

    L.marker([36.21272,-81.67292]).addTo(this.map2)
    .bindPopup('Appalachian State University')

    setTimeout(() => {
      this.map2.invalidateSize();
    }, 0);
  }
}
