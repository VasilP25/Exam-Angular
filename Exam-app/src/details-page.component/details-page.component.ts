import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TrainingService } from '../app/training.service';
import { TrainingType } from '../types/training';
import { UserService } from '../user/user.service';
import { UserForAuth } from '../types/user';

@Component({
  selector: 'app-details-page.component',
  imports: [RouterLink],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css',
  standalone: true,
})
export class DetailsPageComponent implements OnInit {
  training: TrainingType[] = [];
  user: UserForAuth = {} as UserForAuth;
  constructor(
    private route: ActivatedRoute,
    private service: TrainingService,
    private userservice: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('trainingId');
    this.user = this.userservice.userId;

    this.service.getAll().subscribe((data) => {
      if (!data) {
        this.router.navigate(['/error']);
      } else {
        this.training = data.filter((tr) => {
          return tr._id == id;
        });
      }
    });
  }
  deletetraining(trainingId: string) {
    this.service.delete(trainingId).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  likeTraining(id: string) {
    const user = this.userservice.userId;
    this.service.like(id, user).subscribe((data) => {
      this.router.navigate(['/catalog']);
    });
  }
}
