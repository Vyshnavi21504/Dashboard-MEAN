import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html', 
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  stats: any = {};
  chart: any; 

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
   
    this.dashboardService.getStats().subscribe((data: any) => {
      this.stats = data;
    });

    this.dashboardService.getChartData().subscribe((data: any) => {
      this.renderChart(data);
    });
  }

  renderChart(apiData: any[]) {
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    if (!canvas) return;

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(canvas, {
      type: 'line', 
      data: {
        
        labels: apiData.map(d => d.label),
        datasets: [{
          label: 'Monthly Revenue ($)',
          data: apiData.map(d => d.value),
          borderColor: '#3f51b5',
          backgroundColor: 'rgba(63, 81, 181, 0.2)', 
          tension: 0.4, 
          fill: true,
          pointBackgroundColor: '#3f51b5',
          pointRadius: 5
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, 
        plugins: {
          legend: {
            display: true,
            position: 'top',
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }
}