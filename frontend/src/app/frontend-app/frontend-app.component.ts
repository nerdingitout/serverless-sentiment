import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-frontend-app',
  templateUrl: './frontend-app.component.html',
  styleUrls: ['./frontend-app.component.css']
})
export class FrontendAppComponent {
  Sentence= new FormControl('');

  onSubmit(){
    console.log("huwejhdjhjdhf");
  }
}
