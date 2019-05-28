export function normalChart(refer, json) {
    let height = 600;
    if(document.body.clientWidth <= 720) {
        height = 250;
    }
	var ystep = 1,temp,degree;
	if(json.yAxis) {
		ystep = json.yAxis.step;
		if(json.yAxis.step < ((json.yAxis.max-json.yAxis.min)/20)){
			if(((json.yAxis.max-json.yAxis.min)/10)<=10){
				ystep = parseInt((json.yAxis.max-json.yAxis.min)/10);
			}else{
				temp = parseInt((json.yAxis.max-json.yAxis.min)/10).toString();
				degree = parseInt(temp.length/2);
				ystep = +(temp.slice(0,degree) + '0'.repeat(temp.length-degree));
			}
		}
	}
	return {                   
		//图表展示容器，与div的id保持一致
        chart: {
            type: json.type,
            renderTo: refer,
            height: height
        },
        title: {
            text: json.title || ""     //指定图表标题
        },
        subtitle: {
            text: json.subtitle || ""
        },
        legend: {
        	enabled: false
        },
        yAxis: {
            title: {
                text:json.yAxis ? json.yAxis.title : ""
            },
            min: json.yAxis ? json.yAxis.min : 0,
            max: json.yAxis ? json.yAxis.max : 0,
            tickInterval: ystep,
            labels: {
            	formatter: function() {
            		if(json.isPercent == "1") return this.value + '%';
            		else return this.value;
            	}
           }
        },
        xAxis: {
            title: {
                text: json.xAxis ? json.xAxis.title : ""
            },
            labels: {
                rotation: -45 //x轴文字逆时针旋转45°
            },
            categories: json.xAxis ? json.xAxis.categories : ""
        },
        tooltip: {
            formatter: function () {
                return this.point.options.tip; // 设置鼠标悬浮显示的内容
        	}
        },
        series:[{
            data: json.data //设置数据
        }]  
    }
}

export function doubleLineChart(refer, json) {
    return {
        chart: {
            zoomType: 'xy',
            type: 'line',              //图表类型
            renderTo: refer,
            height: 400
        },
        title: {
            text: json.title,           //图表标题
            x: -20 //center
        },
        subtitle: {
            text: json.subTitle,        //图表子标题
            x: -20
        },
        xAxis: {
            categories: json.categories //x轴分类坐标
        },
        yAxis: {
            title: {
                text: json.yAxisTitle   //y轴标题
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '项'            //提示框，显示信息后缀
        },
        legend: {                       //图表说明
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        plotOptions: {
            series: {
                lineWidth: 1,
                point: {
                    events: {
                        'click': function () {
                            if (this.series.data.length > 1) alert(this.series.data);
                        }
                    }
                }
            }
        },
        series: [{                      //图表数据
            name: json.line1Name,       //图表1名称
            data: json.line1Data        //图表1y轴数据
        }, {
            name: json.line2Name,       //图表2名称
            data: json.line2Data        //图表2y轴数据
        }]
    }
}