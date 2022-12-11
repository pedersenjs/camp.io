# Camp.io
## Table of Contents
1. [Project Overview](https://github.com/pedersenjs/camp.io/blob/main/README.md#project-overview)
2. [Installation Guide](https://github.com/pedersenjs/camp.io/blob/main/README.md#installation-guide)
3. [Project Files Overview](https://github.com/pedersenjs/camp.io/blob/main/README.md#project-files-overview)
4. [Feature Replication Guide](https://github.com/pedersenjs/camp.io/blob/main/README.md#feature-replication-guide)

## Project Overview
Jenna Pedersen and Patrick Turner<br>
Type of your project: Mobile app (Android and iOS) and Website<br>
Domain of your project: Travel and Recreation<br>

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

### Install for Mobile (Android) 
![image](https://user-images.githubusercontent.com/89262517/206914718-41292c39-7160-4f21-b568-4806908e923d.png)

###### Our app is also published to the Android App Store
1. Open the Google Play Store and search camp.io <br>
![image](https://user-images.githubusercontent.com/89262517/206914924-4e521678-67bb-4b31-b26f-53ed6fc8a891.png)<br>
2. Select the app with our icon (there is another app called campio, be careful not to mix these two apps up)<br>
![image](https://user-images.githubusercontent.com/89262517/206914957-77df5939-dbb0-43ca-8039-ca1891b32739.png)<br>
3. Tap install on the app to install it on your device- Note that due to regulations surrounding publishing, there may be delays in updating this app compared to if the application is installed using the other methods listed above<br>
![image](https://user-images.githubusercontent.com/89262517/206914971-e0404d16-1180-4ea7-9256-3878cce578c0.png)<br>
4. Open the app and enjoy!<br>
![image](https://user-images.githubusercontent.com/89262517/206915006-77e8dd4a-2702-4079-b3b3-ed32099b7b8f.png)<br>

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
		- /tab1 contains files for the tab1 page (home page) of the app
		- /tab2 contains files for the tab2 page (Add Location page) of the app
		- /tab3 contains files for the tab3 page (Lists page) of the app
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
- Leaflet JS has built in support for adding location markers. Default markers are blue and look like the pin on the map above.
- For the purposes of our application we have defined four custom markers in the code below:

```
	greenBackIcon = L.icon({
	    iconUrl: '../../assets/green_hex1.png',
	    shadowUrl: '../../assets/markers_shadow.png',
	    iconSize: [ 30, 45 ],
	    iconAnchor: [ 17, 42 ],
	    popupAnchor: [ 1, -32 ],
	    shadowAnchor: [ 10, 12 ],
	    shadowSize: [ 36, 16 ]
	  });
```

- The pins we have defined include green and red and circle and hexagon pins, defining free and paid, and drive-to or hike-to campsites respectively.

![Screenshot 2022-12-08 075324](https://user-images.githubusercontent.com/89099652/206451624-f360d29e-38d3-4cbc-b1a8-ac5ea2f49332.png)

- Once icons are defined markers can be added to the map like so:

```
	L.marker([36.215851,-81.684765], {title:"Appalachian State University", icon: this.greenDriveIcon}).addTo(this.map)
	    .bindPopup('Appalachian State University -<br>' +
	    "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
	    "<span class='fa fa-star'></span>" +
	    "<span class=\"fa fa-star checked\"></span>" +
	    "<span class=\"fa fa-star\"></span>"  +
	    "<span class=\"fa fa-star\"></span><br>"  +
	    "Description: This is our university that we attend. I one time took a nap on Sanford Mall for a few hours between classes."
	    + " I had a dream Yosef threw me a birthday party but other than that it was nice. would come back");
```
- Any information can be added to the marker in the .bindPopup() parentheses. It can be added in simple HTML format. We have since added in more information to the reviews, like cell service, amenities, and potential hazards, and it now looks like this:
```
	L.marker([this.xinputValue, this.yinputValue],{title:this.locationname, icon: iconVariable}).addTo(this.map2)
	    .bindPopup(this.locationname + " -<br>" +
	    "Rating: " + "<span class=\"fa fa-star checked\"></span>" +
	    "<span class=\"fa fa-star checked \"></span>" +
	    "<span class=\"fa fa-star checked\"></span>" +
	    "<span class=\"fa fa-star\"></span><br>"  +
	    "Cell Service " + "<span class=\"fa fa-signal\"></span>: " + this.service + " Bars " + this.provider + "<br>" +
	    "Amenities: " + this.amenities + "<br>" +
	    "Hazards: " + this.hazards + "<br>" +
	    "Description: " + this.description);
```

### Adding Search Bar to Map
- Search bar functionality is not native to Leafet by default. Leaflet has multiple plugins which can handle search functionality, but we installed Leaflet-Geosearch:

	```npm install --save leaflet-geosearch```
- After installing the package the code needs to be imported in the typescript and global scss files to handle scripting and styling:

**This is the page.ts file import*
```
	import { GeoSearchControl } from 'leaflet-geosearch';
```

**This is the global.scss file*
```
	@import "~leaflet-geosearch/dist/geosearch.css";
```
- Lastly, under the original map definition in the .ts file add the search control to the map using this code. The search bar should now appear on the map (there may be style differences):

```
	    this.map.addControl(GeoSearchControl({
	      provider,
	      style: 'bar',
	    }))
```
![Screenshot 2022-12-08 081045](https://user-images.githubusercontent.com/89099652/206455035-01fdc603-3d84-439a-9e80-59f85e913070.png)

### Creating Form to Take User Input 
- The form page contains the majority of the code for the form and the logic for handling adding pins to the form map.
- First, the form is defined in the html page for tab2:

```
	    <form #locationForm="ngForm" (ngSubmit)="addLocation(locationForm)">
	      <fieldset>
		<legend>Required</legend>
		<label for="name">Name: </label>
		<input type="text" name="name" id="name" ngModel/><br>
		</fieldset>
		<button type="submit">Complete Review</button>
	    </form>
```
- The code ```` (ngSubmit)="addLocation(locationForm)" ```` means that when the Complete Review button, with type "submit" is submitted, the form data will be passed to a funciton in the tab2.ts file called addLocation()
- Once the form with its labels and inputs are laid out, the tab2.ts file will get the information from each variable in the form. There is different syntax depending on the type of the variable and the method it is being input into the form (IE a textfield versus a radio button). This is the code in the tab2.ts file to parse that information into variables:

```
	    this.xinputValue = parseFloat(document.getElementById('lat').getAttribute('value'));
	    this.yinputValue = parseFloat(document.getElementById('lon').getAttribute('value'));
	    this.locationname = form.value.name;
	    this.rating = form.value.rating;
	    this.description=form.value.description;
	    this.freeOrPaid = form.controls['paidOrFree'].value;
	    this.driveOrHike = form.controls['hikeOrDrive'].value;
	    this.service = form.value.service;
	    this.provider = form.controls['provider'].value;
```
- The values are then handled differently as strings so that they can be added to the marker information as html code:

```
	    //code to add information to amenities variable    
	    if (this.restroomsCheck) {this.restrooms = 'restrooms';
				   this.amenities += this.restrooms;}
	    if (this.grillsCheck) {this.grills = 'grills';
				   this.amenities += ', ' + this.grills;}
	    if (this.tablesCheck) {this.tables = 'tables';
				   this.amenities += ', ' + this.tables;}
	    if (this.showersCheck) {this.showers = 'showers';
				   this.amenities += ', ' + this.showers;}
	    if (this.trashcansCheck) {this.trashcans = 'trashcans';
				   this.amenities += ', ' + this.trashcans;}

	    //code to add information to hazard variable    
	    if (this.bearsCheck) {this.bears = 'bears';
				   this.hazards += this.bears;}
	    if (this.insectsCheck) {this.insects = 'insects';
				   this.hazards += ', ' + this.insects;}
	    if (this.terrainCheck) {this.terrain = 'terrain';
				   this.hazards += ', ' + this.terrain;}
	    if (this.fireCheck) {this.fire = 'fire risk';
				   this.hazards += ', ' + this.fire;}
	    if (this.floodingCheck) {this.flooding = 'flooding';
				   this.hazards += ', ' + this.flooding;}

	    //code to select the proper icon marker for the campsite
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
```
- Then, based on what value was input for the rating the code picks an if statement which will display the appropriate amount of stars and add the pin to the map:

```
	    //Code to create review marker with proper number of stars based off the user rating
	    if (this.rating == 1) {
	      var marker = L.marker([this.xinputValue, this.yinputValue],{title:this.locationname, icon: iconVariable}).addTo(this.map2)
		// .bindPopup("<h1>"+this.locationname +"</h1>"+ " <br>" +
		.bindPopup("<h1>"+this.locationname +"</h1>"+ " <br>" +
		"Rating: " + "<span class=\"fa fa-star checked\"></span><br>"  +
		"Cell Service " + "<span class=\"fa fa-signal\"></span>: " + this.service + " Bars " + this.provider + "<br>" +
		"Amenities: " + this.amenities + "<br>" +
		"Hazards: " + this.hazards + "<br>" +
		"Description: " + this.description);
		this.saveMarkerToStorage(marker);
	      alert("Location Pin Added Successfully!");
	      this.isVisible = true;
	      document.getElementById('map2').scrollIntoView();
	      this.map2.flyTo(new L.LatLng(this.xinputValue, this.yinputValue), 15);
	    }
	    else if (this.rating == 2) {
```
![image](https://user-images.githubusercontent.com/89099652/206456612-cb725c42-28ec-4e07-88b5-b309669cbb84.png)

### Creating Persistent Markers
- When a marker is added to the location map using the form the marker is then also added to a list through the saveMarkerToStorage function:

```
	   var marker = L.marker([this.xinputValue, this.yinputValue],{title:this.locationname, icon: iconVariable}).addTo(this.map2)
		// .bindPopup("<h1>"+this.locationname +"</h1>"+ " <br>" +
		.bindPopup("<h1>"+this.locationname +"</h1>"+ " <br>" +
		"Rating: " + "<span class=\"fa fa-star checked\"></span><br>"  +
		"Cell Service " + "<span class=\"fa fa-signal\"></span>: " + this.service + " Bars " + this.provider + "<br>" +
		"Amenities: " + this.amenities + "<br>" +
		"Hazards: " + this.hazards + "<br>" +
		"Description: " + this.description);
		this.saveMarkerToStorage(marker);
```
- The function itself saves the properties of the marker to a list called sessionStorage.

```
	    //this function saves a marker to local storage so it remains persistant on the browser
	    saveMarkerToStorage(marker){
	      marker.feature = {"type": "Feature",
	      "properties": {
		  "name": this.locationname,
		  "description": this.description,
		  "popupContent": this.locationname + "<br>" +
		  "Rating: " + "<span class=\"fa fa-star checked\"></span><br>"  +
		  "Cell Service " + "<span class=\"fa fa-signal\"></span>: " + this.service + " " + this.provider + "<br>" +
		  "Amenities: " + this.amenities + "<br>" +
		  "Hazards: " + this.hazards + "<br>" +
		  "Description: " + this.description
	      },
	      "geometry": {
		  "type": "Point",
		  "coordinates": [this.xinputValue, this.yinputValue]
	      }};
	      marker.addTo(this.drawnItems);
	      var collection = this.drawnItems.toGeoJSON();
	      sessionStorage.setItem('savedMarkers',JSON.stringify(collection));
	    };
```
- After storing the marker if the page is reloaded the saved pins will be added back to the map using the loadSavedMarkers function:

```
	    //this function loads saved markers upon page initialization
	    loadSavedMarkers(){
	      this.savedMarkers = sessionStorage.getItem('savedMarkers');
	      this.drawnItems = new L.FeatureGroup();
	      this.map2.addLayer(this.drawnItems);
	      if (this.savedMarkers){
		function onEachFeature(feature, layer) {
		  if (feature.properties && feature.properties.popupContent) {
		      layer.bindPopup(feature.properties.popupContent);
		  }
		}
		L.geoJSON((JSON.parse(this.savedMarkers)), {
		  onEachFeature: onEachFeature
		}).addTo(this.map2);
	      }
	    }
```
- These ensure the map markers can still be seen even in the case of the map or session reloading, allowing for a user to save data locally on their machine during a browsing session.
