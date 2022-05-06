var $ = function (id) {
    return document.getElementById(id);
}

var $get = function(id) {
    return document.getElementById(id).value;
}
function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      alert("Valid email address!");
  
      document.form1.text1.focus();
  
      return true;
  
    } else {
  
      alert("Invalid email address!");
  
      document.form1.text1.focus();
  
      return false;
  
    }
  
  }

  function validEmail(string) {
      if (string.length > 0) {
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
            alert("enter a valid email address");
            return;
        }

        if (emailLabel.classList.contains("error")){
            emailLabel.classList.remove("error");    
        }
        $("errorMessage").innerHTML = "";

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

        html = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
        html += (`Hello ${fullName}, this page was created on-the-fly!`);
        
        html += testResumeHeadings();
        html += ("</body>\n</html>");
    
        resumeWindow = window.open('Resume','myPop','width=400,height=200,left=200,top=200');
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