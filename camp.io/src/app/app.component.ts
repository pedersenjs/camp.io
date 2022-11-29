import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { CommonService } from './common.service';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { RouterLinkWithHrefDelegate } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private newService : CommonService) {}
  Repdata;
  valbutton="Save";
  onSave = function(user){
    this.newService.saveUser(user);
    
  }
  // onSave = function(review,isVa)
}
