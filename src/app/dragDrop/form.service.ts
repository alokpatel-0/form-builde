import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  editdata = new BehaviorSubject(null);

  constructor() {}
}
