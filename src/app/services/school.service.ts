import { Injectable } from '@angular/core';
import { School } from '../interfaces/school';
import { DatumSchoolStaff } from '../interfaces/school-staff';

interface monitoringEvaluation {
  id: number;
  nombre: string;
  date: string;
  evaluation: [] | null;
  staff: DatumSchoolStaff;
}

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  School: School[] = [
    {
      id: 56,
      nombre: 'DEF-789 Maplewood Prep School',
    },
    {
      id: 38,
      nombre: 'DEF-789 Maplewood Prep Academy',
    },
    {
      id: 33,
      nombre: 'DEF-789 Maplewood School of Excellence',
    },
    {
      id: 51,
      nombre: 'DEF-789 Maplewood International Academy',
    },
    {
      id: 120,
      nombre: 'DEF-789 Maplewood Elite School',
    },
    {
      id: 119,
      nombre: 'DEF-789 Maplewood Advanced Learning Institute',
    },
    {
      id: 61,
      nombre: 'DEF-789 Maplewood Future Leaders Academy',
    },
    {
      id: 62,
      nombre: 'DEF-789 Maplewood Preparatory Institute',
    },
    {
      id: 74,
      nombre: 'DEF-789 Maplewood College Preparatory',
    },
    {
      id: 123,
      nombre: 'DEF-789 Maplewood Educational Center',
    },
    {
      id: 125,
      nombre: 'DEF-789 Maplewood Learning Academy',
    },
    {
      id: 126,
      nombre: 'DEF-789 Maplewood Institute of Learning',
    },
  ];

  getSchools(): School[] {
    return this.School;
  }

  saveSchoolLocalStorage(id: number = 56) {
    const school = this.School.find((s) => s.id === id);
    localStorage.setItem('monitoringSchool', JSON.stringify(school));
  }

  getSchoolLocalStorage(): School {
    return JSON.parse(localStorage.getItem('monitoringSchool') || '{}');
  }

  updateSchoolLocalStorage(id: number) {
    this.saveSchoolLocalStorage(id);
  }

  monitoringEvaluationSchool(
    fecha: string,
    school: School,
    staff: DatumSchoolStaff
  ) {
    const data: monitoringEvaluation = {
      id: school.id,
      nombre: school.nombre,
      date: fecha,
      evaluation: null,
      staff: staff,
    };

    localStorage.setItem(
      `monitoringEvaluation-${fecha}-${staff.id}`,
      JSON.stringify(data)
    );
  }
}
