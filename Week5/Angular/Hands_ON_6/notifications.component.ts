import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({

selector:'app-notification',

templateUrl:'./notification.component.html',

providers:[NotificationService]

})

export class NotificationComponent{

constructor(private notify:NotificationService){}

/*
Component-level provider creates a separate NotificationService
instance only for this component and its child components.
*/

showMessage(){

this.notify.show("Course Enrolled Successfully");

}

}
