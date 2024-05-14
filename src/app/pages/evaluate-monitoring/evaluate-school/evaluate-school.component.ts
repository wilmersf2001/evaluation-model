import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { Rubrics } from '../../../interfaces/rubrics';
import { RubricsService } from '../../../services/rubrics.service';

@Component({
  selector: 'app-evaluate-school',
  standalone: true,
  imports: [
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './evaluate-school.component.html',
  styleUrl: './evaluate-school.component.scss',
})
export class EvaluateSchoolComponent {
  displayedColumns: string[] = ['factor', 'indicator', 'state', 'rubric'];
  dataSource: any[];
  selectedStates: any[] = [];

  constructor(public rubricsService: RubricsService) {
    const indicadores = this.rubricsService
      .getRubrics()
      .map((rubric: Rubrics) => {
        return rubric.indicadores.map((indicator) => {
          return {
            factor: rubric.factor,
            indicator: indicator.indicador,
            state: indicator.valores,
            rubric: rubric.proposito,
            findingsrecommendations: rubric.recomendacion,
          };
        });
      });

    const indicadoresAppended = indicadores.reduce(
      (acc, curr) => acc.concat(curr),
      []
    );

    this.dataSource = indicadoresAppended;

    console.log(this.dataSource);
  }

  showRubric(event: any, index: number) {
    this.selectedStates[index] = event;
  }
}
