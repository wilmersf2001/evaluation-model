import { Component, ViewChild } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { School } from '../../interfaces/school';
import { DatumSchoolStaff } from '../../interfaces/school-staff';
import { SchoolService } from '../../services/school.service';
import { SchoolStaffService } from '../../services/school-staff.service';

@Component({
  selector: 'app-evaluate-monitoring',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  templateUrl: './evaluate-monitoring.component.html',
  styleUrl: './evaluate-monitoring.component.scss',
})
export class EvaluateMonitoringComponent {
  displayedColumns: string[] = ['position', 'docente', 'estado'];
  dataSource = new MatTableDataSource<DatumSchoolStaff>(
    this.schoolStaffService.getSchoolStaff()
  );
  schools: School[] = this.schoolService.getSchools();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public schoolService: SchoolService,
    public schoolStaffService: SchoolStaffService
  ) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onRowClick(row: any) {
    console.log('Fila clickeada:', row);
  }
}
