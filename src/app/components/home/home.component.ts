import { Component, OnInit } from '@angular/core';
import { TestimonialService } from 'src/app/services/testimonial.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  testimonials:any[] = [];
  questions:any[] = [];
  doctors:any[] = [];
  visibleDoctors: any[] = [];
  currentIndex = 0;

  // Aquí defines la propiedad 'featuredTestimonial'
  featuredTestimonial = {
    name: 'Andy Carnation',
    rating: 4.5,
    longReview: 'With seamless navigation, top-notch medical professionals, and a commitment to privacy, it\'s a game-changer. Say goodbye to long waits and hello to quality care, all from the comfort of home.',
    image: '/assets/doctora.jpeg'
  };

  constructor(private homeService: TestimonialService) {}

  ngOnInit() {
    this.homeService.doctorsList().subscribe((doc) => {
      this.doctors = doc;
      this.visibleDoctors = this.doctors.slice(0, 4); // Mostrar 4 doctores al cargar
    });
    this.homeService.testimonialList().subscribe((testi)=>(
      this.testimonials=testi
    ));
    this.homeService.questionList().subscribe((ques)=>(
      this.questions=ques
    ));
  }

  labels: string[] = [
    'All', 'Therapist', 'Pediatri.', 'Urologists', 'Doctor',
    'Family doctor', 'Gynecologist', 'Cardiologist', 'Treatments'
  ];

  selectedLabel: string = 'All';

  selectLabel(label: string) {
    this.selectedLabel = label;
  }

  next() {
    if (this.currentIndex + 4 < this.doctors.length) {
      this.currentIndex += 4;
      this.visibleDoctors = this.doctors.slice(this.currentIndex, this.currentIndex + 4);
    }
  }

  prev() {
    if (this.currentIndex - 4 >= 0) {
      this.currentIndex -= 4;
      this.visibleDoctors = this.doctors.slice(this.currentIndex, this.currentIndex + 4);
    }
  }

  toggleAnswer(question: any) {
    question.open = !question.open;
  }
}
