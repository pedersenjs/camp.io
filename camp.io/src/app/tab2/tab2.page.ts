import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { NgForm } from '@angular/forms';
import * as L from "leaflet"
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
  //global location name variable
  locationname = "user input";
  constructor() {}

  //https://stackoverflow.com/questions/47529327/angular-4-get-input-value
  // onKey(event) {
  //   this.xinputValue = event.target.value;
  //   console.log(this.xinputValue);
  //   this.yinputValue = event.target.value;
  //   console.log(this.yinputValue);

  // }

  //This code below is to add a new location maker
  //This link helped guide some parts, has useful tips https://stackoverflow.com/questions/41139546/angular2-ngsubmit-not-working
  addLocation(form: NgForm) {
    //code to get input from the form and store it in variables 
    this.xinputValue = form.value["x-coordinate"];
    this.yinputValue = form.value["y-coordinate"];
    this.locationname = form.value.name;
    //Code to actually add the marker
    L.marker([this.xinputValue,this.yinputValue]).addTo(this.map2)
    .bindPopup(this.locationname)//36.230833,-81.676111
  }

  //code that is executed when the website is initialized
  ngOnInit() {
    
    //create the map object using the leaflet syntax
    this.map2 = L.map('map2', {
      center: [ 36.21272,-81.67292 ],
      zoom: 13,
      renderer: L.canvas()
    })

    //adds the first (and currently only) map layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap_',
    }).addTo(this.map2)

    //adds the base marker to the map
    L.marker([36.21272,-81.67292]).addTo(this.map2)
    .bindPopup('Appalachian State University')

    setTimeout(() => {
      this.map2.invalidateSize();
    }, 0);
  }
}
