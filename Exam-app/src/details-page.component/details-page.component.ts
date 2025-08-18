import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from '../app/training.service';
import { TrainingType } from '../types/training';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-details-page.component',
  imports: [],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css',
  standalone: true,
})
export class DetailsPageComponent implements OnInit {
  training: TrainingType[] = [];
  constructor(
    private route: ActivatedRoute,
    private service: TrainingService,
    private userservice: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('trainingId');

    this.service.getAll().subscribe((data) => {
      if (!data) {
        this.router.navigate(['/error']);
      } else {
        this.training = data.filter((tr) => {
          return tr._id == id;
        });
      }
    });
    this.userservice.getUser().subscribe((data) => {});
  }
}
