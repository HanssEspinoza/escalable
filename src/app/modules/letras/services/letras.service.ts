import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LetrasService {

  getVector(): Array<number> {
    return [1,2,3,4,5,6,7];
  }

}
