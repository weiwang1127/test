/**
 * Created by meicai on 2015/1/23.
 */
var get_string = "";
function string_operate(){
     get_string = document.getElementById('inp_1').value;
    document.getElementById("p_show").innerHTML = get_string;
}
/*////可以用var inp_x = getElementsByTagName("input")/先用笨的方法实现，再改进的*/
function slice_test() {
    var para1 = document.getElementById("inp_2_1").value;
    var para2 = document.getElementById("inp_2_2").value;
    if(para1 == ""){
        alert("第一个参数不能为空");
    }else if(isNaN(para1) || isNaN(para2)){
        alert("参数必须是数字");
    }
    document.getElementById("inp_2").value = get_string.slice(para1,para2);
}
function substr_test() {
    var para1 = document.getElementById("inp_3_1").value;
    var para2 = document.getElementById("inp_3_2").value;
    if(para1 == ""){
        alert("第一个参数不能为空");
    }else if(isNaN(para1) || isNaN(para2)){
        alert("参数必须是数字");
    }
    document.getElementById("inp_3").value = get_string.substr(para1,para2);
}
/*////////////////////////////*/
function split_test() {
    var para1 = document.getElementById("inp_4_1").value;
    var para2 = document.getElementById("inp_4_2").value;
    if(para1 == ""){
        alert("第一个参数不能为空");
    }else {
        document.getElementById("inp_4").value = get_string.split(para1,para2);
    }

}

/*////////////////////////////////*/
function substring_test() {
    var para1 = document.getElementById("inp_5_1").value;
    var para2 = document.getElementById("inp_5_2").value;
    if(para1 == ""){
        alert("第一个参数不能为空");
    }else if(isNaN(para1) || isNaN(para2)){
        alert("参数必须是数字");
    }
    document.getElementById("inp_5").value = get_string.substring(para1,para2);
}


/*//////
 //////////
 ////////////单参数
 /////////////////
 ////////////////////*/
function charAt_test() {
    var para1 = document.getElementById("dan_inp_7_1").value;
    if(para1 == ""){
        alert("参数不能为空");
    }else if(isNaN(para1)){
        alert("参数必须是数字");
    }
    document.getElementById("dan_inp_7").value = get_string.charAt(para1);
}

function indexOf_test(){
    var para1 = document.getElementById("dan_inp_8_1").value;
    if(para1 == ""){
        alert("参数不能为空");
    }else{
        document.getElementById("dan_inp_8").value = get_string.indexOf(para1);
    }
}

/*//////
 //////////
 ////////////正则表示式
 /////////////////
 ////////////////////*/
function match_test() {
    var para1 = document.getElementById("z_inp_1_1").value;
    if(para1 == ""){
        alert("参数不能为空");
    }else{
        document.getElementById("z_inp_1").value = get_string.match(para1);
    }
}
function replace_test(){
    var para1 = document.getElementById("z_inp_2_1").value;
    var para2 = document.getElementById("z_inp_2_2").value;
    if(para1 == ""){
        alert("参数都不能为空")
    }else  if(para2 == ""){
        alert("参数都不能为空")
    }
    document.getElementById("z_inp_2").value = get_string.replace(para1,para2);
}
function search_test(){
    var para1 = document.getElementById("z_inp_3_1").value;
    if(para1 == ""){
        alert("参数不能为空");
    }else{
        document.getElementById("z_inp_3").value = get_string.search(para1);
    }
}
