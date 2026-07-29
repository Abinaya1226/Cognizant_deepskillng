import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { CourseCardComponent } from '../../components/course-card/course-card';

@Component({

selector:'app-course-list',

standalone:true,

imports:[CommonModule,CourseCardComponent],

templateUrl:'./course-list.html',

styleUrl:'./course-list.css'

})

export class CourseListComponent{

courses=[

{

id:1,

name:'Angular',

code:'ANG101',

credits:4

},

{

id:2,

name:'Java',

code:'JAVA102',

credits:3

},

{

id:3,

name:'Spring Boot',

code:'SPR103',

credits:4

},

{

id:4,

name:'SQL',

code:'SQL104',

credits:2

},

{

id:5,

name:'Python',

code:'PY105',

credits:3

}

];

selectedCourseId:number=0;

onEnroll(courseId:number){

console.log("Enrolling in course : "+courseId);

this.selectedCourseId=courseId;

}

}
