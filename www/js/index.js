function navigate(page) {
    if (page == 1){
        document.getElementById("nav").innerHTML = 
            "<p>This is the stuff of page1</p>";
    } else if (page == 2){
        document.getElementById("nav").innerHTML = 
            "<p>This is the page 2 stuff</p>";        
    } else {
        document.getElementById("nav").innerHTML = 
            "<p> Error in request</p>";
    }
}