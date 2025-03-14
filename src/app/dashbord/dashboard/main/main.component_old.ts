import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Chart } from 'angular-highcharts';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexLegend,
  ApexFill,
  ApexResponsive,
} from 'ng-apexcharts';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/service/auth.service';
import { RestClientService } from 'src/app/core/service/rest-client.service';
import { UtilitiesService } from 'src/app/core/service/utilities.service';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
};
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public cardChart1: any;
  public cardChart1Data: any;
  public cardChart1Label: any;

  public cardChart2: any; 
  public cardChart2Data: any;
  public cardChart2Label: any;

  public cardChart3: any;
  public cardChart3Data: any;
  public cardChart3Label: any;

  public cardChart4: any;
  public cardChart4Data: any;
  public cardChart4Label: any;

  public areaChartOptions: Partial<ChartOptions>;
  public barChartOptions: Partial<ChartOptions>;

  modalRef: BsModalRef;
    user: any = {};
    itemToSearch: any = {};
    busyGet: Subscription
    data = [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
    highchart: any
    items: any;
    bsRangeValue: Date[];
    minDate = new Date();
    maxDate = new Date();
    currentDate = new Date();
    totalSecteurs = 0
    totalControleurs = 0
    totalHospit: any;
    itemsSecteur: any;
    userImg:any
    colors = ['#236CB7', '#644033', '#A08377', '#C3BEB7', '#9F7417', '#644033', '#F7B400', '#A08377', '#C3BEB7', '#9F7417', '#644033', '#F7B400', '#A08377', '#C3BEB7', '#9F7417', '#644033', '#F7B400', '#A08377', '#C3BEB7', '#9F7417', '#644033', '#F7B400', '#A08377', '#C3BEB7', '#9F7417'];


      constructor(private httpClient:HttpClient,private authService: AuthService, private restClient: RestClientService, private modalService: BsModalService, private utilities: UtilitiesService) {
        this.user = 1
        // this.maxDate.setDate(this.currentDate.getDate()+30);
        // this.minDate.setDate(this.currentDate.getDate()-30);
        let now = new Date();
        let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
        let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

        this.minDate = firstDay
        this.maxDate = lastDay





        
    }

  ngOnInit() {
    
    this.smallChart1();
    this.smallChart2();
    this.smallChart3();
    this.smallChart4();
    this.chart1();
    this.chart2();
  }

  private smallChart1() {
    this.cardChart1 = {
      responsive: true,
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
      title: {
        display: false,
      },
    };
    this.cardChart1Data = [
      {
        label: 'New Patients',
        data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62],
        borderWidth: 4,
        pointStyle: 'circle',
        pointRadius: 4,
        borderColor: 'rgba(103,119,239,.7)',
        pointBackgroundColor: 'rgba(103,119,239,.2)',
        backgroundColor: 'rgba(103,119,239,.2)',
        pointBorderColor: 'transparent',
      },
    ];
    this.cardChart1Label = [
      '16-07-2018',
      '17-07-2018',
      '18-07-2018',
      '19-07-2018',
      '20-07-2018',
      '21-07-2018',
      '22-07-2018',
      '23-07-2018',
      '24-07-2018',
      '25-07-2018',
      '26-07-2018',
      '27-07-2018',
      '28-07-2018',
      '29-07-2018',
      '30-07-2018',
      '31-07-2018',
    ];
  }
  private smallChart2() {
    this.cardChart2 = {
      responsive: true,
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
      title: {
        display: false,
      },
    };
    this.cardChart2Data = [
      {
        label: 'New Patients',
        data: [50, 61, 80, 50, 40, 93, 63, 50, 62, 72, 52, 60, 41, 30, 45, 70],
        borderWidth: 4,
        pointStyle: 'circle',
        pointRadius: 4,
        borderColor: 'rgba(253,126,20,.7)',
        pointBackgroundColor: 'rgba(253,126,20,.2)',
        backgroundColor: 'rgba(253,126,20,.2)',
        pointBorderColor: 'transparent',
      },
    ];
    this.cardChart2Label = [
      '16-07-2018',
      '17-07-2018',
      '18-07-2018',
      '19-07-2018',
      '20-07-2018',
      '21-07-2018',
      '22-07-2018',
      '23-07-2018',
      '24-07-2018',
      '25-07-2018',
      '26-07-2018',
      '27-07-2018',
      '28-07-2018',
      '29-07-2018',
      '30-07-2018',
      '31-07-2018',
    ];
  }
  private smallChart3() {
    this.cardChart3 = {
      responsive: true,
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
      title: {
        display: false,
      },
    };
    this.cardChart3Data = [
      {
        label: 'New Patients',
        data: [52, 60, 41, 30, 45, 70, 50, 61, 80, 50, 72, 40, 93, 63, 50, 62],
        borderWidth: 4,
        pointStyle: 'circle',
        pointRadius: 4,
        borderColor: 'rgba(40,167,69,.7)',
        pointBackgroundColor: 'rgba(40,167,69,.2)',
        backgroundColor: 'rgba(40,167,69,.2)',
        pointBorderColor: 'transparent',
      },
    ];
    this.cardChart3Label = [
      '16-07-2018',
      '17-07-2018',
      '18-07-2018',
      '19-07-2018',
      '20-07-2018',
      '21-07-2018',
      '22-07-2018',
      '23-07-2018',
      '24-07-2018',
      '25-07-2018',
      '26-07-2018',
      '27-07-2018',
      '28-07-2018',
      '29-07-2018',
      '30-07-2018',
      '31-07-2018',
    ];
  }
  private smallChart4() {
    this.cardChart4 = {
      responsive: true,
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
      title: {
        display: false,
      },
    };
    this.cardChart4Data = [
      {
        label: 'New Patients',
        data: [30, 45, 70, 40, 93, 63, 50, 62, 50, 61, 80, 50, 72, 52, 60, 41],
        borderWidth: 4,
        pointStyle: 'circle',
        pointRadius: 4,
        borderColor: 'rgba(0,123,255,.7)',
        pointBackgroundColor: 'rgba(0,123,255,.2)',
        backgroundColor: 'rgba(0,123,255,.2)',
        pointBorderColor: 'transparent',
      },
    ];
    this.cardChart4Label = [
      '16-07-2018',
      '17-07-2018',
      '18-07-2018',
      '19-07-2018',
      '20-07-2018',
      '21-07-2018',
      '22-07-2018',
      '23-07-2018',
      '24-07-2018',
      '25-07-2018',
      '26-07-2018',
      '27-07-2018',
      '28-07-2018',
      '29-07-2018',
      '30-07-2018',
      '31-07-2018',
    ];
  }
  private chart1() {
    this.areaChartOptions = {
      series: [
        {
          name: 'New Patients',
          data: [31, 40, 28, 51, 42, 85, 77],
        },
        {
          name: 'Old Patients',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
        foreColor: '#9aa0ac',
      },
      colors: ['#407fe4', '#908e8e'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: [
          '2018-09-19',
          '2018-09-20',
          '2018-09-21',
          '2018-09-22',
          '2018-09-23',
          '2018-09-24',
          '2018-09-25',
        ],
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'center',
        offsetX: 0,
        offsetY: 0,
      },

      tooltip: {
        theme: 'dark',
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }
  private chart2() {
    this.barChartOptions = {
      series: [
        {
          name: 'Colds and Flu',
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: 'Headaches',
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: 'Malaria',
          data: [11, 17, 15, 15, 21, 14],
        },
        {
          name: 'Typhoid',
          data: [21, 7, 25, 13, 22, 8],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
        foreColor: '#9aa0ac',
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: 'category',
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 0.8,
        colors: ['#01B8AA', '#374649', '#FD625E', '#F2C80F'],
      },
      tooltip: {
        theme: 'dark',
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }




  getVistesByMonth() {
    let request = {
        user: this.user.id,
        data: this.itemToSearch
    }
    console.log('res: ', request);

    this.busyGet = this.restClient.post('kpi/getVitesByMonth', request).subscribe({
        next: (res: any) => {
            console.log('res here', res);

            if (res && res.items && !res.hasError) {
                this.items = res.items;
            }
            else {
                this.items = [];
                if (res.hasError) {
                    this.utilities.showNotification("snackbar-danger",
                        this.utilities.formatMsgServeur(res.status.message),
                        "top",
                        "right");
                    return
                }
            }
            this.drawBarChart(this.items)


        },
        error: (err) => {

            this.utilities.showNotification("snackbar-danger",
                this.utilities.formatMsgServeur(err),
                "top",
                "right");
        },
        complete: () => console.info('complete')
    })
}



drawBarChart(datas) {
  let itemToDraw = []
  let itemToDrawFull = []

  let categories = []


  datas.map(d => {
      itemToDraw.push(d.value)
      itemToDrawFull.push(d.valueFull)
      categories.push(moment(d.key).format('MM/YY'))
  })
  console.log('to draw: ', itemToDraw);

  this.highchart = new Chart({
      chart: {
          type: 'column'
      },
      title: {
          text: ''
      },
      credits: {
          enabled: false
      },
      xAxis: {
          categories: categories,
          crosshair: true
      },
      plotOptions: {
          column: {
              dataLabels: {
                  enabled: true
              }
          }
      },
      colors: this.colors,
      series: [

          {
              type: 'column',
              name: 'Visites',
              data: itemToDraw
          },
          {
              type: 'column',
              name: 'Hospit',
              data: itemToDrawFull
          },


      ]
  });
}




}
