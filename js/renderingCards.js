//timeline rendering data
/*var month = ["November","5 Years","4 Years","3 Years","5 Years","1 mounth","3 mounths","3 mounths","1 mounths"];
var year = ["2001","2007-2012","2012-2016","2016-2019","2019-2024","April 2021","May 2021","April 2022","July 2022"];
var event= ["Born","Primary school","Secondary school","High school","Computer Science High School","Clubs",
"ESI Logement - Project","Rehlati - eTourisme Algeria","Personal Projects"];
var description = ["I was born on November 2001 in Jijel , Algeria.","I spent 5 years in Primary School Mohammadi Messaoud - Jijel",
"After that I spent 4 years in Secondary school Mustapha El Ouali - Jijel, where I got in the final exam 'very good' mention (average > 17,4/20).",
"After that I spent 3 years in High school elaborately Abdi Bouaziz - Jijel, where I got in the baccalaureate final exam  'excellent' mention (average > 17,2/20).",
"I joined the University in Algiers (ESI ex-INI) to get, after 5 years, an engineering Diploma in Computer science.",
"I was a Mentor in a Mentoring Program (with Shellmates club).",
"It was a web application for administration of my university, which helped them to organize and make their process of work automatically. I worked as a designer and a front end developer.",
"With a team of 8 members, we prepared all architectures and documentations for a solution to e-Tourisme in Algeria.",
"At this time, I work on some projects, and with time I learn back end technologies and mobile development."];
var dynamic = document.querySelector('.timeline');
for (var i=0; i< month.length ; i++){
    var fetch = document.querySelector('.timeline').innerHTML;
    dynamic.innerHTML = `
                           <div class="icon"></div>
                           <div class="date-content">
                              <div class="date-outer">
                                 <span class="date">
                                 <span class="month">${month[i]}</span>
                                 <span class="year">${year[i]}</span>
                                 </span>
                              </div>
                           </div>
                           <div class="timeline-content">
                              <h5 class="title" style="text-align: center;">${event[i]}</h5>
                              <p class="description" style="text-align: center;">
                              ${description[i]}
                              </p>
                           </div>` + fetch;
}*/
//its to fix another time

document.addEventListener('contextmenu', event => event.preventDefault()); 