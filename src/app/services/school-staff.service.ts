import { Injectable } from '@angular/core';
import { SchoolStaff, DatumSchoolStaff } from '../interfaces/school-staff';

@Injectable({
  providedIn: 'root',
})
export class SchoolStaffService {
  schoolStaff: SchoolStaff = {
    totalItems: '16',
    data: [
      {
        id: 1709,
        docente: 'Smith Johnson John',
        evaluacion: 0,
      },
      {
        id: 4417,
        docente: 'Brown Williams James',
        evaluacion: 0,
      },
      {
        id: 1840,
        docente: 'Miller Jones David',
        evaluacion: 0,
      },
      {
        id: 2049,
        docente: 'Taylor Davis Robert',
        evaluacion: 0,
      },
      {
        id: 1715,
        docente: 'Wilson Martinez Michael',
        evaluacion: 0,
      },
      {
        id: 4505,
        docente: 'Anderson Hernandez William',
        evaluacion: 0,
      },
      {
        id: 1684,
        docente: 'Thomas Lopez Richard',
        evaluacion: 0,
      },
      {
        id: 1713,
        docente: 'Jackson Gonzalez Charles',
        evaluacion: 0,
      },
      {
        id: 1352,
        docente: 'Alexander Agapito',
        evaluacion: 0,
      },
      {
        id: 1342,
        docente: 'Dalila Maribel Alburquerque Collatupa',
        evaluacion: 0,
      },
      {
        id: 2651,
        docente: 'Stefania Altamirano Curillo',
        evaluacion: 0,
      },
      {
        id: 1846,
        docente: 'Roberto Cesar Alvarez Peña',
        evaluacion: 0,
      },
      {
        id: 1333,
        docente: 'Daniel Marco Ames Vera',
        evaluacion: 0,
      },
      {
        id: 1366,
        docente: 'Maria Lorena Atoche Ruiz',
        evaluacion: 0,
      },
      {
        id: 1345,
        docente: 'Wanda Ines Barreto Olivos',
        evaluacion: 0,
      },
      {
        id: 4387,
        docente: 'Nora Lucía Beraum',
        evaluacion: 0,
      },
    ],
    totalPages: 1,
    currentPage: 1,
  };

  getSchoolStaff(): DatumSchoolStaff[] {
    return this.schoolStaff.data;
  }

  /* saveSchoolStaff(schoolStaff: DatumSchoolStaff) {
    localStorage.setItem('schoolStaff', JSON.stringify(schoolStaff));
  } */
}
