import { Component } from '@angular/core';
//import { FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';
import * as L from "leaflet";
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { GeoSearchControl } from 'leaflet-geosearch';
import { PhotoService } from '../services/photo.service';
import 'leaflet.locatecontrol';

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
  freeOrPaid="";
  driveOrHike="";
  service = 0;
  provider = "";

  restroomsCheck: boolean = false;
  grillsCheck: boolean = false;
  tablesCheck: boolean = false;
  showersCheck: boolean = false;
  trashcansCheck: boolean = false;

  bearsCheck: boolean = false;
  insectsCheck: boolean = false;
  terrainCheck: boolean = false;
  fireCheck: boolean = false;
  floodingCheck: boolean = false;

  restrooms = null;
  grills = null;
  tables = null;
  showers = null;
  trashcans = null;

  bears = null;
  insects = null;
  terrain = null;
  fire = null;
  flooding = null;

  constructor(public photoService: PhotoService) { }

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

  isVisible = false;

  addPhotoToGallery(){
    this.photoService.addNewToGallery();
    alert('Adding photo to submission!');
  }

  //This code below is to add a new location maker
  //This link helped guide some parts, has useful tips https://stackoverflow.com/questions/41139546/angular2-ngsubmit-not-working
  addLocation(form: NgForm) {
    //code to get input from the form and store it in variables
    this.xinputValue = parseFloat(document.getElementById('lat').getAttribute('value'));
    this.yinputValue = parseFloat(document.getElementById('lon').getAttribute('value'));
    this.locationname = form.value.name;
    this.rating = form.value.rating;
    this.description=form.value.description;
    this.freeOrPaid = form.controls['paidOrFree'].value;
    this.driveOrHike = form.controls['hikeOrDrive'].value;
    this.service = form.value.service;
    this.provider = form.controls['provider'].value;

    let amenities = '';
    if (this.restroomsCheck) {this.restrooms = 'restrooms';
                           amenities += this.restrooms;}
    if (this.grillsCheck) {this.grills = 'grills';
                           amenities += ', ' + this.grills;}
    if (this.tablesCheck) {this.tables = 'tables';
                           amenities += ', ' + this.tables;}
    if (this.showersCheck) {this.showers = 'showers';
                           amenities += ', ' + this.showers;}
    if (this.trashcansCheck) {this.trashcans = 'trashcans';
                           amenities += ', ' + this.trashcans;}

    let hazards = '';
    if (this.bearsCheck) {this.bears = 'bears';
                           hazards += this.bears;}
    if (this.insectsCheck) {this.insects = 'insects';
                           hazards += ', ' + this.insects;}
    if (this.terrainCheck) {this.terrain = 'terrain';
                           hazards += ', ' + this.terrain;}
    if (this.fireCheck) {this.fire = 'fire risk';
                           hazards += ', ' + this.fire;}
    if (this.floodingCheck) {this.flooding = 'flooding';
                           hazards += ', ' + this.flooding;}

    var iconVariable = this.greenDriveIcon;
    if (this.driveOrHike == "Hike"){
      if (this.freeOrPaid == "Free"){
        iconVariable = this.greenBackIcon;
      } else {
        iconVariable = this.redBackIcon;
      }
    }
    else {
      if (this.freeOrPaid == "Free"){
        iconVariable = this.greenDriveIcon;
      } else {
        iconVariable = this.redDriveIcon;
      }
    }

    if (this.rating == 1) {
      L.marker([this.xinputValue, this.yinputValue],{title:this.locationname, icon: iconVariable}).addTo(this.map2)
        .bindPopup(this.locationname + " -<br>" +
        "Rating: " + "<span class=\"fa fa-star checked\"></span><br>"  +
        "Cell Service " + "<span class=\"fa fa-signal\"></span>: " + this.service + " Bars " + this.provider + "<br>" +
        // "Description: " + this.description + "<img src='" + this.photo+"' />") //just want it to work but it wont
        "Amenities: " + amenities + "<br>" +
        "Hazards: " + hazards + "<br>" +
        "Description: " + this.description)
      alert("Location Pin Added Successfully!");
      this.isVisible = true;
      document.getElementById('map2').scrollIntoView();
      this.map2.flyTo(new L.LatLng(this.xinputValue, this.yinputValue), 15);
    }
    else if (this.rating == 2) {
      L.marker([this.xinputValue, this.yinputValue],{title:this.locationname, icon: iconVariable}).addTo(this.map2)
        .bindPopup(this.locationname + " -<br>" +
        "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
        "<span class=\"fa fa-star checked \"></span><br>" +
        "Cell Service " + "<span class=\"fa fa-signal\"></span>: " + this.service + " Bars " + this.provider + "<br>" +
        "Amenities: " + amenities + "<br>" +
        "Hazards: " + hazards + "<br>" +
        "Description: " + this.description)
      alert("Location Pin Added Successfully!");
      this.isVisible = true;
      document.getElementById('map2').scrollIntoView();
      this.map2.flyTo(new L.LatLng(this.xinputValue, this.yinputValue), 15);
    }
    else if (this.rating == 3) {
      L.marker([this.xinputValue, this.yinputValue],{title:this.locationname, icon: iconVariable}).addTo(this.map2)
        .bindPopup(this.locationname + " -<br>" +
        "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
        "<span class=\"fa fa-star checked \"></span>" +
        "<span class=\"fa fa-star\"></span><br>"  +
        "Cell Service " + "<span class=\"fa fa-signal\"></span>: " + this.service + " Bars " + this.provider + "<br>" +
        "Amenities: " + amenities + "<br>" +
        "Hazards: " + hazards + "<br>" +
        "Description: " + this.description)
      alert("Location Pin Added Successfully!");
      this.isVisible = true;
      document.getElementById('map2').scrollIntoView();
      this.map2.flyTo(new L.LatLng(this.xinputValue, this.yinputValue), 15);
    }
    else if (this.rating == 4) {
      L.marker([this.xinputValue, this.yinputValue],{title:this.locationname, icon: iconVariable}).addTo(this.map2)
        .bindPopup(this.locationname + " -<br>" +
        "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
        "<span class=\"fa fa-star checked \"></span>" +
        "<span class=\"fa fa-star checked\"></span>" +
        "<span class=\"fa fa-star\"></span><br>"  +
        "Cell Service " + "<span class=\"fa fa-signal\"></span>: " + this.service + " Bars " + this.provider + "<br>" +
        "Amenities: " + amenities + "<br>" +
        "Hazards: " + hazards + "<br>" +
        "Description: " + this.description)
      alert("Location Pin Added Successfully!");
      this.isVisible = true;
      document.getElementById('map2').scrollIntoView();
      this.map2.flyTo(new L.LatLng(this.xinputValue, this.yinputValue), 15);
    }
    else if (this.rating == 5) {
      L.marker([this.xinputValue, this.yinputValue],{title:this.locationname, icon: iconVariable}).addTo(this.map2)
        .bindPopup(this.locationname + " -<br>" +
        "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
        "<span class=\"fa fa-star checked \"></span>" +
        "<span class=\"fa fa-star checked\"></span>" +
        "<span class=\"fa fa-star\"></span>"  +
        "<span class=\"fa fa-star\"></span><br>"  +
        "Cell Service " + "<span class=\"fa fa-signal\"></span>: " + this.service + " Bars " + this.provider + "<br>" +
        "Amenities: " + amenities + "<br>" +
        "Hazards: " + hazards + "<br>" +
        "Description: " + this.description)
      alert("Location Pin Added Successfully!");
      this.isVisible = true;
      document.getElementById('map2').scrollIntoView();
      this.map2.flyTo(new L.LatLng(this.xinputValue, this.yinputValue), 15);
    }

    this.clearHTML();
    document.getElementById('displayName').innerHTML += this.locationname;
    document.getElementById('displayX').innerHTML += this.xinputValue;
    document.getElementById('displayY').innerHTML += this.yinputValue;
    document.getElementById('displayRating').innerHTML += this.rating;
    document.getElementById('displayFreePaid').innerHTML += this.freeOrPaid;
    document.getElementById('displayDriveHike').innerHTML += this.driveOrHike;
    if (this.service > 0 && this.service <= 5)
      document.getElementById('displayService').innerHTML += (this.service + " Bars " + this.provider);
    document.getElementById('displayAmenities').innerHTML += amenities;
    document.getElementById('displayHazards').innerHTML += hazards;
    document.getElementById('displayDesc').innerHTML += this.description;
  }

  //code that is executed when the website is initialized
  ngOnInit() {
    this.photoService.loadSaved();

    //create the map object using the leaflet syntax
    this.map2 = L.map('map2', {
      center: [37.090240, -95.712891],
      zoom: 3,
      renderer: L.canvas()
    })

    this.map2.addControl(GeoSearchControl({
      provider,
      style: 'bar',
    }))

    this.map2.on("contextmenu", function (event) {
      alert("Autofilled Selected Coordinates: (" + event.latlng.lat.toPrecision(8) + ", " + event.latlng.lng.toPrecision(8) + ")");
      document.getElementById('lat').setAttribute("value", event.latlng.lat.toPrecision(8));
      document.getElementById('lon').setAttribute("value", event.latlng.lng.toPrecision(8));
    });

    L.control.locate().addTo(this.map2);

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

    setTimeout(() => {
      this.map2.invalidateSize();
    }, 0);
  }

  clearHTML() {
    document.getElementById('displayName').innerHTML = "Name: ";
    document.getElementById('displayX').innerHTML = "X-Coordinate: ";
    document.getElementById('displayY').innerHTML = "Y-Coordinate: ";
    document.getElementById('displayRating').innerHTML = "Rating: ";
    document.getElementById('displayFreePaid').innerHTML = "Free or Paid: ";
    document.getElementById('displayDriveHike').innerHTML = "Drive or Hike: ";
    document.getElementById('displayService').innerHTML = "Cell Service: ";
    document.getElementById('displayAmenities').innerHTML = "Amenities: "
    document.getElementById('displayHazards').innerHTML = "Hazards: "
    document.getElementById('displayDesc').innerHTML = "Description: ";
  }
}
