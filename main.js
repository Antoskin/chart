var data = {
  labels: ["пн", "вт", "ср", "чт", "пт", "сб", "вс","пн", "вт", "ср", "чт", "пт", "сб", "вс","пн", "вт", "ср", "чт", "пт", "сб", "вс","пн", "вт", "ср", "чт", "пт", "сб", "вс","пн", "вт", "ср"],
  datasets: [{
            label: "Головна",
            backgroundColor: 'transparent',
             borderColor: '#00a65a',
             borderWidth: 2,
             pointBorderWidth: 0,
             pointBackgroundColor: '#00a65a',
             pointHoverBorderWidth: 2,
             pointRadius: 2,
             
             // pointHoverBorderColor: '#33c117',
            data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3,2, 2, 1, 2, 3, 4, 5,6, 7, 8, 9, 10, 5, 4, 2, 1, 0], 
        }
        ,{
            label: "Сніданки",
            backgroundColor: 'transparent',
            borderColor: '#069fd8',
            borderWidth: 2,
             pointBackgroundColor: '#069fd8',
             pointHoverBorderWidth: 2,
            pointRadius: 2,
            data: [7, 8, 9, 11, 9, 8, 7,7, 5, 9, 5, 4, 4, 3,2, 2, 2, 1, 4, 4, 5,6, 7, 8, 9, 4, 3, 3,2, 1, 0]
        },{
            label: "Бізнес-ланчі",
            backgroundColor: 'transparent',
             borderColor: '#e9a209',
             borderWidth: 2,
              pointBackgroundColor: '#e9a209',
             pointHoverBorderWidth: 2,
             pointRadius: 2,
             // pointHoverBorderColor: '#33c117',
            data: [1, 2, 7, 8, 9, 10, 11, 10, 9, 8, 7, 6, 5,4, 1, 6, 2, 18, 13, 20,14, 1, 6, 2, 18, 13, 14, 1, 6, 2, 18],
        },{
            label: "Ресторани",
            backgroundColor: 'transparent',
             borderColor: '#ed5a56',
             borderWidth: 2,
              pointBackgroundColor: '#ed5a56',
             pointHoverBorderWidth: 2,
            pointRadius: 2,
            data: [21, 2, 7, 24, 5, 4, 11,21, 2, 7, 24, 5, 4, 11,21, 2, 7, 24, 5, 4, 11, 21, 2, 7, 24, 5, 4, 11,21, 2, 7],
        },{
            label: "Афіши",
            backgroundColor: 'transparent',
             borderColor: '#ed76d5',
             borderWidth: 2,
              pointBackgroundColor: '#ed76d5',
             pointHoverBorderWidth: 2,
             pointRadius: 2,
            data: [1, 17, 4, 1, 32, 33, 4, 17, 4, 1, 32, 33, 4, 1, 17, 4, 1, 32, 33, 4,  1, 17, 4, 1, 32, 33, 4, 17, 4, 1],
        },{
            label: "Акції",
            backgroundColor: 'transparent',
             borderColor: '#00a63e',
             borderWidth: 2,
              pointBackgroundColor: '#00a63e',
             pointHoverBorderWidth: 2,
            pointRadius: 2,
            data: [3, 36, 7, 11, 28, 40, 4, 13, 3, 7, 11, 8, 4, 41,3, 6, 7, 11, 28, 40, 41, 3, 36, 7, 11, 28, 40, 4, 13, 3, 7, 11],
        },{
            label: "Резерв",
            backgroundColor: 'transparent',
             borderColor: '#35489e',
             borderWidth: 2,
              pointBackgroundColor: '#35489e',
             pointHoverBorderWidth: 2,
             pointRadius: 2,
            data: [1, 7, 2, 4, 11, 17, 1,1, 7, 2, 4, 11, 17, 1,1, 7, 2, 4, 11, 17, 1, 1, 7, 2, 4, 11, 17, 1,1, 7, 2],
        },{
            label: "Доставка",
            backgroundColor: 'transparent',
             borderColor: '#bd1388',
             borderWidth: 2,
              pointBackgroundColor: '#bd1388',
             pointHoverBorderWidth: 2,
             pointRadius: 2,
            data: [1, 7, 18, 2, 3, 4, 5,1, 7, 18, 2, 3, 4, 5,1, 7, 18, 2, 3, 4, 5, 1, 7, 18, 2, 3, 4, 5,1, 7, 18],
        },{
            label: "Всього",
            backgroundColor: 'transparent',
             borderColor: '#BF198B',
             borderWidth: 2,
              pointBackgroundColor: '#BF198B',
             pointHoverBorderWidth: 2,
             pointRadius: 2,
            data: [56, 56, 56, 71, 56, 56, 56,56, 56, 56, 77, 56, 56, 56,56, 56, 56, 87, 56, 56, 100 ,56, 56, 56, 71, 56, 56, 56,56, 56, 56] 
        }]
};

var options = {
  animation: {
    animateRotate: true,
    animateScale: true
  },
  cutoutPercentage: 85,
  legend: false,
  legendCallback: function(chart) {
    var text = [];
    for (var i = 0; i < chart.data.datasets.length; i++) {
       text.push('<div class="point'+i+'"><input id="box'+i+'" type="checkbox" class="boxer" data-id='+i+'><label for="box'+i+'"></label>');
       if(chart.data.datasets[i].label) {
          text.push(chart.data.datasets[i].label);
       }
      text.push('</div>');
    }
    return text.join("");
  },

  tooltips: {
    mode: 'single',

    borderColor: 'silver',
    bodyFontColor: '#000',
    borderWidth: 1,
    caretPadding: 10,
    
    mode: 'point',
    backgroundColor: '#fff',
    bodyFontColor: '#000',
    bodyFontFamily: 'Fira Sans',
    yPadding: 8,
    //caretSize: 5, //клюв

   
    //delite quatr
    custom: function(tooltip) {
            if (!tooltip) return;
              tooltip.displayColors = false;
          },
    callbacks: {
            label: function(tooltipItem, data) {
                return Number(tooltipItem.yLabel) + " Переглядiв";
            },
            // remove title
            title: function(tooltipItem, data) {
              return;
            },
            labelColor: function(tooltipItem, chart) {
                    return {
                    }
            }
        }
  }

  // tooltips: {
  //           enabled: false, //hide def tooltip
  //           bodyFontFamily: 'Fira Sans',
  //           // remove title
  //           callbacks: {
  //               label: function(tooltipItem, data) {
  //                   return Number(tooltipItem.yLabel) + " Переглядiв";
  //               },
  //               // remove title
  //               title: function(tooltipItem, data) {
  //                 return;
  //               },
  //           },
  //           custom: function(tooltipModel) {
  //               // Tooltip Element
  //               var tooltipEl = document.getElementById('chartjs-tooltip');

  //               // Create element on first render
  //               if (!tooltipEl) {
  //                   tooltipEl = document.createElement('div');
  //                   tooltipEl.id = 'chartjs-tooltip';
  //                   tooltipEl.innerHTML = "<table></table>";
  //                   document.body.appendChild(tooltipEl);
  //                   // $('#chart').append()
  //               }

  //               // Hide if no tooltip
  //               if (tooltipModel.opacity === 0) {
  //                   tooltipEl.style.opacity = 0;
  //                   tooltipEl.style.zIndex = -1;
  //                   return;
  //               }

  //               // Set caret Position
  //               tooltipEl.classList.remove('above', 'below', 'no-transform');
  //               if (tooltipModel.yAlign) {
  //                   tooltipEl.classList.add(tooltipModel.yAlign);
  //               } else {
  //                   tooltipEl.classList.add('no-transform');
  //               }

  //               function getBody(bodyItem) {
  //                   return bodyItem.lines;
  //               }

  //               // Set Text
  //               if (tooltipModel.body) {
  //                   var titleLines = tooltipModel.title || [];
  //                   var bodyLines = tooltipModel.body.map(getBody);

  //                   var innerHtml = '<thead>';

  //                   titleLines.forEach(function(title) {
  //                       innerHtml += '<tr><th>' + title + '</th></tr>';
  //                   });
  //                   innerHtml += '</thead><tbody>';

  //                   bodyLines.forEach(function(body, i) {
  //                       var colors = tooltipModel.labelColors[i];
  //                       var style = 'background:' + colors.backgroundColor;
  //                       style += '; border-color:' + colors.borderColor;
  //                       style += '; border-width: 2px';
  //                       var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
  //                       innerHtml += '<tr><td>' + span + body + '</td></tr>';
  //                   });
  //                   innerHtml += '</tbody>';

  //                   var tableRoot = tooltipEl.querySelector('table');
  //                   tableRoot.innerHTML = innerHtml;
  //               }

  //               // `this` will be the overall tooltip
  //               var position = this._chart.canvas.getBoundingClientRect();

  //               // Display, position, and set styles for font
  //               tooltipEl.style.opacity = 1;
  //               tooltipEl.style.zIndex = 9999;
  //               tooltipEl.style.left = position.left + tooltipModel.caretX + 'px';
  //               tooltipEl.style.top = position.top + tooltipModel.caretY + 'px';
  //               tooltipEl.style.fontFamily = tooltipModel._fontFamily;
  //               tooltipEl.style.fontSize = tooltipModel.fontSize;
  //               tooltipEl.style.fontStyle = tooltipModel._fontStyle;
  //               tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
  //           }
  //       } 

}
var ctx = $("#myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});

$("#chartjs-legend").html(myChart.generateLegend());
$(".boxer").attr('checked', true);
$(".top-line,.bot-line,.toppest-single-all").on('change', ".boxer", function() {
  var num = $(this).attr('data-id');
  var chk = $(this).attr('checked');
    if(chk) {
      myChart.data.datasets[num].hidden = true;//data[i] += 'visible';
      $(this).attr('checked', false);
    } else {
      myChart.data.datasets[num].hidden = false;//data[i] += 'visible';
      $(this).attr('checked', true);
    }
   myChart.update();
   console.log(myChart.data.datasets[num]);
});

// var j = $('#chartjs-legend input')[5].before("<div></div>");
$('.toppest-single-all').prepend($('.point8'));

$('.top-line').prepend($('.point3'));
$('.top-line').prepend($('.point2'));
$('.top-line').prepend($('.point1'));
$('.top-line').prepend($('.point0'));

$('.bot-line').prepend($('.point7'));
$('.bot-line').prepend($('.point6'));
$('.bot-line').prepend($('.point5'));
$('.bot-line').prepend($('.point4'));

















/*buble*/
var data1 = {
  labels: [
    "Головна",
    "Сніданки",
    "Бізнес-ланчі",
    "Ресторани",
    "Афіши",
    "Акції",
    "Резерв",
    "Доставка"
  ],
  datasets: [{
    data: [3,2,4,3,2,4,3,2],
    backgroundColor: [
      "#000",//"#00a65a",
      "#069fd8",
      "#e9a209",
      "#ed5a56",
      "#ed76d5",
      "#00a63e",
      "#35489e",
      "#bd1388",
    ],
    hoverBackgroundColor: [
      // "#FF6384",
      // "#36A2EB",
      // "#FFCE56"
    ],
    borderWidth: 1
  }]
};

var options1 = {
  animation: {
    animateRotate: true,
    animateScale: true
  },
  cutoutPercentage: 65,
  legend: false,
  legendCallback: function(chart) {
    var text = [];
    text.push('<ul class="' + chart.id + '-legend">');
    for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
      text.push('<li><span class="bubble' + i + '"data-show="true" data-id-boble="' + i + '" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
      if (chart.data.labels[i]) {
        text.push(chart.data.labels[i]);
      }
      text.push('</li>');
    }
    text.push('</ul>');
    return text.join("");
  },
  tooltips: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'silver',
    bodyFontColor: '#000',
    custom: function(tooltip) {
            if (!tooltip) return;
              tooltip.displayColors = false;
          },
    mode: 'single',
    callbacks: {
      label: function(tooltipItems, data) {
        var sum = data.datasets[0].data.reduce(add, 0);
        function add(a, b) {
          return a + b;
        }

        return parseInt((data.datasets[0].data[tooltipItems.index] / sum * 100), 10) + ' %';
      },
      // beforeLabel: function(tooltipItems, data) {
      //   return data.datasets[0].data[tooltipItems.index] + ' hrs';
      // }
    }
  }
}

var ctx = $("#myChart1");
var myChart1 = new Chart(ctx, {
  type: 'doughnut',
  data: data1,
  options: options1
});

$("#chartjs-legend1").html(myChart1.generateLegend());
$("#chartjs-legend1").on('change', "span", function() {
    if($(this).attr('data-show') == 'true'){
      myChart1.data.datasets[0].data[$(this).attr('data-id-boble')] += 'hidden';
      $(this).attr('data-show','false');
    } else {
      myChart1.data.datasets[0].data[$(this).attr('data-id-boble')] -= 'hidden';
      $(this).attr('data-show','true');
    }
    //console.log(myChart1.data.datasets[0].data[$(this).index()]);
  $(this).css({'background-color' : '#f2efef'});
    myChart1.update();
});

