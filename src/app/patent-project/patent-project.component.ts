import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-patent-project',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Add HttpClientModule
  templateUrl: './patent-project.component.html',
  styleUrls: ['./patent-project.component.scss']
})
export class PatentProjectComponent {
  projectId = '';
  success = '';
  error = '';

  constructor(private http: HttpClient) {}

  patentProject() {
    this.http.post(`${environment.apiUrl}/projects/${this.projectId}/patent`, null)
      .subscribe({
        next: () => {
          this.success = 'Project patented successfully!';
          this.error = '';
          this.projectId = '';
        },
        error: () => {
          this.error = 'Error patenting project.';
          this.success = '';
        }
      });
  }
}