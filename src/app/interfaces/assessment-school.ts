export interface AssessmentSchool {
  totalItems: string;
  data: DatumAssessmentSchool[];
  totalPages: number;
  currentPage: number;
}

export interface DatumAssessmentSchool {
  id: number;
  name: string;
  evaluated: number;
  type: null;
  date: null;
}
