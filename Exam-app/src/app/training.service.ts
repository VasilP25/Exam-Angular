import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainingType } from '../types/training';
import { UserForAuth } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  constructor(private http: HttpClient) {}
  create(
    title: string,
    typeTraining: string,
    description: string,
    timeToComplete: string
  ) {
    return this.http.post<TrainingType>('/api/themes', {
      title,
      typeTraining,
      description,
      timeToComplete,
    });
  }
  getAll() {
    return this.http.get<TrainingType[]>('/api/themes');
  }
  delete(trainingId: string) {
    return this.http.delete(`/api/themes/${trainingId}/delete`, {
      // params: { id: trainingId },
    });
  }
  edit(training: TrainingType, trainingId: string | null) {
    return this.http.put(`/api/themes/${training._id}/edit`, {
      training,
      trainingId,
    });
  }
  like(trainingId: string, user: UserForAuth) {
    return this.http.post(`/api/themes/${trainingId}/like`, { user });
  }
}
