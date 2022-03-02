import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css'],
})
export class TableViewComponent implements OnInit {
  dataSource: any;
  constructor(private formService: FormService, private router: Router) {}

  ngOnInit(): void {
    const data = localStorage.getItem('form-data');
    if (data) this.dataSource = JSON.parse(data);
  }

  onEdit(params: any) {
    this.formService.editdata.next(params);
    this.router.navigate(['form-builder/create']);
  }
}
