var $ = function (id) {
    return document.getElementById(id);
}

var $get = function(id) {
    return document.getElementById(id).value;
}

function validEmail(string) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (string.length > 0 && string.match(validRegex) ) {
        return true;
    }
    return false;
}

 function testResumeHeadings() {
    var html = "";
    html += ("fullName: " + fullName+ "<br>");
    html += ("fname: " + fname+ "<br>");
    html += ("lname: " + lname+ "<br>");
    html += ("address: " + address+ "<br>");
    html += ("city: " + city+ "<br>");
    html += ("state: " + state+ "<br>");
    html += ("zip: " + zip+ "<br>");
    html += ("phone: " + phone+ "<br>");
    html += ("homepage: " + homepage+ "<br>");
    
    
    return html;
 }

 function getResume() {
    var html = '';
    html += '<!DOCTYPE html>';
    html += '<html>';
        html += '<title>W3.CSS Template</title>';
        html += '<meta charset="UTF-8">';
        html += '<meta name="viewport" content="width=device-width, initial-scale=1">';
        html += '<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">';
        html += '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">';
        html += '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">';
        html += '<link rel="stylesheet" type="text/css" href="resume.css">';
    
        html += '<body class="w3-light-grey">';
    
    /*<!-- Page Container -->*/
    html += '<div class="w3-content w3-margin-top" style="max-width:1400px;">';
    
      /*<!-- The Grid -->*/
      html += '<div class="w3-row-padding">';
      
        /*<!-- Left Column -->*/
        html += '<div class="w3-third">';
        
            html += '<div class="w3-white w3-text-grey w3-card-4">';
                html += '<div class="w3-display-container">';
                    html += '<img src="w3images/avatar_hat.jpg" style="width:100%" alt="Avatar">';
                    html += '<div class="w3-display-bottomleft w3-container w3-text-black">';
                        html += '<h2>' + fullName +'</h2>';
                        html += '</div>';
                        html += '</div>';
                        html += '<div class="w3-container">';
                            html += '<p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-purple"></i>'+ title + '</p>';
                            html += '<p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-purple"></i>' + city + ', ' + state + '</p>';
                            html += '<p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-purple"></i>' + email + '</p>';
                            html += '<p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-purple"></i>' + phone + '</p>';
                            html += '<hr>';
    
                            html += '<p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-purple"></i>Skills</b></p>';
                            html += '<p>PHP</p>';
                            html += '<div class="w3-light-grey w3-round-xlarge w3-small">';
                                html += '<div class="w3-container w3-center w3-round-xlarge w3-purple" style="width:90%">90%</div>';
                                html += '</div>';
                                html += '<p>CSS</p>';
                                html += '<div class="w3-light-grey w3-round-xlarge w3-small">';
                                    html += '<div class="w3-container w3-center w3-round-xlarge w3-purple" style="width:80%">';
                                        html += '<div class="w3-center w3-text-white">80%</div>';
                                        html += '</div>';
                                        html += '</div>';
                                        html += '<p>JavaScript</p>';
                                        html += '<div class="w3-light-grey w3-round-xlarge w3-small">';
                                            html += '<div class="w3-container w3-center w3-round-xlarge w3-purple" style="width:75%">75%</div>';
                                            html += '</div>';
                                            html += '<p>Python</p>';
                                            html += '<div class="w3-light-grey w3-round-xlarge w3-small">';
                                                html += '<div class="w3-container w3-center w3-round-xlarge w3-purple" style="width:50%">50%</div>';
                                                html += '</div>';
                                                html += '<br>';
    
                                                html += '<p class="w3-large w3-text-theme"><b><i class="fa fa-globe fa-fw w3-margin-right w3-text-purple"></i>Languages</b></p>';
                                                html += '<p>English</p>';
                                                html += '<div class="w3-light-grey w3-round-xlarge">';
                                                    html += '<div class="w3-round-xlarge w3-purple" style="height:24px;width:100%"></div>';
                                                    html += '</div>';
                                                    html += '<p>Spanish</p>';
                                                    html += '<div class="w3-light-grey w3-round-xlarge">';
                                                        html += '<div class="w3-round-xlarge w3-purple" style="height:24px;width:55%"></div>';
                                                        html += '</div>';
                                                        html += '<p>SQL</p>';
                                                        html += '<div class="w3-light-grey w3-round-xlarge">';
                                                            html += '<div class="w3-round-xlarge w3-purple" style="height:24px;width:25%"></div>';
                                                            html += '</div>';
                                                            html += '<br>';
                                                            html += '</div>';
                                                            html += '</div><br>';
    
        /*<!-- End Left Column -->*/
        html += '</div>';
    
        /*<!-- Right Column -->*/
        html += '<div class="w3-twothird">';
        
            html += '<div class="w3-container w3-card w3-white w3-margin-bottom">';
                html += '<h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-purple"></i>Work Experience</h2>';
                html += '<div class="w3-container">';
                    html += '<h5 class="w3-opacity"><b>Junior Developer /www.waketech.edu/b></h5>';
                    html += '<h6 class="w3-text-purple"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 - <span class="w3-tag w3-purple w3-round">Current</span></h6>';
                    html += '<p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>';
                    html += '<hr>';
                    html += '</div>';
                    html += '<div class="w3-container">';
                        html += '<h5 class="w3-opacity"><b>Web Developer / something.com</b></h5>';
                        html += '<h6 class="w3-text-purple"><i class="fa fa-calendar fa-fw w3-margin-right"></i>January 2022</h6>';
                        html += '<p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>';
                        html += '<hr>';
                        html += '</div>';
                        html += '<div class="w3-container">';
                            html += '<h5 class="w3-opacity"><b>Junior Developer / https://github.com/nicole092003/</b></h5>';
                            html += '<h6 class="w3-text-purple"><i class="fa fa-calendar fa-fw w3-margin-right"></i>January 2022</h6>';
                            html += '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br>';
                            html += '</div>';
                            html += '</div>';
    
                            html += '<div class="w3-container w3-card w3-white">';
                                html += '<h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-purple"></i>Education</h2>';
                                html += '<div class="w3-container">';
                                    html += '<h5 class="w3-opacity"><b>W3Schools.com</b></h5>';
                                    html += '<h6 class="w3-text-purple"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>';
                                    html += '<p>Web Development! All I need to know in one place</p>';
                                    html += '<hr>';
                                    html += '</div>';
                                    html += '<div class="w3-container">';
                                        html += '<h5 class="w3-opacity"><b>Wake Technical Community College</b></h5>';
                                        html += '<h6 class="w3-text-purple"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2017 - 2024</h6>';
                                        html += '<p>Master Degree</p>';
                                        html += '<hr>';
                                        html += '</div>';
                                        html += '<div class="w3-container">';
                                            html += '<h5 class="w3-opacity"><b>Database and Programming Support Services</b></h5>';
                                            html += '<h6 class="w3-text-purple"><i class="fa fa-calendar fa-fw w3-margin-right"></i>2022 - 2024</h6>';
                                            html += '<p>Associate Degree</p><br>';
                                            html += '</div>';
                                            html += '</div>';
    
        /*<!-- End Right Column -->*/
        html += '</div>';
        
      /*<!-- End Grid -->*/
      html += '</div>';
      
      /*<!-- End Page Container -->*/
      html += '</div>';
    
      html += '<footer class="w3-container w3-purple w3-center w3-margin-top">';
        html += '<p>&copy; 2022 fname lname</p>';
     
        html += '<p><a href="' + homepage + '" target="_blank">Homepage</a></p>';
        html += '</footer>';
    
        html += '</body>';
        html += '</html>';
    return html;    
 }

document.getElementById("btnCreateResume").addEventListener('click',myResume)
    function myResume()
    {
        email = $get("email");
        var emailLabel = $("email").parentNode.querySelector("label[for='email']");

        if(!validEmail(email)){
            if (!emailLabel.classList.contains("error")){
                emailLabel.classList.add("error");
            }
            $("email").focus();
            $("errorMessage").innerHTML = "Error: enter a valid email address";
            
            return;
        }

        if (emailLabel.classList.contains("error")){
            emailLabel.classList.remove("error");    
        }
        $("errorMessage").innerHTML = "";

        title = $get("title");
        fname = $get("fname");
        lname = $get("lname");
        address = $get("address");
        city = $get("city");
        state = $get("state");
        zip = $get("zip");
        phone = $get("phone");
        homepage = $get("homepage");
       
        fullName = `${fname} ${lname}`;
        resumeTitle = `${fullName} Resume`;
/*
        html = ("<html>\n<head>\n<title>Welcome</title>\n<link rel='stylesheet' type='text/css' href='resume.css'>\n</head>\n<body>\n");
        html += (`Hello ${fullName}, this page was created on-the-fly!`);
        
        html += testResumeHeadings();
        html += ("</body>\n</html>");
    */
        html = getResume();
        resumeWindow = window.open('_blank','Resume','width=800,height=1100,left=200,top=200,scrollbars=yes,resizeable=yes,titlebar=no, toolbar=no');
        resumeWindow.document.write(html);
    }

    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].onclick=function(event) {
            event.preventDefault();
        }
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }