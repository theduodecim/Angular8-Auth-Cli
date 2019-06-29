import { Component } from '@angular/core';
import { AuthenticationService } from './_services';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    currentUser: any;
    steeps: Array<any> = [
        { steep: 'Create Base Project Structure & Cli Config.' },
        { steep: 'Creating fake backend global api and authentification Service that will handle the bancked.' },
        { steep: 'Authentification Login Component creation Logic and ViewTemplate.' },
        { steep: 'Injecting authentification to the AppComponent to check the logedCurrentUser.' },
        { steep: 'Guards creating and adding to routingModule.' },
        { steep: 'Interceptors & Error Interceptors for the HTTP Request.' },
        { steep: 'Updating the fake backend for Register Users Storing each user in the localStorage.' },
        { steep: 'Creating UserService that manage the Crud of the users.' },
        { steep: 'Logic that handles formGroup validation, Submission, Error Handling , and binding to the Template View.' },
        { steep: 'Adding Success Message verifying the sended QueryParams Property Option.' },
        { steep: 'Adding Crud functionalities to the Fake-Backend.' },
        { steep: 'Creating the Logic for the Home Component and the Template to display eachuser registered and delete.' },
        { steep: 'Alert Service, 14 Creating the Alert Component and adding the selector to the app-component.' },
        { steep: 'Refactoring Login Component with the new Alert Service' },
        { steep: 'Refactoring Register Component with the new AlertService' }
    ];
    constructor(private authService: AuthenticationService, private router: Router, ) {
        this.authService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }

}