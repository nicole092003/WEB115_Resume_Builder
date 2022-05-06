document.getElementById("btnCreateResume").addEventListener('click',myResume)
    function myResume()
    {
        fname = document.getElementById("fname").value;
        lname = document.getElementById("lname").value;

        fullName = `${fname} ${lname}`;
        resumeTitle = `${fullName} Resume`;

        html = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
        html += (`Hello ${fullName}, this page was created on-the-fly!`);
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