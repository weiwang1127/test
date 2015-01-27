/**
 * Created by meicai on 2015/1/19.
 */
function test_Object1(){
var num = 0;
    start:
    for(var i = 0;i < 10;i++ ){
        for(var j = 0;j < 10;j++){
            if(i == 5&&j == 5){
                continue start;
            }
            num++;
        }

    }
    alert(num);
}
/***************************/
function test_Switch(){
    var test_i = 24;
switch(test_i){
    case 23:
        alert("这是number");
        break;
    case 24:
        alert("这是String");
        break;
    case 25:
        alert("为空");
        break;
    case 26:
        alert("没有初始化");
        break;
    default:
        alert("Other");
}
}
/*//////////////////////*/
function test1_1(){
    /*
var person = new Object();
    person.name = "wangwei";
    person.age = 22;
    person.height = 175;
    document.write(person.name,  person.age,   person.height);*/
    person = {
        name : document.getElementById("name").value,
        age : document.getElementById("age").value,
        height : document.getElementById("height").value
    }
    document.write(person.name,  person.age,   person.height);
}
 function test_2(temp){
     return function(object1,object2){
         var value1 = object1[temp];
         var value2 = object2[temp];
         if(value1 < value2){
             return -1;
         }else if(value1 > value2){
             return 1;
         }else{
             return 0;
         }
     }
 }

function try_test_2(){
    var data = [{name:"wangwei",age:23},{name:"lihua",age:24}];
    data.sort(test_2("name"));
    alert(data[0].name);
    data.sort(test_2("age"));
    alert(data[0].name);
}







