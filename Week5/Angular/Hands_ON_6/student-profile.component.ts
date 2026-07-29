import { Component } from '@angular/core';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({

selector:'app-student-profile',

template:''

})

export class StudentProfileComponent{

constructor(public enrollmentService:EnrollmentService){}

}
