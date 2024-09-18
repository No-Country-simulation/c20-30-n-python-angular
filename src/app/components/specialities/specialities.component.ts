import { Component } from '@angular/core';
import { TestimonialService } from 'src/app/services/testimonial.service';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.component.html',
  styleUrls: ['./specialities.component.css']
})
export class SpecialitiesComponent{

  doctors:any[]=[];


  constructor(private specService:TestimonialService){}

  ngOnInit(){
    this.specService.doctorsList().subscribe((doc)=>(
      this.doctors=doc
    ));
    console.log("hola mundo")
    
  }






}
