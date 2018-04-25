$(function () {
  $('#contact').on('click', function(){
  $('.description').html(contact);
});
});
var contact=('<h3>CONTACT INFORMATION</h3><br>')+('Phone: 808-214-2893<br>School Email: sdavis@kiheicharter.org<br>Personal Email: sodavis10@gmail.com');

$(function () {
  $('#goals').on('click', function(){
  $('.description').html(goals);
});
});
var goals=('<h3>ACADEMIC AND PERSONAL OBJECTIVES</h3><br>')+('I would like to major in Biomedical Engineering in college and obtain a Ph.D. I would also like to attend medical school and specialize in pathology. I hope to achieve this through an MD Ph.D program at a research university. After grad school, I want to combine my interests in engineering and medicine to create a biomedical technologies startup. After having a startup and other engineering experience, I would like to become a professor at a research university.');


var gfb=('June 2017 - July 2017 <br> Participated in the Women In Technology Stemworks Summer Internship and was assigned to Goodfellow Brothers, Inc. At Goodfellow, I learned about civil engineering and surveying. I worked on 3D models for sites around Maui and gained lots of surveying experience.');
var kpl=('March 2016 - March 2017 <br> Worked at Kihei Public Library for a year as a stuent helper. Duties included arranging, shelving, stamping, and labeling books. Also helped set up the kids crafts and did various assignments throughout the library.');
var nf=('June 2016 - July 2016 <br> Worked with the Programming team for the new Nalukai website. Wrote some of the code (HTML, CSS) and inserted comments to help explain the code to future Nalukai campers.');
var mig=('June 2015 - July 2015 <br> Participated in the Women In Technology Stemworks Summer Internship and was assigned to Maui Innovation Group. Worked on the electronics and android app for Maui Innovation Group&#39;s coconut harvesting robot.');
$(function () {
  $('#work').on('click', function(){
  $('.description').html(work);
  $('#g').hide();
  $('#k').hide();
  $('#n').hide();
  $('#m').hide();
  $(function () {
    $('#goodfellowbutton').on('click', function(){
$('#g').html(gfb).show();
$('#k').hide();
$('#n').hide();
$('#m').hide();
  });
  $('#kiheipubliclibrarybutton').on('click', function(){
$('#k').html(kpl).show();
$('#g').hide();
$('#n').hide();
$('#m').hide();
});
$('#nalukaibutton').on('click', function(){
$('#n').html(nf).show();
$('#g').hide();
$('#k').hide();
$('#m').hide();
});
$('#mauiinnovationbutton').on('click', function(){
$('#m').html(mig).show();
$('#g').hide();
$('#k').hide();
$('#n').hide();
});
  });
});
});

var work=('<h3>WORK EXPERIENCE</h3><br>')+('<ul class="works"><li><button class="moreinfo" id="goodfellowbutton"><span>Summer Intern at Goodfellow Bros, Inc.</span></button></li>')+('<div class="wdesc" id="g"></div>')+('<li><button class="moreinfo" id="kiheipubliclibrarybutton"><span>Student Helper I at Kihei Public Library</span></button></li>')+('<div class="wdesc" id="k"></div>')+('<li><button class="moreinfo" id="nalukaibutton"><span>Intern at Nalukai Foundation</span></button></li>')+('<div class="wdesc" id="n"></div>')+('<li><button class="moreinfo" id="mauiinnovationbutton"><span>Summer Intern at Maui Innovation Group</span></button></li>')+('<div class="wdesc" id="m"></div>')+('</ul>');

$(function () {
  $('.profile').on('click', function(){
  $('.description').html('<h3>WELCOME TO MY RESUME!</h3><br> Click on the buttons below to get to know me!');
});
});

$(function () {
  $('#reference').on('click', function(){
  $('.description').html(reference);
});
});
var reference=('<h3>REFERENCES</h3><br>')+('Lorraine Perry<br><div class="edesc">Library Technician at Kihei Public Library. <br>Phone: (808) 875-6833</div><br> Darius &#39;Bubs&#39; Monsef <div class="edesc">Founder of Nalukai Academy Hacker Camp<br>Email: bubs@monsef.com<br><a id="reflink" href="http://bubs.co/">WEBSITE</a></div><br> Kevin Clarke <div class="edesc">Engineering Services at Goodfellow Bros., Inc.<br>Email: kevinc@goodfellowbros.com</div>');

$(function () {
  $('#edu').on('click', function(){
  $('.description').html(edu);
});
});
var edu=('<h3>EDUCATION</h3><br>')+('Kihei Charter High School<br><div class="edesc">2014 - 2018<br>GPA: 4.2 (usually but not currently)</div><br> University of Hawaii Maui College<div class="edesc">2015 - 2018<br>GPA: 3.51</div>');

var skill1=('Proficient in HTML, CSS, Javascript, and C.<br>Fairly experienced in Java, C++, and Python.<br>Good at using the command line in UNIX based operating systems<br>Can pick up new languages quickly.');
var skill2=('Proficient at wiring, soldering, and building + designing circuits. Very experienced with Arduino and Raspberry Pi.<br>Able to use oscilloscopes, multimeters, power supplies, and other electronics equipment.');
var skill3=('Proficient at 3D modeling using Autodesk Inventor, Fusion 360, Sketchup. Experienced with  Civil 3d and Blender. Some graphic design experience.');
var skill4=('Friendly, likes to smile at people.');
$(function () {
  $('#skills').on('click', function(){
  $('.description').html(skills);
  $('#s1').hide();
  $('#s2').hide();
  $('#s3').hide();
  $('#s4').hide();
  $(function () {
    $('#skill1').on('click', function(){
$('#s1').html(skill1).show();
$('#s2').hide();
$('#s3').hide();
$('#s4').hide();
  });
  $('#skill2').on('click', function(){
$('#s2').html(skill2).show();
$('#s1').hide();
$('#s3').hide();
$('#s4').hide();
});
$('#skill3').on('click', function(){
$('#s3').html(skill3).show();
$('#s1').hide();
$('#s2').hide();
$('#s4').hide();
});
$('#skill4').on('click', function(){
$('#s4').html(skill4).show();
$('#s1').hide();
$('#s2').hide();
$('#s3').hide();
});
  });
});
});
var skills=('<h3>SKILLS</h3><br>')+('<ul class="skills "><li><button class="moreinfo" id="skill1"><span>Programming</span></button></li>')+('<div class="wdesc" id="s1"></div>')+
('<li><button class="moreinfo" id="skill2"><span>Engineering</span></button></li>')+('<div class="wdesc" id="s2"></div>')+
('<li><button class="moreinfo" id="skill3"><span>General STEM</span></button></li>')+('<div class="wdesc" id="s3"></div>')+
('<li><button class="moreinfo" id="skill4"><span>Other</span></button></li>')+('<div class="wdesc" id="s4"></div>')+('</ul>');
