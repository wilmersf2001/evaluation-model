import { Injectable } from '@angular/core';
import { AssessmentSchool } from '../interfaces/assessment-school';

@Injectable({
  providedIn: 'root',
})
export class AssessmentSchoolService {
  assessmentSchool: AssessmentSchool = {
    totalItems: '7',
    data: [
      {
        id: 1709,
        name: 'ABC-123 Greenfield High School',
        evaluated: 0,
        type: null,
        date: null,
      },
      {
        id: 4417,
        name: 'XYZ-456 Riverside Academy',
        evaluated: 0,
        type: null,
        date: null,
      },
      {
        id: 1840,
        name: 'DEF-789 Maplewood Prep School',
        evaluated: 0,
        type: null,
        date: null,
      },
      {
        id: 2049,
        name: 'GHI-321 Oakmont High',
        evaluated: 0,
        type: null,
        date: null,
      },
      {
        id: 1715,
        name: 'JKL-654 Hillside Secondary School',
        evaluated: 0,
        type: null,
        date: null,
      },
      {
        id: 4505,
        name: 'MNO-987 Pinecrest Academy',
        evaluated: 0,
        type: null,
        date: null,
      },
      {
        id: 1684,
        name: 'PQR-210 Elmwood Junior High',
        evaluated: 0,
        type: null,
        date: null,
      },
      {
        id: 1713,
        name: 'STU-753 Brookside Elementary',
        evaluated: 0,
        type: null,
        date: null,
      },
    ],
    totalPages: 1,
    currentPage: 1,
  };

  constructor() {}
}
