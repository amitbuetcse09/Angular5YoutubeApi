import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { ApiInterface } from './api-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent implements OnInit {
  title = 'app';
  _ytArray: ApiInterface[];
  constructor(private apiService: ApiService) {  }
  getPosts(): void {
   this.apiService.getPosts()
     .subscribe(
       resultArray => this._ytArray = resultArray,
       error => console.log('Error :: ' + error)
     );
  }
     ngOnInit(): void {
    this.getPosts();
     }
}
