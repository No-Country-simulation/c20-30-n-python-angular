import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { Testimonial } from '../model/testimonial.model';
import { Question } from '../model/question.model';
import { Doctor } from '../model/doctors.model';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  private apiURL='http://localhost:3000/'
  constructor(private http:HttpClient) { }

  testimonialList():Observable<Testimonial[]>{
    return this.http.get<Testimonial[]>(this.apiURL+"testimonials");
  }

  questionList():Observable<Question[]>{
    return this.http.get<Question[]>(this.apiURL+"questions");
  }

  doctorsList():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.apiURL+"doctors");
  }
  
}
