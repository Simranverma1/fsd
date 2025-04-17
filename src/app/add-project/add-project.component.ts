import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Add HttpClientModule
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent {
  project = {
    id: '',
    name: ''
  };
  success = '';
  error = '';

  constructor(private http: HttpClient) {}

  addProject() {
    this.http.post(`${environment.apiUrl}/projects`, this.project).subscribe({
      next: () => {
        this.success = 'Project added successfully!';
        this.error = '';
        this.project = { id: '', name: '' };
      },
      error: () => {
        this.error = 'Error adding project.';
        this.success = '';
      }
    });
  }
}