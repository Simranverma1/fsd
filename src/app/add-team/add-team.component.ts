import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-add-team',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // Add HttpClientModule
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent {
  projectId = '';
  members = '';
  success = '';
  error = '';

  constructor(private http: HttpClient) {}

  addMembers() {
    const memberList = this.members.split(',').map(m => m.trim());
    this.http.post(`${environment.apiUrl}/projects/${this.projectId}/team`, memberList)
      .subscribe({
        next: () => {
          this.success = 'Team members added!';
          this.error = '';
          this.projectId = '';
          this.members = '';
        },
        error: () => {
          this.error = 'Error adding team members.';
          this.success = '';
        }
      });
  }
}