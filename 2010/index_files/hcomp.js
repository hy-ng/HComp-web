/***  Similar Users  ***/
function loadMainContent(url)
{   
    xmlhttp=GetXmlHttpObject();
    if (xmlhttp==null)
    {
        alert ("Browser does not support HTTP Request");
        return;
    }
    xmlhttp.onreadystatechange=showMainContent;
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}

function showMainContent()
{
    if (xmlhttp.readyState==4)
    {
        document.getElementById("maincontent").innerHTML=xmlhttp.responseText;
    }
}

function GetXmlHttpObject()
{
    if (window.XMLHttpRequest)
    {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        return new XMLHttpRequest();
    }
    if (window.ActiveXObject)
    {
        // code for IE6, IE5
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
    return null;
}