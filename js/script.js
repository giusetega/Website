function selectPage(event){
    var targetParent = event.target.parentElement;
    var dataAttributeValue = targetParent.getAttribute("data-caratteristiche");
    if (dataAttributeValue != null && dataAttributeValue != "" ){        
        openPage(dataAttributeValue);
    }
}


function openPage(page){
    var pageSelected = `${page}.html`;
    window.open(pageSelected, "_self");
}




















