import { Component, Injectable, OnInit } from '@angular/core';
import { Department } from 'src/app/interfaces/department';
import { DepartmentsService } from '../../services/departments.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  // @Injectable() departments: Department[] = [];
  departments: Department[];
  $departments: Observable<Department[]>;

  constructor(
    private departmentsService: DepartmentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.departments = this.departmentsService.departments;
    // this.departmentsService.getDepartments().subscribe(departments => {
    //   this.departments = departments;
    // });

    this.$departments = this.departmentsService.getDepartments();
  }
  goToDepartment(departmentId: string): void {
    this.router.navigate(['./timesheet', {id: departmentId}]);
  }
}
