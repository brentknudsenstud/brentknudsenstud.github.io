# HrTimesheet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

##Using the app

1) On the home screen, click one of three departments (Customer Success, Sales or Finance). 
2) After clicking on the department of your choice, for example "Customer Success", a new card will appear with a field to enter and add an employee's name.
3) Enter the employee's name and click the add button ("+") to the right. The name will then appear below with one entry field under each day column. 
4) Enter the amount of hours worked (only in the increments of one hour) for that employee for each day. (The app allows you to enter negative hours, but you shouldn't because well, that's just not nice.) You will see the running total to the right of the "Sunday" column and just before the trash can icon. 
5) After you are done entering the hours worked, click the "Submit" button in the bottom right of the card (timesheet) to submit the hours. (The hours are then submitted to the Firebase database.)
6) You have the option of deleting any row and its contents by clicking the trash can icon on the right end of the row.
