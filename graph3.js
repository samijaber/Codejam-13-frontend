// Wrapping in nv.addGraph allows for '0 timeout render', stores rendered charts in nv.graphs, and may do more in the future... it's NOT required
var chart3;
var tickMarks3 = [];

nv.addGraph(function() {
  chart3 = nv.models.lineChart()
  .options({
    margin: {left: 100, bottom: 100},
    //x: function(d,i) { return i},
    showXAxis: true,
    showYAxis: true,
    transitionDuration: 250
  }).showLegend(false)
  ;

  // chart3 sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart3, so need to chain separately
    chart3.xAxis
         .axisLabel('Date')
         .rotateLabels(-65)
         .tickValues(tickMarks3)
         .tickFormat(function(d) { 
          var date = new Date(d);
          var date2 = new Date(d);

          if(date.getMinutes() == 0) {
            if(date2.getHours == 0) { 
              date2.setHours(23);
            }
            else { 
              date2.setHours(date.getHours() - 1);
            }            
            date2.setMinutes(45);
          }
          else {
            date2.setMinutes(date.getMinutes() - 15);
          }

          return (d3.time.format('%m/%d, ')(date2) +
          d3.time.format('%H:%M')(date2) + 
          "-" + 
          d3.time.format('%H:%M')(date)); 

        });

    //.tickFormat(d3.format(',.1f'));
     // .tickFormat(function(d) {
     //   var date = new Date(d);
     //   return date;
     // });

    //.tickFormat(function(d) { return d3.time.format('%b %d')(new Date(d)); })



  chart3.yAxis
    .axisLabel('Energy Consumption (kWh)')
    .tickFormat(d3.format(',.2f'))
    ;

  d3.select('#chart3 svg')
    .datum(populate3())
    .call(chart3);

  //TODO: Figure out a good way to do this automatically
  nv.utils.windowResize(chart3.update);
  //nv.utils.windowResize(function() { d3.select('#chart1 svg').call(chart3) });

  chart3.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

  return chart3;
});

function populate3() {
  var arr = [];

  for (var i = 0; i < data.length; i++) {
      arr.push({x: new Date(data[i][0]), y: data[i][1]});
  };

  for (var i = 0; i < arr.length; i+=4) {
    tickMarks3.push(arr[i].x);
  };

  updateCard3(arr[arr.length - 1].y);

  return [{
      values: arr,
      key: "Past Month's Consumption",
      color: "#667711"
    }];
}


function updateCard3(currUsage) {
  currUsage =  Math.floor(currUsage * 1000) / 1000;
  $('#card3').text("Current energy consumption at McGill University is " + currUsage + " kWh.");
}
