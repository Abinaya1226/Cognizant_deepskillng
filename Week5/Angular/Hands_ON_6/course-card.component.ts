import { Component,Input } from '@angular/core';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector:'app-course-card',
  templateUrl:'./course-card.component.html',
  styleUrls:['./course-card.component.css']
})

export class CourseCardComponent{

  @Input()

  course!:Course;

  constructor(public enrollmentService:EnrollmentService){}

  toggleEnrollment(){

    if(this.enrollmentService.isEnrolled(this.course.id)){

      this.enrollmentService.unenroll(this.course.id);

    }

    else{

      this.enrollmentService.enroll(this.course.id);

    }

  }

}
