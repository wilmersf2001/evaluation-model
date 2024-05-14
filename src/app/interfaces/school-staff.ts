export interface SchoolStaff {
  totalItems: string;
  data: DatumSchoolStaff[];
  totalPages: number;
  currentPage: number;
}

export interface DatumSchoolStaff {
  id: number;
  docente: string;
  evaluacion: number;
}
