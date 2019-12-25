import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ProgramsModels} from '../../../interface/programs.models';
import {ProgramService} from '../../../services/program.service';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {
  pageActual = 1;

  programsmodels: ProgramsModels[] = [];
  constructor(public programService: ProgramService) { }

  ngOnInit() {
    this.programService.getAllPrograms().subscribe(result => {
      this.programsmodels = result;
      console.log('success');
    }, error => {
      console.log('error');
    });
  }
  submitDeleteProgram(id: number) {
    if (confirm('Bạn có thực sự muốn xóa chương trình học này') === true) {
      this.deleteProgram(id);
    }
  }

  deleteProgram(id: number) {
    this.programService.deleteProgram(id).subscribe(result => {
      this.ngOnInit();
      console.log('success');
    }, error => {
      console.log('error');
    });
  }

}
