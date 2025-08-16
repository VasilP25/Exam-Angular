import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrainingType } from '../types/training';

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
}
