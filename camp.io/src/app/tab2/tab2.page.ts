import { Component } from '@angular/core';
//import { FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';
import * as L from "leaflet";
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { GeoSearchControl } from 'leaflet-geosearch';
import { PhotoService } from '../services/photo.service';
import "leaflet.locatecontrol";
const provider = new OpenStreetMapProvider();
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  // global map variable
  map2: L.Map
  //global x input variable
  xinputValue = 0;
  //global y input variable
  yinputValue = 0;
  rating = 0;
  locationname = "user input";
  description="";
  photo="";
  constructor(public photoService: PhotoService) { }

  greenDriveIcon = L.icon({
    iconUrl: '../../assets/green_default.png',
    shadowUrl: '../../assets/markers_shadow.png',

    iconSize: [ 30, 45 ],
    iconAnchor: [ 17, 42 ],
    popupAnchor: [ 1, -32 ],
    shadowAnchor: [ 10, 12 ],
    shadowSize: [ 36, 16 ]
  });

  redDriveIcon = L.icon({
    iconUrl: '../../assets/red_default.png',
    shadowUrl: '../../assets/markers_shadow.png',

    iconSize: [ 30, 45 ],
    iconAnchor: [ 17, 42 ],
    popupAnchor: [ 1, -32 ],
    shadowAnchor: [ 10, 12 ],
    shadowSize: [ 36, 16 ]
  });

  greenBackIcon = L.icon({
    iconUrl: '../../assets/green_hex.png',
    shadowUrl: '../../assets/markers_shadow.png',

    iconSize: [ 30, 45 ],
    iconAnchor: [ 17, 42 ],
    popupAnchor: [ 1, -32 ],
    shadowAnchor: [ 10, 12 ],
    shadowSize: [ 36, 16 ]
  });

  redBackIcon = L.icon({
    iconUrl: '../../assets/red_hex.png',
    shadowUrl: '../../assets/markers_shadow.png',

    iconSize: [ 30, 45 ],
    iconAnchor: [ 17, 42 ],
    popupAnchor: [ 1, -32 ],
    shadowAnchor: [ 10, 12 ],
    shadowSize: [ 36, 16 ]
  });

  addPhotoToGallery(){
    this.photoService.addNewToGallery();
  }

  //This code below is to add a new location maker
  //This link helped guide some parts, has useful tips https://stackoverflow.com/questions/41139546/angular2-ngsubmit-not-working
  addLocation(form: NgForm) {
    //code to get input from the form and store it in variables
    this.xinputValue = form.value["x-coordinate"];
    this.yinputValue = form.value["y-coordinate"];
    this.locationname = form.value.name;
    this.rating = form.value.rating;
    this.description=form.value.description;
    this.photo=form.value.photo;

    // var firefoxIcon = L.icon({
    //   // iconUrl: 'http://joshuafrazier.info/images/firefox.svg',
    //   iconUrl: '/camp.io/src/app/tab2/howardsknob.jpg',
    //   iconSize: [38, 95], // size of the icon
    //   popupAnchor: [0,-15]
    //   });
          // create popup contents
    // var customPopup = "Mozilla Toronto Offices<br/><img src='http://joshuafrazier.info/images/maptime.gif' alt='maptime logo gif' width='350px'/>";

    // // specify popup options
    // var customOptions =
    //     {
    //     'maxWidth': '500',
    //     'className' : 'custom'
    //     }

    if (this.rating == 1) {
      L.marker([this.xinputValue, this.yinputValue]).addTo(this.map2)
      // L.marker([this.xinputValue, this.yinputValue], {icon: firefoxIcon}).addTo(this.map2)
        .bindPopup(this.locationname + "<br>" +
        "Rating: " + "<span class=\"fa fa-star checked\"></span><br>"  +
        // "Description: " + this.description + "<img src='" + this.photo+"' />")//just want it to wrok but it wont
        "Description: " + this.description)
        //  console.log(this.photo)
    }
    if (this.rating == 2) {
      L.marker([this.xinputValue, this.yinputValue]).addTo(this.map2)
        .bindPopup(this.locationname + "<br>" +
        "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
        "<span class=\"fa fa-star checked \"></span><br>" +
        "Description: " + this.description)
    }

    if (this.rating == 3) {
      L.marker([this.xinputValue, this.yinputValue]).addTo(this.map2)
        .bindPopup(this.locationname + "<br>" +
        "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
        "<span class=\"fa fa-star checked \"></span>" +
        // <span class=\"fa fa-star checked\"></span>
        "<span class=\"fa fa-star\"></span><br>"  +
        "Description: " + this.description)
    }

    if (this.rating == 4) {
      L.marker([this.xinputValue, this.yinputValue]).addTo(this.map2)
        .bindPopup(this.locationname + "<br>" +
        "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
        "<span class=\"fa fa-star checked \"></span>" +
        "<span class=\"fa fa-star checked\"></span>" +
        "<span class=\"fa fa-star\"></span><br>"  +
        "Description: " + this.description)
    }

    if (this.rating == 5) {
      L.marker([this.xinputValue, this.yinputValue]).addTo(this.map2)
        .bindPopup(this.locationname + "<br>" +
        "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
        "<span class=\"fa fa-star checked \"></span>" +
        "<span class=\"fa fa-star checked\"></span>" +
        "<span class=\"fa fa-star\"></span>"  +
        "<span class=\"fa fa-star\"></span><br>"  +
        "Description: " + this.description)
    }
  }

  //code that is executed when the website is initialized
  ngOnInit() {
    //create the map object using the leaflet syntax
    this.map2 = L.map('map2', {
      center: [36.21272, -81.67292],
      zoom: 13,
      renderer: L.canvas()
    })

    this.map2.addControl(GeoSearchControl({
      provider,
      style: 'bar',
    }))

    //adds the first (and currently only) map layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap_',
    }).addTo(this.map2)

    L.marker([36.215851,-81.684765], {title:"Appalachian State University", icon: this.greenDriveIcon}).addTo(this.map2)
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

    L.marker([36.10937607492409,-81.80272711107834], {title:"Briar Patch Campsite"}).addTo(this.map2)
    // .bindPopup('Briar Patch Campsite: <br> Elevation 4,396 ft')
    .bindPopup('Briar Patch Campsite:<br>' +
    "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
    "<span class='fa fa-star'></span>" +
    "<span class=\"fa fa-star checked\"></span>" +
    "<span class=\"fa fa-star\"></span>"  +
    "<span class=\"fa fa-star\"></span><br>"  +
    "Description: Super cool campsite off the beaten path. A few mile hike in with steep elevation gain "
    + "No one around for miles at night. Except for the bears");

    L.marker([36.120648650031036,-81.79391265388594], {title:"Refuge Campsite"}).addTo(this.map2)
    //36.120648650031036, -81.79391265388594
    // .bindPopup('Refuge Campsite: <br> Elevation 4,396 ft')
    .bindPopup('Refuge Campsite:<br>' +
    "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
    "<span class='fa fa-star'></span>" +
    "<span class=\"fa fa-star checked\"></span>" +
    "<span class=\"fa fa-star\"></span><br>"  +
    "Description: Not going to lie here, did get pretty scared at night. There were a lot of owls hooting and no one else around.");

    setTimeout(() => {
      this.map2.invalidateSize();
    }, 0);
  }
}
