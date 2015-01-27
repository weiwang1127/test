/**
 * Created by meicai on 2015/1/22.
 */
function ul_id(){
    if( event.srcElement.tagName == "A") {
        var idArray = document.getElementsByTagName("a");
        for (var i = 0; i < idArray.length; i++) {
            idArray[i].className = (idArray[i] == event.target) ? "active" : "";
        }
    }
}




