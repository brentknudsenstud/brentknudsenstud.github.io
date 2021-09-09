import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-analytics-table',
  templateUrl: './analytics-table.component.html',
  styleUrls: ['./analytics-table.component.scss']
})
export class AnalyticsTableComponent implements OnInit {
  weekdays: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  employees: Employee[] = [];
  @Input()
  departmentId: string;
  
  getTotalHours(employee: Employee): number {
    return employee.monday + employee.tuesday + employee.wednesday + employee.thursday + employee.friday + employee.saturday + employee.sunday;
  }
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    // this.employees = this.employeeData.filter(employee => employee.departmentId === this.departmentId);
    this.employeeService.getEmployeeHoursByDepartment(this.departmentId).subscribe((employees: Employee[]) => {
      this.employees = employees;
    });

  }
}