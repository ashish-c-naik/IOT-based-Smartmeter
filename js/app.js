(function() {

    let json;
            var myApp = new Framework7();
            google.charts.load('current', {
            'packages': ['corechart']
        });
 
var $$ = Dom7;
 
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            json = JSON.parse(this.responseText);
            json.data.forEach(function(v, i) {
                start(v);
            });
            createWeekGraph(json);
        }
    };
    xhttp.open("GET", "data2.json", true);
    xhttp.send();

    function start(data) {
        const devices = data.devices,
            usage = {
                light: {
                    threshold: 40
                },
                fan: {
                    threshold: 400
                },
                ac: {
                    threshold: 600
                },
                totalconsumption: data.totalconsumption
            };

        for (var i in devices) {
            let temp = 0;
            //console.log(i)
            devices[i].ontime.to.forEach(function(v, l) {
                temp += v - devices[i].ontime.from[l];
            });
            usage[i].consumption = Math.round(temp * devices[i].uph);
        }
        let ls = JSON.parse(localStorage.getItem('usage')) || {};
        ls['day ' + data.day] = usage;
        localStorage.setItem('usage', JSON.stringify(ls));
        console.log('stored', ls);

        if (new Date().getDay() > 7) {
            console.log("One week done today. Checking usage");
            checkAfterWeek();
        }
    }

    function checkAfterWeek() {
        const consumed = getCurrentConsumption();
        if (consumed === -1) console.log("No usage data");
        if (consumed / new Date().getDay() > parseFloat(localStorage.getItem('threshold') / 30)) {
            console.log("exceeded!!");
        }
    }

    // return consumption till date from day 1
    // if none -1
    function getCurrentConsumption() {
        let ls = JSON.parse(localStorage.getItem('usage'));
        if (!ls) return -1;
        let total = 0;
        for (var i in ls) total += ls[i].totalconsumption;
        return total;
    }

    function createDayGraph(json) {
        
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = new google.visualization.DataTable();

            // Declare columns
            data.addColumn('number', 'Time');
            data.addColumn('number', 'Light');
            data.addColumn('number', 'Fan');
            data.addColumn('number', 'AC');

            var count = 0;
            var array = [
                [],
                [],
                []
            ];
            for (var i in json.devices) {
                for (var k = 0; k < json.devices[i].ontime.from.length; k++) {
                    for (var j = json.devices[i].ontime.from[k]; j <= json.devices[i].ontime.to[k]; j++) {
                        console.log('pushing', i);
                        array[count].push(j)
                    }
                }
                count++;

            }
            console.log('aaaa', array)
            for (var hour = 0; hour <= 24; ++hour) {
                const l = array[0].includes(hour) ? 40 : 0;
                const f = array[1].includes(hour) ? 60 : 0;
                const ac = array[2].includes(hour) ? 150 : 0;
                console.log('at ' + hour + ": ", l, f, ac)
                data.addRows([
                    [hour, l, f, ac]
                ]);
            }

            var chart = new google.visualization.LineChart(document.getElementById('chart_div_daily'));
            const options = {
                
                hAxis: {
                    title: 'Time'
                },
                vAxis: {
                    title: 'Units/hr'
                }
            };
            chart.draw(data, options);

        }
    }

    function createWeekGraph(jsonfile){
        const json = JSON.parse(localStorage.getItem('usage'));
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = new google.visualization.DataTable();

            // Declare columns
            data.addColumn('number', 'Time');
            data.addColumn('number', '');

            console.log(json)
            for(var i = 1; i<= 7;i++){

                data.addRows([
                    [i, json['day ' + i].totalconsumption]
                ]);
            }
            var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
            const options = {
                
                hAxis: {
                    title: 'Day'
                },
                vAxis: {
                    title: 'Units/hr'
                }
            };
            chart.draw(data, options);
            google.visualization.events.addListener(chart, 'select', selectHandler);

            function selectHandler(e) {
              createDayGraph(jsonfile.data[chart.getSelection()['0'].row]);
              myApp.popup('.popup');
            }

        }

    }
}());
