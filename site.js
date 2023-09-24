console.log('Hello! We see you are looking through our code >:)');


//* function to create main-sec1-div1 divs
span = ['<div class="main-expandableDiv"></div>'];
span_out = '';

for (i = 1;i<5;i++) {
    span.push('<div class="main-expandableDiv"></div>');
}

console.log(span);
span_out = span.join(' ');
document.getElementById('main-sec1-segments').innerHTML = span_out;

//* function to create main-sec2-div1 divs
span2 = ['<div class="main-expandableDiv-2"></div>'];
span_out2 = '';

for (i = 1;i<5;i++) {
    span2.push('<div class="main-expandableDiv-2"></div>');
}

console.log(span2);
span_out2 = span2.join(' ');
document.getElementById('main-sec2-segments').innerHTML = span_out2;
