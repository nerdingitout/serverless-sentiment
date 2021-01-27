import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-frontend-app',
  templateUrl: './frontend-app.component.html',
  styleUrls: ['./frontend-app.component.css']
})
export class FrontendAppComponent {
  constructor(private http: HttpClient) { }
  apiSentiment; //value of sentiment (negative,neutral,positive)
  apiSentimentNum; //numeric value of the sentiment 
  apiText; //text taken from database
  Sentence= new FormControl('');

  onSubmit(){
    this.apiSentiment='';
    this.apiText='';
    this.apiSentimentNum='';
    // Simple POST request with a JSON body and response type <any>
    this.http.post<any>('<ADD-BACKEND-URL-HERE>'+'/api/post_sentiment', { text: this.Sentence.value }).subscribe(data => {
      this.apiSentimentNum = data.sentiment;
      this.apiText = data.text;
    // the following code specifies the range of each sentiment which its value is min=-1 and max=1, can be customized
    if (this.apiSentimentNum<0 && this.apiSentimentNum>=-1){
      this.apiSentiment="Negative";
    }
    else if (this.apiSentimentNum<=1 && this.apiSentimentNum>=0.7){
      this.apiSentiment="Positive";
    }
    else if (this.apiSentimentNum<0.7 && this.apiSentimentNum>=0){
      this.apiSentiment="Neutral";
    }
    })

  }
}
