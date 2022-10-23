# Camp.io
Jenna Pedersen and Patrick Turner<br>
Type of your project: Mobile app (Android and iOS)<br>
Domain of your project: Recreation<br>

Camp.io will provide a robust system for users to track campsites they have been to as well as discover new campsites. Users will be able to add photos and ratings of a location they have camped at, and other users will be able to comment on the review. Users will also be able to add campsites to a list. Users will be able to save a campsite locally on their device, or make it public for all users to see. 


## Feature 1- Creating a welcome page for the website
![image](https://user-images.githubusercontent.com/89262517/188728280-b5eb88de-5c0f-461b-b55b-a0c74333f4ae.png)
###### Image of how the website looks after implementing this feature
We chose to use the Ionic webframework for this website. After cloning the empty repository folder, we created an Ionic project using the command line code: 
```
ionic start camp.io tabs --type=angular --capacitor
```
And now we have our ionic project! We had to download some dependencies, which we used by running the command
```
npm install @capacitor/camera @capacitor/storage @capacitor/filesystem @capacitor/preferences
 npm install @ionic/pwa-elements
```

After we had our packages and our project all set up, we navigated to src/app/tab1/tab1.page.html and changed the title from Tab 1 to Camp.io. Then we removed the other two tabs, but left the paths for the other two tabs in in case we need them for future features. We also added code to the html file to have a background image and get remove some unnecessary components. 

We updated our tab1 background and styles in the tab1.page.scss file by adding this code 
```
ion-content {
  --background: url('forestbackground.jpg') no-repeat center center/ cover;
}

mark {
  background-color: white;
  color: black;
}
```
This let us add a background image, as well as the format for highlighting the title of our website. 


## Feature 2- Embedding a map into the website
![image](https://user-images.githubusercontent.com/89262517/191318480-6b65dede-db40-452a-8002-a429a00329e2.png)
###### Image of one of the error messages we ran into along the way
This week was full of a lot of troubleshooting as we worked on embedding a map using the Google maps api (https://developers.google.com/maps/apis-by-platform 
). Above is a screenshot of an error that took a couple hours of our time to figure out. We had a good guess about what was causing the error based off the error message, but it involved us having to mess with settings on our google developer account and sign up for an API license. We also had to reformat the URL that we were using in our code, to include the proper API key like so:
```
<iframe width="600" height="600"
          style="border:0"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=[API KEY]&q=Yellowstone+National+Park+WY"
          allowfullscreen>
  </iframe>
```
This code led us to have a working embedded map, as shown below. 
![image](https://user-images.githubusercontent.com/89262517/191142558-4450f382-b8a1-4340-bbdd-96ad6b572ed0.png)
###### Image of how the website looks after originally implementing this feature
Once we had this map, we added the other tabs back into the website as shown below. ![image](https://user-images.githubusercontent.com/89262517/191325352-0437e6d4-8134-4790-bfe7-bbd0acaa8eda.png) 
###### Image of all three tabs on our website
We then focused on the tab to add a location. We added in a form to input a location, using the code shown below.
```
  <form>
    <mark><label for="location">Location:</label></mark><br>
    <input type="text" id="location" name="location"><br>
  </form>
 ```
 ![image](https://user-images.githubusercontent.com/89262517/191326359-6955fb1f-39d5-4497-b6cd-cd719b90234c.png)
###### Image of the Add Location form, with the location Boone filled in
It currently does not do anything, but it lays the framework for our third feature. We also updated the map embedded on the page to display a cluster of campsites located near Boone, to provide an example of how we hope our map to look.
![image](https://user-images.githubusercontent.com/89262517/191325914-1aa47cbb-f8a3-493c-bb7f-e5cce01da53d.png)
###### Image of the new map on the Add Location tab
Once we had our map, we were very excited to begin adding locations. The map feature was way easier to implement than we expected- or so we thought. After another hour of searching and looking around, we realized that Google does not currently have functionality to display multiple locations of our choosing on the map at once. Because of this, we went and began searching for new libraries that would help us embed a map into our website. We looked at this website (https://wiki.openstreetmap.org/wiki/Software_libraries#Web_maps) whick had a large list of libraries to pick from. We examined a few and decided on using Leaflet/ openstreet map (https://leafletjs.com/index.html). 
We found a few tutorials on how to implement the leaflet.js library and began working with them. 
We added the code below to our tab 1, as well as installed leaflet files onto our project folder. 
```
  <html>
    <div id="map" style="width:900px; height:580px;"></div>
    <script>
      var map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
    </script>
  </html>
```
We then ran our code and.... no map is being displayed. We have spent a lot of time troubleshooting this issue and are not currently sure how to fix it. 

## Feature 2 Part 2- Embedding a map into the website
![image](https://user-images.githubusercontent.com/89262517/192602383-5467bb65-15a2-448f-a7a3-0232fb6dd4f7.png)
###### Website with the working embedded map
Progressing from where we ended last week, trying to implement the Leaflet javascript library for OpenStreetMaps on the site, we started by adding a map object onto the html page for tab 1. This required linking the javascript and css files in the ionic header and adding a div with the id of map in the ionic content body.
```
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title>
      Camp.io
    </ion-title>
  </ion-toolbar>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
  crossorigin=""/>
  <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js"
integrity="sha512-BB3hKbKWOc9Ez/TAwyWxNXeoV9c1v6FIeYiBieIWkpLjauysF18NzgR1MBNBXf8/KABdlkX68nAhlwcDFLGPCQ=="
  crossorigin=""></script>
</ion-header>
<ion-content [fullscreen]="true" padding class="background">
  <div id="map"></div>
</ion-content>
```
This will create an html div object on the page, but it will not display until the javascript code is implemented in the tab 1 typescript file. This will require that all leaflet packages are imported as an object which can then be called to create a map object, give it custom options like center and zoom, add markers, and specify how the map tiles are rendered. 
```
import * as L from "leaflet"
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
    .bindPopup('Appalachian State University: <br> Elevation 3,333 ft')
    L.marker([36.230833,-81.676111]).addTo(this.map)
    .bindPopup('Howard\'s Knob: <br> Elevation 4,396 ft')
    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
  }
}
```
For the purposes of our project and demonstrating the initial map implementation we added two markers at the coordinates for Appalachian State University and Howard’s Knob. The map was centered in Boone and shows both markers in the view on initialization.
Clicking on the markers will show a popup box detailing the title of the place and the elevation. These are just placeholder values for now, but show that we can customize the boxes to detail even more information about a coordinate spot, which will be very useful for campsite details.
Importantly, css styling for the map objects created can be provided in the scss file for tab 1, for which we gave a simple height percentage to show the background, but can also be manipulated to have other stylings.
```
#map {
  min-height: 80%;
}
```
Local styling is done on each respective page’s scss file, but the global scss file for the application MUST have an import statement for Leaflet in order for the stylings to work properly.
```
/* Optional CSS utils that can be commented out */
@import "~@ionic/angular/css/padding.css";
@import "~@ionic/angular/css/float-elements.css";
@import "~@ionic/angular/css/text-alignment.css";
@import "~@ionic/angular/css/text-transformation.css";
@import "~@ionic/angular/css/flex-utils.css";
@import "~leaflet/dist/leaflet.css"
```
Link to Leaflet JavaScript library for embedding Openstreetmaps:
https://leafletjs.com/ 

## Feature 3- Adding location markers based off of user input
Below is the code that is in our TypeScript document to add a location to the map. It corresponds to the similarly named fields in the HTML form.  More fields can be added by copying the syntax. Form.value.[“the name of the field”] has to be used if there is a special character in the name, otherwise form.value.fieldname can be used to access it. 
```
  addLocation(form: NgForm) {
    this.xinputValue = form.value["x-coordinate"];
    this.yinputValue = form.value["y-coordinate"];
    this.locationname = form.value.name;
 
    L.marker([this.xinputValue,this.yinputValue]).addTo(this.map2)
    .bindPopup(this.locationname)//36.230833,-81.676111
  }
  ```
The HTML code that creates the form, and relates to the TS code that says form.value, is show below. Input items can easily be added to take in more user information, which is what we plan on working on this week. 
```
  <form #locationForm="ngForm" (ngSubmit)="addLocation(locationForm)">
    <mark><label for="location">X-coordinate:</label></mark>
    <input type="text" name="x-coordinate" id="x-coordinate" ngModel><br>
    <mark><label for="location">Y-coordinate:</label></mark>
    <input type="text" name="y-coordinate" id="coordinate" ngModel><br>
    <mark><label for="name">Name:</label></mark>
    <input type="text" name="name" id="coordinate" ngModel><br>
    <button type="submit">Add Location</button>
  </form>
  ```
The search functionality is still being worked on this week, along with other visual layers for the maps, but some CSS styling was done for the pages we’re working on to make them easier to use and look at.
```
form {
  margin: 0px auto;
  color: rgb(154,55,247);
  background-color: #0B1121;
  width: 20%;
  padding: 10px;
  border: 3px solid rgb(154,55,247);
  border-radius: 25px;
}
	p {
  margin: 10px auto;
  color: #3AFFA1;
  background-color: #0B1121;
  width: 80%;
  padding: 10px;
  border: 3px solid #3AFFA1;
  border-radius: 25px;
}
#map {
  margin: 0 auto;
  min-height: 80%;
  width: 80%;
  border: 5px solid #3AFFA1;
  border-radius: 25px;
}
```
The code here provides some color matching with the background images on each page so that elements blend in better visually with their respective backgrounds, yet still stand out from the background enough so that they are usable. Light curved borders were also provided so that the elements have some symmetry with the topographical elements in the background images too.

## Weekly Update number 5
For the search bar the geosearch-leaflet package had to be installed using npm install –save geosearch-leaflet. Then, the package had to be updated to remove google related files as they caused compiler errors. After installation and correction to the errors the package must be imported into the typescript files and added to the leaflet map objects.

![image](https://user-images.githubusercontent.com/89262517/195190377-7939a1f8-1e89-4428-acca-c35102d682e5.png)
###### Image of the search bar feature
```
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { GeoSearchControl } from 'leaflet-geosearch';
const provider = new OpenStreetMapProvider();
```
Here we have our provider for the location information defined as well as OpenStreetMaps which also provide the tile renders for our maps.
```
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
```
In the init function for the map code has been added to add the search bar control layer on top of the existing map using the established provider for the auto-fill data. 
```
@import "~leaflet/dist/leaflet.css";
@import "~leaflet-geosearch/dist/geosearch.css";
```
Styling for the search bar is provided by the global.scss file which requires css imports of the dependency css files. These files can be edited and rebuilt with the project to change the styling, which needed some edits to show the search bar correctly on dark mode devices.

![image](https://user-images.githubusercontent.com/89262517/195190509-e4f34461-794a-4643-8c27-ae13dfe0421b.png)
###### Image of the review feature including a rating and a description
We also added code to insert a description and a rating into the review, as shown in the HTML code below. 
```
<label for="description">Description:</label><br>
    <textarea type="text" name="description"  cols="30" rows="5" id="coordinate" ngModel></textarea><br>
   <label for="rating">Rating Out of 5:  </label>
    <!-- <p> Message is: <span id = "display_message"></span> </p> -->
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span>
    <span class="fa fa-star"></span><br>
    <input type="text" name="rating" id="coordinate" onkeypress="showMessage()" ngModel><br>
 ```
Below is the Typescript code. The If statements affect how many stars are displayed on the tab for the rating. Not all if statements are show, but it goes until five out of five stars. 
```
 this.locationname = form.value.name;
    this.rating = form.value.rating;
    this.description=form.value.description;
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
```
