import { Component, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatumSchoolStaff } from '../../../interfaces/school-staff';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Router } from '@angular/router';

import { School } from '../../../interfaces/school';
import { SchoolService } from '../../../services/school.service';
import { SchoolStaffService } from '../../../services/school-staff.service';

@Component({
  selector: 'app-selected-school',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [DatePipe],
  templateUrl: './selected-school.component.html',
  styleUrl: './selected-school.component.scss',
})
export class SelectedSchoolComponent {
  displayedColumns: string[] = ['position', 'docente', 'estado'];
  dataSource = new MatTableDataSource<DatumSchoolStaff>(
    this.schoolStaffService.getSchoolStaff()
  );
  schools: School[] = this.schoolService.getSchools();
  selectedStaff: DatumSchoolStaff | undefined;
  selectedSchool: School | undefined;
  date = this.dateFormated(new Date());

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public schoolService: SchoolService,
    public schoolStaffService: SchoolStaffService,
    private datePipe: DatePipe,
    private router: Router
  ) {
    this.schoolService.saveSchoolLocalStorage();
    this.selectedSchool = this.schoolService.getSchoolLocalStorage();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onRowClick(row: DatumSchoolStaff) {
    this.selectedStaff = row;
  }

  evaluateSchool() {
    this.schoolService.monitoringEvaluationSchool(
      this.date!,
      this.selectedSchool!,
      this.selectedStaff!
    );
    this.router.navigate([
      'home/assessment/evaluate-monitoring',
      this.date,
      this.selectedStaff?.id,
    ]);
  }

  updateSchoolSelected(id: number) {
    this.schoolService.updateSchoolLocalStorage(id);
  }

  dateFormated(date: Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
}
