document.getElementById("btnCreateResume").addEventListener('click',myResume)
    function myResume()
    {
        variableName = document.getElementById("birthday").value;
       alert("Show Resume: " + variableName);
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