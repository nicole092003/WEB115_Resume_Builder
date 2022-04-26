document.getElementById("btnCreateResume").addEventListener('click',myResume)
    function myResume()
    {
        variableName = document.getElementById("birthday").value;
       alert("Show Resume: " + variableName);
    }