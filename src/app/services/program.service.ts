import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProgramsModels} from '../interface/programs.models';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private API = 'http://localhost:8080/api/auth/learningPrograms/';
  constructor(private httpClient: HttpClient) { }
  getAllPrograms(): Observable<ProgramsModels[]> {
    return this.httpClient.get<ProgramsModels[]>(this.API);
  }
  addPrograms(programsModels: ProgramsModels): Observable<ProgramsModels> {
    return this.httpClient.post<ProgramsModels>(this.API , programsModels);
  }
  deleteProgram(id: number): Observable<ProgramsModels> {
    return this.httpClient.delete<ProgramsModels>(this.API  +   id);
  }
  updateProgram(program: ProgramsModels): Observable<ProgramsModels> {
    return this.httpClient.put<ProgramsModels>(this.API + program.id , program);
  }
  getProgram(id: number): Observable<ProgramsModels> {
    return this.httpClient.get<ProgramsModels> (this.API + id);
  }
}
