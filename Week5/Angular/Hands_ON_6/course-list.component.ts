import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
selector:'app-course-list',
template:''

})

export class CourseListComponent{

courses:any[]=[];

constructor(private service:CourseService){

this.courses=this.service.getCourses();

}

}
