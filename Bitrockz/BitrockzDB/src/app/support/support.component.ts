import { Component, OnInit } from '@angular/core';
import { Chart, StockChart } from 'angular-highcharts';
import { ViewChild, ElementRef } from '@angular/core';

declare var require: any;
const Highcharts = require('highcharts/highstock');

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent  {

  name = 'Angular 7 Highstock';
  @ViewChild("container", { read: ElementRef }) container: ElementRef;
  pair_from: String;
  pair_to: String;
  passingObject: any = "";
  temp: any;
  time: any;
  candleData: any[] = [];
  chart: any;
  
  


  ngAfterViewInit() {
      

      Highcharts.setOptions({
          lang: {
              rangeSelectorZoom: ''
          }
      });


      this.chart = new Highcharts.stockChart(this.container.nativeElement, {

        chart: {
              backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
              stops: [
                  [0, '#12161a'],
                  [1, '#12161a']
                ]
            },
           
            style: {
                 fontFamily: '\'Unica One\', sans-serif',
             },

             plotBorderColor: '#606063'
        },

        xAxis: {
          gridLineColor: '#707073',
          labels: {
              style: {
                  color: '#E0E0E3'
              }
          },
          lineColor: '#707073',
          minorGridLineColor: '#505053',
          tickColor: '#707073',
          title: {
              style: {
                  color: '#A0A0A3'
    
              }
          }
        },

        scrollbar: {
            barBackgroundColor: 'gray',
            barBorderRadius: 7,
            barBorderWidth: 0,
            buttonBackgroundColor: '#A0A0A3',
            buttonBorderWidth: 0,
            buttonBorderRadius: 7,
            trackBackgroundColor: '#CCC',
            trackBorderWidth: 1,
            trackBorderRadius: 8,
            trackBorderColor: '#CCC'
        },

        rangeSelector: {
              selected: 1,
              buttonTheme: {
                fill: '#505053',
                stroke: '#000000',
                style: {
                    color: '#CCC'
                },
              states: {
                  hover: {
                      fill: '#707073',
                      stroke: '#000000',
                      style: {
                          color: 'white'
                      }
                  },
              select: {
                    fill: '#000003',
                    stroke: '#000000',
                    style: {
                    color: 'white'
                }
              },
            },
          },
        },

        plotOptions: {
            candlestick: {
                color: '#ee6560',
                upColor: '#4db872'
            },
            column: {
                color: '#ea0070'
            }
          },
          

        yAxis: [{

            labels: {
                align: 'right',
                x: -4,
                style: {
                    color: '#E0E0E3'
                }
            },

            title: {
                text: 'BTC/LTC',
                style: {
                color: 'silver'
                }
            },

            lineColor: '#707073',
            minorGridLineColor: '#505053',
            tickColor: '#707073',
            tickWidth: 1,
            gridLineColor: '#707073',
            height: '60%',
            lineWidth: 2,
            resize: {
                enabled: true
            },
          },
            {
            labels: {
                align: 'right',
            },

            title: {
                text: 'Volume'
            },

            top: '65%',
            height: '35%',
            offset: 0,
            lineWidth: 2
            }
        ],
        
        tooltip: {
            split: true,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            style: {
            color: '#F0F0F0'
          }
        },

        series: [{
            type: 'candlestick',
            name: 'BTC/LTC',
            data:[
                [
                    1513693800000,
                    175.03,
                    175.39,
                    174.09,
                    174.54,
                    27436400
                ],
                [
                    1513780200000,
                    174.87,
                    175.42,
                    173.25,
                    174.35,
                    23475600
                ],
                [
                    1513866600000,
                    174.17,
                    176.02,
                    174.1,
                    175.01,
                    20949900
                ],
                [
                    1513953000000,
                    174.68,
                    175.42,
                    174.5,
                    175.01,
                    16114600
                ],
                [
                    1514298600000,
                    170.8,
                    171.47,
                    169.68,
                    170.57,
                    33185500
                ],
                [
                    1514385000000,
                    170.1,
                    170.78,
                    169.71,
                    170.6,
                    21498200
                ],
                [
                    1514471400000,
                    171,
                    171.85,
                    170.48,
                    171.08,
                    16480200
                ],
                [
                    1514557800000,
                    170.52,
                    170.59,
                    169.22,
                    169.23,
                    25884400
                ],
                [
                    1514903400000,
                    170.16,
                    172.3,
                    169.26,
                    172.26,
                    25555900
                ],
                [
                    1514989800000,
                    172.53,
                    174.55,
                    171.96,
                    172.23,
                    29517900
                ],
                [
                    1515076200000,
                    172.54,
                    173.47,
                    172.08,
                    173.03,
                    22434600
                ],
                [
                    1515162600000,
                    173.44,
                    175.37,
                    173.05,
                    175,
                    23660000
                ],
                [
                    1515421800000,
                    174.35,
                    175.61,
                    173.93,
                    174.35,
                    20567800
                ],
                [
                    1515508200000,
                    174.55,
                    175.06,
                    173.41,
                    174.33,
                    21584000
                ],
                [
                    1515594600000,
                    173.16,
                    174.3,
                    173,
                    174.29,
                    23959900
                ],
                [
                    1515681000000,
                    174.59,
                    175.49,
                    174.49,
                    175.28,
                    18667700
                ],
                [
                    1515767400000,
                    176.18,
                    177.36,
                    175.65,
                    177.09,
                    25226000
                ],
                [
                    1516113000000,
                    177.9,
                    179.39,
                    176.14,
                    176.19,
                    29565900
                ],
                [
                    1516199400000,
                    176.15,
                    179.25,
                    175.07,
                    179.1,
                    34386800
                ],
                [
                    1516285800000,
                    179.37,
                    180.1,
                    178.25,
                    179.26,
                    31193400
                ],
                [
                    1516372200000,
                    178.61,
                    179.58,
                    177.41,
                    178.46,
                    32425100
                ],
                [
                    1516631400000,
                    177.3,
                    177.78,
                    176.6,
                    177,
                    27108600
                ],
                [
                    1516717800000,
                    177.3,
                    179.44,
                    176.82,
                    177.04,
                    32689100
                ],
                [
                    1516804200000,
                    177.25,
                    177.3,
                    173.2,
                    174.22,
                    51105100
                ],
                [
                    1516890600000,
                    174.51,
                    174.95,
                    170.53,
                    171.11,
                    41529000
                ],
                [
                    1516977000000,
                    172,
                    172,
                    170.06,
                    171.51,
                    39143000
                ],
                [
                    1517236200000,
                    170.16,
                    170.16,
                    167.07,
                    167.96,
                    50640400
                ],
                [
                    1517322600000,
                    165.53,
                    167.37,
                    164.7,
                    166.97,
                    46048200
                ],
                [
                    1517409000000,
                    166.87,
                    168.44,
                    166.5,
                    167.43,
                    32478900
                ],
              ],
                
                    
            dataGrouping: {
                units: [
                    [
                      'week', 
                      [1] 
                    ], 
                    [
                      'month',
                      [1]
                    ],
                    
                 ]
               } 
            },{
              
            type: 'column',
            name: 'Volume',
            data:[
              [
                1513693800000,
                175.03,
                175.39,
                174.09,
                174.54,
                27436400
            ],
            [
                1513780200000,
                174.87,
                175.42,
                173.25,
                174.35,
                23475600
            ],
            [
                1513866600000,
                174.17,
                176.02,
                174.1,
                175.01,
                20949900
            ],
            [
                1513953000000,
                174.68,
                175.42,
                174.5,
                175.01,
                16114600
            ],
            [
                1514298600000,
                170.8,
                171.47,
                169.68,
                170.57,
                33185500
            ],
            [
                1514385000000,
                170.1,
                170.78,
                169.71,
                170.6,
                21498200
            ],
            [
                1514471400000,
                171,
                171.85,
                170.48,
                171.08,
                16480200
            ],
            [
                1514557800000,
                170.52,
                170.59,
                169.22,
                169.23,
                25884400
            ],
            [
                1514903400000,
                170.16,
                172.3,
                169.26,
                172.26,
                25555900
            ],
            [
                1514989800000,
                172.53,
                174.55,
                171.96,
                172.23,
                29517900
            ],
            [
                1515076200000,
                172.54,
                173.47,
                172.08,
                173.03,
                22434600
            ],
            [
                1515162600000,
                173.44,
                175.37,
                173.05,
                175,
                23660000
            ],
            [
                1515421800000,
                174.35,
                175.61,
                173.93,
                174.35,
                20567800
            ],
            [
                1515508200000,
                174.55,
                175.06,
                173.41,
                174.33,
                21584000
            ],
            [
                1515594600000,
                173.16,
                174.3,
                173,
                174.29,
                23959900
            ],
            [
                1515681000000,
                174.59,
                175.49,
                174.49,
                175.28,
                18667700
            ],
            [
                1515767400000,
                176.18,
                177.36,
                175.65,
                177.09,
                25226000
            ],
            [
                1516113000000,
                177.9,
                179.39,
                176.14,
                176.19,
                29565900
            ],
            [
                1516199400000,
                176.15,
                179.25,
                175.07,
                179.1,
                34386800
            ],
            [
                1516285800000,
                179.37,
                180.1,
                178.25,
                179.26,
                31193400
            ],
            [
                1516372200000,
                178.61,
                179.58,
                177.41,
                178.46,
                32425100
            ],
            [
                1516631400000,
                177.3,
                177.78,
                176.6,
                177,
                27108600
            ],
            [
                1516717800000,
                177.3,
                179.44,
                176.82,
                177.04,
                32689100
            ],
            [
                1516804200000,
                177.25,
                177.3,
                173.2,
                174.22,
                51105100
            ],
            [
                1516890600000,
                174.51,
                174.95,
                170.53,
                171.11,
                41529000
            ],
            [
                1516977000000,
                172,
                172,
                170.06,
                171.51,
                39143000
            ],
            [
                1517236200000,
                170.16,
                170.16,
                167.07,
                167.96,
                50640400
            ],
            [
                1517322600000,
                165.53,
                167.37,
                164.7,
                166.97,
                46048200
            ],
            [
                1517409000000,
                166.87,
                168.44,
                166.5,
                167.43,
                32478900
            ],
            ],
            
            yAxis: 1,
            dataGrouping: {
                units: [
                    [
                      'week', 
                      [1]
                    ], 
                    [
                      'month',
                      [1]
                    ],
                ]
              }
            }
         ],  
      })
    }
}