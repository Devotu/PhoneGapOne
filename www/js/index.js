function navigate(page) {
    if (page == 1){
        var pageContentJson = getPageContent(page);
        var pageContent = JSON.parse(pageContentJson);
        document.getElementById("title").innerHTML = 
            pageContent.title;
        document.getElementById("nav").innerHTML = 
            pageContent.content;
    } else if (page == 2){
        document.getElementById("nav").innerHTML = 
            "<p>This is the page 2 stuff</p>";        
    } else {
        document.getElementById("nav").innerHTML = 
            "<p> Error in request</p>";
    }
}

function getPageContent(page) {
    if (page == 1){
        return '{"title":"Page 1","content":"This is the page 1 content"}';
    }
}