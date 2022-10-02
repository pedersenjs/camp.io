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
  map2: L.Map
  xinputValue = 0;
  yinputValue = 0;
  locationname = "user input";
  constructor() {}

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
    // if (this.locationname == ""){
    //   this.locationname = "user input";
    // }

    L.marker([this.xinputValue,this.yinputValue]).addTo(this.map2)
    .bindPopup(this.locationname)//36.230833,-81.676111
  }

  ngOnInit() {
    this.map2 = L.map('map2', {
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
