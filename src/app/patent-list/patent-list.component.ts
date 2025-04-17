import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface Patent {
  id: number;
  title: string;
  description: string;
}

@Component({
  selector: 'app-patent-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // Add HttpClientModule
  templateUrl: './patent-list.component.html',
  styleUrls: ['./patent-list.component.scss']
})
export class PatentListComponent implements OnInit {
  patents: Patent[] = [];
  isLoading: boolean = false;
  error: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPatents();
  }

  fetchPatents(): void {
    this.isLoading = true;
    this.http.get<Patent[]>(`${environment.apiUrl}/patents`)
      .subscribe({
        next: (data) => {
          this.patents = data;
          this.isLoading = false;
        },
        error: err => {
          console.error('Error fetching patents', err);
          this.error = 'Error fetching patents';
          this.isLoading = false;
        }
      });
  }
}