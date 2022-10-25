import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as L from "leaflet"
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { GeoSearchControl } from 'leaflet-geosearch';
const provider = new OpenStreetMapProvider();
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
      //Attribution control for removing attribution data:
      // attributionControl: false
    })

    this.map.addControl(GeoSearchControl({
      provider,
      style: 'bar',
    }))

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap_',
    }).addTo(this.map)

    //initial example markers
    L.marker([36.215851,-81.684765], {title:"Appalachian State University"}).addTo(this.map)
    .bindPopup('Appalachian State University:<br>' +
    "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
    "<span class='fa fa-star'></span>" +
    "<span class=\"fa fa-star checked\"></span>" +
    "<span class=\"fa fa-star\"></span>"  +
    "<span class=\"fa fa-star\"></span><br>"  +
    "Description: This is our university that we attend. I one time took a nap on Sanford Mall for a few hours between classes."
    + " I had a dream Yosef threw me a birthday party but other than that it was nice. would come back");
    // L.marker([36.215851,-81.684765], {title:"Appalachian State University"}).addTo(this.map)
    // .bindPopup('Appalachian State University: <br> Elevation 3,333 ft')
    L.marker([36.230833,-81.676111], {title:"Howard\'s Knob"}).addTo(this.map)
    // .bindPopup('Howard\'s Knob: <br> Elevation 4,396 ft')
    .bindPopup('Howard\'s Knob:<br>' +
    "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
    "<span class='fa fa-star'></span>" +
    "<span class=\"fa fa-star checked\"></span><br>"  +
    "Description: Took a nap here once. But beware, they shut the gates at sunset. "
    + "So if you sleep here too long youll get locked in and they wont care");
    L.marker([36.10937607492409,-81.80272711107834], {title:"Briar Patch Campsite"}).addTo(this.map)
    // .bindPopup('Briar Patch Campsite: <br> Elevation 4,396 ft')
    .bindPopup('Briar Patch Campsite:<br>' +
    "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
    "<span class='fa fa-star'></span>" +
    "<span class=\"fa fa-star checked\"></span>" +
    "<span class=\"fa fa-star\"></span>"  +
    "<span class=\"fa fa-star\"></span><br>"  +
    "Description: Super cool campsite off the beaten path. A few mile hike in with steep elevation gain "
    + "No one around for miles at night. Except for the bears");
    L.marker([36.120648650031036,-81.79391265388594], {title:"Refuge Campsite"}).addTo(this.map)//36.120648650031036, -81.79391265388594
    // .bindPopup('Refuge Campsite: <br> Elevation 4,396 ft')
    .bindPopup('Refuge Campsite:<br>' +
    "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
    "<span class='fa fa-star'></span>" +
    "<span class=\"fa fa-star checked\"></span>" +
    "<span class=\"fa fa-star\"></span><br>"  +
    "Description: Not going to lie here, did get pretty scared at night. There were a lot of owls hooting and no one else around.");

    // Working on potential information popup which can reroute to campsite page.
    //.on('click', () => this.router.navigateByUrl('/tab3'))

    //LOOK AT IMPORTS FOR TYPESCRIPT - Working on search bar functionality
    //L.Control.geocoder().addTo(this.map);

    //var searchLayer = L.layerGroup().addTo(this.map);
    //this.map.addControl( new L.Control.Search({layer: searchLayer}) );

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }
}
