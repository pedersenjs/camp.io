import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as L from "leaflet"
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { GeoSearchControl } from 'leaflet-geosearch';
import 'leaflet-panel-layers';
import 'leaflet.locatecontrol';
const provider = new OpenStreetMapProvider();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  map: L.Map

  greenDriveIcon = L.icon({
    iconUrl: '../../assets/green_default1.png',
    shadowUrl: '../../assets/markers_shadow.png',

    iconSize: [ 30, 45 ],
    iconAnchor: [ 17, 42 ],
    popupAnchor: [ 1, -32 ],
    shadowAnchor: [ 10, 12 ],
    shadowSize: [ 36, 16 ]
  });

  redDriveIcon = L.icon({
    iconUrl: '../../assets/red_default1.png',
    shadowUrl: '../../assets/markers_shadow.png',

    iconSize: [ 30, 45 ],
    iconAnchor: [ 17, 42 ],
    popupAnchor: [ 1, -32 ],
    shadowAnchor: [ 10, 12 ],
    shadowSize: [ 36, 16 ]
  });

  greenBackIcon = L.icon({
    iconUrl: '../../assets/green_hex1.png',
    shadowUrl: '../../assets/markers_shadow.png',

    iconSize: [ 30, 45 ],
    iconAnchor: [ 17, 42 ],
    popupAnchor: [ 1, -32 ],
    shadowAnchor: [ 10, 12 ],
    shadowSize: [ 36, 16 ]
  });

  redBackIcon = L.icon({
    iconUrl: '../../assets/red_hex1.png',
    shadowUrl: '../../assets/markers_shadow.png',

    iconSize: [ 30, 45 ],
    iconAnchor: [ 17, 42 ],
    popupAnchor: [ 1, -32 ],
    shadowAnchor: [ 10, 12 ],
    shadowSize: [ 36, 16 ]
  });

  constructor(public router: Router) {}

  ngOnInit() {
    this.map = L.map('map', {
      center: [37.090240, -95.712891],
      zoom: 3,
      renderer: L.canvas(),
      //Attribution control for removing attribution data:
      // attributionControl: false
    })

    this.map.addControl(GeoSearchControl({
      provider,
      style: 'bar',
    }))

    L.control.locate().addTo(this.map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '?? OpenStreetMap_',
    }).addTo(this.map)

    //initial example markers
    L.marker([36.215851,-81.684765], {title:"Appalachian State University", icon: this.greenDriveIcon}).addTo(this.map)
    .bindPopup('Appalachian State University <br>' +
    "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
    "<span class='fa fa-star'></span>" +
    "<span class=\"fa fa-star checked\"></span>" +
    "<span class=\"fa fa-star\"></span>"  +
    "<span class=\"fa fa-star\"></span><br>"  +
    "Description: This is our university that we attend. I one time took a nap on Sanford Mall for a few hours between classes."
    + " Security does not appreciate people sleeping here, so be wary of guards.");

    L.marker([36.230833,-81.676111], {title:"Howard\'s Knob", icon: this.redDriveIcon}).addTo(this.map)
    .bindPopup('Howard\'s Knob <br>' +
    "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
    "<span class='fa fa-star'></span>" +
    "<span class=\"fa fa-star checked\"></span><br>"  +
    "Description: Took a nap here once. But beware, they shut the gates at sunset. "
    + "So if you sleep here too long youll get locked in and they wont care");

    L.marker([36.10937607492409,-81.80272711107834], {title:"Briar Patch Campsite", icon: this.greenBackIcon}).addTo(this.map)
    .bindPopup('Briar Patch Campsite <br>' +
    "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
    "<span class='fa fa-star'></span>" +
    "<span class=\"fa fa-star checked\"></span>" +
    "<span class=\"fa fa-star\"></span>"  +
    "<span class=\"fa fa-star\"></span><br>"  +
    "Description: Super cool campsite off the beaten path. A few mile hike in with steep elevation gain "
    + "No one around for miles at night. Except for the bears");

    L.marker([36.120648650031036,-81.79391265388594], {title:"Refuge Campsite", icon: this.redBackIcon}).addTo(this.map)
    .bindPopup('Refuge Campsite <br>' +
    "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
    "<span class='fa fa-star'></span>" +
    "<span class=\"fa fa-star checked\"></span>" +
    "<span class=\"fa fa-star\"></span><br>"  +
    "Description: Not going to lie here, did get pretty scared at night. There were a lot of owls hooting and no one else around.");

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }
}
