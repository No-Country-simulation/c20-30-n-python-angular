import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  labels: string[] = [
    'All', 'Therapist', 'Pediatri.', 'Urologists', 'Doctor',
    'Family doctor', 'Gynecologist', 'Cardiologist', 'Treatments'
  ];
  testimonials = [
    { name: 'Andy Carnation', rating: 4.5, shortReview: 'With seamless navigation...', image: '/assets/doctora.jpeg' },
    { name: 'Andy Carnation', rating: 4.5, shortReview: 'With seamless navigation...', image: '/assets/doctora.jpeg' },
    { name: 'Andy Carnation', rating: 4.5, shortReview: 'With seamless navigation...', image: '/assets/doctora.jpeg' }
  ];

  questions = [
    {
      question: "Are the platform's doctors certified?",
      answer: "Yes, all doctors on our platform are certified professionals.",
      open: false
    },
    {
      question: "How the video call works?",
      answer: "You can start a video call by clicking the 'Start Call' button in the app.",
      open: false
    },
    {
      question: "Can you prewrite medication?",
      answer: "No, doctors need to assess your condition before prescribing any medication.",
      open: false
    }
  ];

  featuredTestimonial = {
    name: 'Andy Carnation',
    rating: 4.5,
    longReview: `With seamless navigation, top-notch medical professionals, and a commitment to privacy, it's a game-changer.
                 Say goodbye to long waits and hello to quality care, all from the comfort of home.`,
    image: '/assets/doctora.jpeg'
  };



  selectedLabel: string = 'All';

  doctors = [
    { name: 'Taylor Swift', specialty: 'Cardiologist', rating: 4.5, reviews: '1,230', image: '/assets/doctora.jpeg' },
    { name: 'Taylor Swift', specialty: 'Cardiologist', rating: 4.5, reviews: '1,230', image: '/assets/doctora.jpeg' },
    { name: 'Taylor Swift', specialty: 'Cardiologist', rating: 4.5, reviews: '1,230', image: '/assets/doctora.jpeg' },
    { name: 'Taylor Swift', specialty: 'Cardiologist', rating: 4.5, reviews: '1,230', image: '/assets/doctora.jpeg' }
  ];

  visibleDoctors = this.doctors.slice(0, 3);
  currentIndex = 0;

  selectLabel(label: string) {
    this.selectedLabel = label;
  }

  next() {
    if (this.currentIndex + 3 < this.doctors.length) {
      this.currentIndex += 3;
      this.visibleDoctors = this.doctors.slice(this.currentIndex, this.currentIndex + 3);
    }
  }

  prev() {
    if (this.currentIndex - 3 >= 0) {
      this.currentIndex -= 3;
      this.visibleDoctors = this.doctors.slice(this.currentIndex, this.currentIndex + 3);
    }
  }

  toggleAnswer(question: any) {
    question.open = !question.open;
  }
}
