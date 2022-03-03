import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fieldsList } from '../field';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent implements OnInit {
  fieldsList = fieldsList;
  formControls: any[] = [];

  formName!: FormControl;

  constructor(private formService: FormService, private router: Router) {
    this.formName = new FormControl('');
    this.formName.setValidators([Validators.required]);
    this.formService.editdata.subscribe((val: any) => {
      console.log('sub', val);
      if (val) {
        this.formControls = val?.controls;
        this.formName.setValue(val?.formName);
      }
    });
  }

  ngOnInit(): void {}

  onSave() {
    let localData: any = localStorage.getItem('form-data');
    if (localData) localData = JSON.parse(localData);
    const payload = {
      id: Math.floor(Math.random() * 1000),
      formName: this.formName.value,
      controls: this.formControls,
    };
    if (localData) {
      localData?.push(payload);
    } else {
      localData = [payload];
    }
    this.setLocalStorage(localData);
    this.router.navigate(['form-list']);
  }

  setLocalStorage(payload: object) {
    localStorage.setItem('form-data', JSON.stringify(payload));
  }

  drop(event: CdkDragDrop<any[]>) {
    // this.fieldsList = fieldsList;
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
