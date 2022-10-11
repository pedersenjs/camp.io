import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgForm } from '@angular/forms';
import * as L from "leaflet"
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  map2: L.Map
  xinputValue = 0;
  yinputValue = 0;
  rating = 0;
  locationname = "user input";
  description="";
  constructor() { }

  //https://stackoverflow.com/questions/47529327/angular-4-get-input-value
  onKey(event) {
    this.xinputValue = event.target.value;
    console.log(this.xinputValue);
    this.yinputValue = event.target.value;
    console.log(this.yinputValue);

  }

  //Add new marker
  //This link helped guide some parts, has useful tips https://stackoverflow.com/questions/41139546/angular2-ngsubmit-not-working
  addLocation(form: NgForm) {
    this.xinputValue = form.value["x-coordinate"];
    // console.log(this.xinputValue);
    this.yinputValue = form.value["y-coordinate"];
    // console.log(this.yinputValue);
    console.log(this.yinputValue);
    this.locationname = form.value.name;
    this.rating = form.value.rating;
    this.description=form.value.description;
    // if (this.locationname == ""){
    //   this.locationname = "user input";
    // }
    if (this.rating == 1) {
      L.marker([this.xinputValue, this.yinputValue]).addTo(this.map2)
        .bindPopup(this.locationname + "<br>" +
        "Rating: " + "<span class=\"fa fa-star checked\"></span><br>"  +
        "Description: " + this.description)
        
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

  ngOnInit() {
    this.map2 = L.map('map2', {
      center: [36.21272, -81.67292],
      zoom: 13,
      renderer: L.canvas()
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map2)

    L.marker([36.21272, -81.67292]).addTo(this.map2)
      .bindPopup('Appalachian State University ')

    setTimeout(() => {
      this.map2.invalidateSize();
    }, 0);
  }
}
