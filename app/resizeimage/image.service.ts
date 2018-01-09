// Imports
import { Injectable }    from '@angular/core';
import {Http} from '@angular/http';
import { Image } from './image';
import 'rxjs/add/operator/map';
import {ObjectImages} from './objectImages';


// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class ImageService {
  // Class constructor with Jsonp injected
  constructor(private jsonp: Http) { }

  private imageUrl = 'https://cors-anywhere.herokuapp.com/http://54.152.221.29/images.json';

  // Get a list if pets based on animal
  getImages() {
    return this.jsonp.request(this.imageUrl)
      .map(response => <ObjectImages> response.json());
  }
}
