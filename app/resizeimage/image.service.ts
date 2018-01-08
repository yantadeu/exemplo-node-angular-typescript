// Imports
import { Injectable }    from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Image } from './image';
import 'rxjs/add/operator/map';


// Decorator to tell Angular that this class can be injected as a service to another class
@Injectable()
export class ImageService {
  // Class constructor with Jsonp injected
  constructor(private jsonp: Jsonp) { }
  // Base URL for Petfinder API
  private imageUrl = '';
  // Get a list if pets based on animal
  findImages(img: string) {
    // End point for list of pets:
    // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
    const endPoint = 'image.find';
    // URLSearchParams makes it easier to set query parameters and construct URL
    // rather than manually concatinatng
    let params = new URLSearchParams();
   // params.set('key', '555f8155d42d5c9be4705beaf4cce089');
   // params.set('format', 'json');
    // params.set('callback', 'JSONP_CALLBACK');
    // Return response
   return this.jsonp
              .get(this.imageUrl + endPoint, { search: params })
              .map(response => <Image[]> response.json().imagefinder.images.image);
  }

  findImageById(id: string){
    const endPoint = 'image.get'
    // URLSearchParams makes it easier to set query parameters and construct URL
    // rather than manually concatinatng
    let params = new URLSearchParams();
    // params.set('format', 'json');
    // params.set('callback', 'JSONP_CALLBACK');
    console.log(id);
    // Return response
   return this.jsonp
              .get(this.imageUrl + endPoint, { search: params })
              .map(response => {
                console.log(response.json().imagefinder.image);
                return  response.json().imagefinder.image
              });
  }
}
