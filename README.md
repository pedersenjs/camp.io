# Camp.io
Jenna Pedersen and Patrick Turner
Type of your project: Mobile app (Android and iOS)
Domain of your project: Recreation

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
