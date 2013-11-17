// Wrapping in nv.addGraph allows for '0 timeout render', stores rendered charts in nv.graphs, and may do more in the future... it's NOT required
var chart2;
var iso = d3.time.format.utc("%Y-%m-%dT%H:%M:%S.%LZ");
var tickMarks = [];
var arr2 = [];

nv.addGraph(function() {
  chart2 = nv.models.lineChart()
  .options({
    margin: {left: 100, bottom: 100},
    //x: function(d,i) { return i},
    showXAxis: true,
    showYAxis: true,
    transitionDuration: 250
  })
  ;

  // chart2 sub-models (ie. xAxis, yAxis, etc) when accessed directly, return themselves, not the parent chart2, so need to chain separately
    chart2.xAxis
         .axisLabel('Date')
         .rotateLabels(-65)
         .tickValues(tickMarks)
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



  chart2.yAxis
    .axisLabel('Voltage (v)')
    .tickFormat(d3.format(',.2f'))
    ;

  d3.select('#chart2 svg')
    .datum(populate2())
    .call(chart2);

  //TODO: Figure out a good way to do this automatically
  nv.utils.windowResize(chart2.update);
  //nv.utils.windowResize(function() { d3.select('#chart1 svg').call(chart2) });

  chart2.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

  return chart2;
});

function populate2() {
  var arr = [];
  
  arr.push({x: new Date(2013, 11 -1, 09, 08, 00, 00, 00), y: 14369.872});
  arr.push({x: new Date(2013, 11 -1, 09, 08, 15, 00, 00), y: 14425.662});
  arr.push({x: new Date(2013, 11 -1, 09, 08, 30, 00, 00), y: 14467.903});
  arr.push({x: new Date(2013, 11 -1, 09, 08, 45, 00, 00), y: 14563.201});
  arr.push({x: new Date(2013, 11 -1, 09, 09, 00, 00, 00), y: 14780.018});
  arr.push({x: new Date(2013, 11 -1, 09, 09, 15, 00, 00), y: 14758.391});
  arr.push({x: new Date(2013, 11 -1, 09, 09, 30, 00, 00), y: 14759.164});
  arr.push({x: new Date(2013, 11 -1, 09, 09, 45, 00, 00), y: 14866.025});
  arr.push({x: new Date(2013, 11 -1, 09, 10, 00, 00, 00), y: 15173.152});
  arr.push({x: new Date(2013, 11 -1, 09, 10, 15, 00, 00), y: 15218.152});
  arr.push({x: new Date(2013, 11 -1, 09, 10, 30, 00, 00), y: 15248.415});
  arr.push({x: new Date(2013, 11 -1, 09, 10, 45, 00, 00), y: 15310.935});
  arr.push({x: new Date(2013, 11 -1, 09, 11, 00, 00, 00), y: 15529.061});
  arr.push({x: new Date(2013, 11 -1, 09, 11, 15, 00, 00), y: 15641.979});
  arr.push({x: new Date(2013, 11 -1, 09, 11, 30, 00, 00), y: 15598.05});
  arr.push({x: new Date(2013, 11 -1, 09, 11, 45, 00, 00), y: 15753.887});
  arr.push({x: new Date(2013, 11 -1, 09, 12, 00, 00, 00), y: 15777.439});
  arr.push({x: new Date(2013, 11 -1, 09, 12, 15, 00, 00), y: 15801.726});
  arr.push({x: new Date(2013, 11 -1, 09, 12, 30, 00, 00), y: 15856.039});
  arr.push({x: new Date(2013, 11 -1, 09, 12, 45, 00, 00), y: 15815.965});
  arr.push({x: new Date(2013, 11 -1, 09, 13, 00, 00, 00), y: 15824.856});
  arr.push({x: new Date(2013, 11 -1, 09, 13, 15, 00, 00), y: 15764.931});
  arr.push({x: new Date(2013, 11 -1, 09, 13, 30, 00, 00), y: 15743.37});
  arr.push({x: new Date(2013, 11 -1, 09, 13, 45, 00, 00), y: 15800.409});
  arr.push({x: new Date(2013, 11 -1, 09, 14, 00, 00, 00), y: 15788.381});
  arr.push({x: new Date(2013, 11 -1, 09, 14, 15, 00, 00), y: 15678.741});
  arr.push({x: new Date(2013, 11 -1, 09, 14, 30, 00, 00), y: 15677.23});
  arr.push({x: new Date(2013, 11 -1, 09, 14, 45, 00, 00), y: 15817.903});
  arr.push({x: new Date(2013, 11 -1, 09, 15, 00, 00, 00), y: 15888.88});
  arr.push({x: new Date(2013, 11 -1, 09, 15, 15, 00, 00), y: 15845.501});
  arr.push({x: new Date(2013, 11 -1, 09, 15, 30, 00, 00), y: 15926.713});
  arr.push({x: new Date(2013, 11 -1, 09, 15, 45, 00, 00), y: 15922.235});
  arr.push({x: new Date(2013, 11 -1, 09, 16, 00, 00, 00), y: 15684.123});
  arr.push({x: new Date(2013, 11 -1, 09, 16, 15, 00, 00), y: 15657.75});
  arr.push({x: new Date(2013, 11 -1, 09, 16, 30, 00, 00), y: 15808.328});
  arr.push({x: new Date(2013, 11 -1, 09, 16, 45, 00, 00), y: 15922.424});
  arr.push({x: new Date(2013, 11 -1, 09, 17, 00, 00, 00), y: 15771.909});
  arr.push({x: new Date(2013, 11 -1, 09, 17, 15, 00, 00), y: 15758.857});
  arr.push({x: new Date(2013, 11 -1, 09, 17, 30, 00, 00), y: 15634.568});
  arr.push({x: new Date(2013, 11 -1, 09, 17, 45, 00, 00), y: 15613.649});
  arr.push({x: new Date(2013, 11 -1, 09, 18, 00, 00, 00), y: 15208.584});
  arr.push({x: new Date(2013, 11 -1, 09, 18, 15, 00, 00), y: 15273.769});
  arr.push({x: new Date(2013, 11 -1, 09, 18, 30, 00, 00), y: 15267.812});
  arr.push({x: new Date(2013, 11 -1, 09, 18, 45, 00, 00), y: 15215.534});
  arr.push({x: new Date(2013, 11 -1, 09, 19, 00, 00, 00), y: 15214.557});
  arr.push({x: new Date(2013, 11 -1, 09, 19, 15, 00, 00), y: 15198.033});
  arr.push({x: new Date(2013, 11 -1, 09, 19, 30, 00, 00), y: 15159.63});
  arr.push({x: new Date(2013, 11 -1, 09, 19, 45, 00, 00), y: 15125.667});
  arr.push({x: new Date(2013, 11 -1, 09, 20, 00, 00, 00), y: 15028.004});
  arr.push({x: new Date(2013, 11 -1, 09, 20, 15, 00, 00), y: 14970.92});
  arr.push({x: new Date(2013, 11 -1, 09, 20, 30, 00, 00), y: 14919.566});
  arr.push({x: new Date(2013, 11 -1, 09, 20, 45, 00, 00), y: 14923.107});
  arr.push({x: new Date(2013, 11 -1, 09, 21, 00, 00, 00), y: 14782.877});
  arr.push({x: new Date(2013, 11 -1, 09, 21, 15, 00, 00), y: 14719.747});
  arr.push({x: new Date(2013, 11 -1, 09, 21, 30, 00, 00), y: 14709.362});
  arr.push({x: new Date(2013, 11 -1, 09, 21, 45, 00, 00), y: 14747.927});
  arr.push({x: new Date(2013, 11 -1, 09, 22, 00, 00, 00), y: 14573.228});
  arr.push({x: new Date(2013, 11 -1, 09, 22, 15, 00, 00), y: 14442.517});
  arr.push({x: new Date(2013, 11 -1, 09, 22, 30, 00, 00), y: 14424.157});
  arr.push({x: new Date(2013, 11 -1, 09, 22, 45, 00, 00), y: 14389.285});
  arr.push({x: new Date(2013, 11 -1, 09, 23, 00, 00, 00), y: 14408.623});
  arr.push({x: new Date(2013, 11 -1, 09, 23, 15, 00, 00), y: 14458.237});
  arr.push({x: new Date(2013, 11 -1, 09, 23, 30, 00, 00), y: 14401.343});
  arr.push({x: new Date(2013, 11 -1, 09, 23, 45, 00, 00), y: 14390.64});
  // arr.push({x: new Date(2013, 11 -1, 10, 00, 00, 00, 00), y: 14400.64});
  // arr.push({x: new Date(2013, 11 -1, 10, 00, 15, 00, 00), y: 14458.237});

  for(var i = 0; i < arr.length; i++) {
    arr2[i] = {x: arr[i].x, y: arr[i].y + 500};
  }

  for (var i = 0; i < arr.length; i+=4) {
    tickMarks.push(arr[i].x);
  };

  return [{
      values: arr,
      key: "Energy Consumption Forecast",
      color: "#667711"
    },

    {
      values: arr2,
      key: "Past Consumption",
      color: "grey"
    }];
}
