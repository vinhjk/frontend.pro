import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProgramsModels} from '../interface/programs.models';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  private API_URL = 'http://localhost:8080/api/auth/learningPrograms/';
  constructor(private httpClient: HttpClient) { }
  getAllPrograms(): Observable<ProgramsModels[]> {
    return this.httpClient.get<ProgramsModels[]>(this.API_URL);
  }
  addPrograms(programsModels: Partial<ProgramsModels>): Observable<ProgramsModels> {
    return this.httpClient.post<ProgramsModels>(`${this.API_URL}`, programsModels);
  }
  deleteProgram(id: number): Observable<ProgramsModels> {
    return this.httpClient.delete<ProgramsModels>(`${this.API_URL}/${id}`);
  }
  updateProgram(programsModels: ProgramsModels): Observable<ProgramsModels> {
    return this.httpClient.put<ProgramsModels>(`${this.API_URL}/${programsModels.id}`, programsModels);
  }
  getProgram(id: number): Observable<ProgramsModels> {
    return this.httpClient.get<ProgramsModels> (`${this.API_URL}/${id}`);
  }
}
