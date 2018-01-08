// Imports
import { Injectable }    from '@angular/core';
import {Http, RequestMethod, ResponseContentType} from '@angular/http';
import { Image } from './image';
import 'rxjs/add/operator/map';


// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class ImageService {
  // Class constructor with Jsonp injected
  constructor(private jsonp: Http) { }

  private imageUrl = 'http://54.152.221.29/';

  // Get a list if pets based on animal
  getImages() {
    const endPoint = 'images.json';
    return this.jsonp.request(this.imageUrl + endPoint, {
      withCredentials: true, method: RequestMethod.Get, responseType: ResponseContentType.Json})
      .map(response => <Image[]> response.json());
  }
}
