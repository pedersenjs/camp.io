# Camp.io
## Table of Contents
1. [Project Overview](https://github.com/pedersenjs/camp.io/blob/main/README.md#project-overview)
2. [Installation Guide](https://github.com/pedersenjs/camp.io/blob/main/README.md#installation-guide)
3. [Project Files Overview](https://github.com/pedersenjs/camp.io/blob/main/README.md#project-files-overview)
4. [Feature Replication Guide](https://github.com/pedersenjs/camp.io/blob/main/README.md#feature-replication-guide)

## Project Overview
Jenna Pedersen and Patrick Turner<br>
Type of your project: Mobile app (Android and iOS)<br>
Domain of your project: Recreation<br>

Camp.io will provide a robust system for users to track campsites they have been to as well as discover new campsites. Users will be able to add photos and ratings of a location they have camped at, and other users will be able to comment on the review. Users will also be able to add campsites to a list. Users will be able to save a campsite locally on their device, or make it public for all users to see. 

## Installation Guide
### Reqirements
 - You will need Node.js for interacting with the Ionic tool system in the project folder. The newest version can be installed here: https://nodejs.org/en/
 - You will need a code editor for running and viewing the code. We used Visual Studio Code, but other IDEs are accepted. Visual Studio Code can be installed here: https://code.visualstudio.com/
 - For building and exporting the code to Android devices Android Studio is required. Android Studio can be installed here: https://developer.android.com/studio/
### Install Steps (Desktop)
1. In your IDE of choice install the Ionic CLI in the terminal: 
	
	```npm install -g @ionic/cli native-run cordova-res```
2. Google Maps packages are depricated and require this update to run properly:
	
	```npm install --save @types/google.maps```
3. Once the required packages are updated/installed, navigate to the \camp.io folder and run the following:
	
	```ionic serve```
	
	**You may need to change your system settings to allow for script execution.*
	
	**Answer yes to any additional Ionic package changes in this stage.*
4. The app should now be running in your web browser as a web application. From here you can develop the code and it will recompile live.

![Screenshot 2022-12-07 211916](https://user-images.githubusercontent.com/89099652/206340450-8d4a7108-2ce5-4cec-ab5f-90a670b04d90.png)
### Building for Mobile (Android)
1. After installing the Ionic CLI and running the app, it can be built by running the following in the IDE terminal:

	```ionic build```
2. The project folder for Android already exists, so any build changes or updates must be copied and synced to the folder:

	```ionic cap copy```
	
	```ionic cap sync```
3. The project can now be opened in Anroid Studio where it can be built and exported as an APK file. Run the following in the IDE terminal:

	```ionic cap open android```
4. In Android Studio the Android SDK 32 Platform will need to be accepted and installed using the SDK manager at the top right:

![Screenshot 2022-12-07 214907](https://user-images.githubusercontent.com/89099652/206344019-7499c98c-d33f-430e-a4aa-cb2055314015.png)

5. Now access the build menu and build an APK or signed app bundle which you can then transfer to a mobile device and install:

![Screenshot 2022-12-07 215136](https://user-images.githubusercontent.com/89099652/206344382-d24c9886-899d-4c42-8b6e-0b3a62cd847e.png)
	
**Output folder will be under the \camp.io\android\app\build\outputs\apk\debug directory*

## Project Files Overview
- Within the project directory there are several subdirectories:
- Platform directories include:
	- /ios contains the iOS platform files
	- /android contains the Android platform files
	- /www contains the Web platform files
- Package directories include:
	- /node_modules contains npm packages required for the app
		- Run ```npm install``` to update packages
	- /.angular contains Angular cache files
- The project files are all contained in the /src directory:
	- /app contains app generation files:
		- /tab1 contains files for the tab1 page of the app
		- /tab2 contains files for the tab2 page of the app
		- /tab3 contains files for the tab3 page of the app
		- /tabs contains global files for the app tabs
		- /services contains app service files like the photo/camera service
	- /assets contains app image and icon files
	- In the /src directory the global html, scss, and ts files can be found as well.

## Feature Replication Guide
### Website Homepage
- The app homepage code is handled in the tab1 directory in the .page .html, .scss, and .ts files.
	- html handles the structure, scss handles the styling, and ts handles the scripting for the page.
- After running the app using ```ionic serve``` you can make any edits to these pages and they will display on the main page.
- For example, below is what the first iteration of the application page looked like:

![image](https://user-images.githubusercontent.com/89262517/188728280-b5eb88de-5c0f-461b-b55b-a0c74333f4ae.png)

### Styling Website
- All styling for the app is handled in each tab page's respective .scss file under their directory.
- Some global styling is handled in the global.scss file in the parent app directory and the tabs .scss file.
- This is how styling was done for our map and legend objects on each page:
```
	#map {
	  margin: 0 auto;
	  min-height: 80%;
	  width: 98%;
	  border: 5px solid #3AFFA1;
	  border-radius: 25px;
	}

	.legend {
	  display: grid;
	  grid-template-columns: auto auto auto auto;
	  margin: 2% auto;
	  color: #3AFFA1;
	  background-color: #0B1121;
	  width: 60%;
	  padding: 10px;
	  border: 3px solid #3AFFA1;
	  border-radius: 25px;
	  margin-left: auto;
	  margin-right: 100px;
	}

	.pins {
	  width: 25px;
	  height: 35px;
	  margin: 5px;
	}
```

### Embedding Map in Webpage
- To embed a map into the page we initially used the Google Maps API and an html iframe object to display the map:

![image](https://user-images.githubusercontent.com/89262517/191142558-4450f382-b8a1-4340-bbdd-96ad6b572ed0.png)

- Once we realized that Google API would not suit our needs for this project we switched to the Leaflet JS library. This required us to install leaflet as a npm package using ```npm install --save leaflet``` and importing it to the top of our ts files like below:
	
	```import * as L from "leaflet"```

- After installing Leaflet a div map object is added to the html page and then the scripting for it is provided in the ts file. 

	*This is the html file*
	
	```
	<div id="map"></div>
	```
	
	*This is the ts file*
	
	```
		this.map = L.map('map', {
	      center: [37.090240, -95.712891],
	      zoom: 3,
	      renderer: L.canvas(),
	      //Attribution control for removing attribution data:
	      // attributionControl: false
	    })
	```
- This code will display a map like this:

![image](https://user-images.githubusercontent.com/89262517/192602383-5467bb65-15a2-448f-a7a3-0232fb6dd4f7.png)

### Adding Location Markers to Map

### Adding Search Bar to Map

### Creating Form to Take User Input 

### Creating Persistant Markers


### Feature 3- Adding location markers based off of user input
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

### Weekly Update number 5
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
