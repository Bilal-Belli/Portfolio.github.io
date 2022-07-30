//programming languages chart
var xValuesPL = ["HTML", "CSS", "JavaScript", "Python", "Java", "C", "Pascal"];
var yValuesPL = [100, 80, 60, 80, 50, 90, 70, 0];
new Chart("ChartProgrammingLanguages", {
	type: "horizontalBar",
	data: {
		labels: xValuesPL,
		datasets: [{
			backgroundColor: "#47d1ae",
			data: yValuesPL
		}]
	},
	options: {
		title: {
			display: true,
			text: "Programming Languages Used"
		}, 
        elements: {
			bar: {
				borderWidth: 50,
			}
		},
		legend: {
			display: false
		},
		responsive: true
	}
});
//--------------------------------------------
//skills chart
var xValuesSK = ["Web Developper", "Analyst", "Blogger", "Architecter", "Mobile Developper", "Designer"];
var yValuesSK = [80, 80, 70, 70, 20, 80];
new Chart("ChartSkills", {
	type: "radar",
	data: {
		labels: xValuesSK,
		datasets: [{
			backgroundColor: 'rgba(71, 209, 174, 0.5)',
			data: yValuesSK
		}]
	},
	options: {
		scale: {
			ticks: {
				beginAtZero: true,
				max: 100,
				min: 0,
				stepSize: 10
			}
		},
		legend: {
			display: false
		},
		responsive: true,
		title: {
			display: true,
			text: "Performance"
		}
	}
});
//--------------------------------------------
//frameworks chart
//to work later