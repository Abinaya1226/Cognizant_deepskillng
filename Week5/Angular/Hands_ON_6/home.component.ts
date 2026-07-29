import { Component } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
selector:'app-home',
template:''

})

export class HomeComponent{

courseCount:number=0;

constructor(private service:CourseService){

this.courseCount=this.service.getCourses().length;

}

}
