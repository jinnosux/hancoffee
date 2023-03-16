      var myVar;
      function loader() {
        myVar = setTimeout(showPage, 1800);
      }
      
      function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("bg").style.display = "block";
      }
