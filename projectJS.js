var $ = function (id) {
    return document.getElementById(id);
}

var $get = function(id) {
    return document.getElementById(id).value;
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
    
        resumeWindow = window.open('Resume~','myPop','width=400,height=200,left=200,top=200');
        resumeWindow.document.write(html);
    }
/**
 * <div class="panel">
            <label for="fname">First name:</label>
            <input type="text" id="fname" name="fname"><br><br>
    
            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname"><br><br>
    
            <label for="address">Address</label>
            <input type="text" id="address" name="address"><br><br>
    
            <label for="city">City:</label>
            <input type="text" id="City" name="City"><br><br>
    
            <label for="state">State:</label>
            <input type="text" id="State" name="State"><br><br>
    
            <label for="zip">Zip:</label>
            <input type="text" id="Zip" name="Zip"><br><br>
    
            <label for="phone">Phone:</label>
            <input type="text" id="Phone" name="Phone"><br><br>
    
              
        </div>
 */
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