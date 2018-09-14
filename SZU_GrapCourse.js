// ==UserScript==
// @name         SZUGrabCourse
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://ehall.szu.edu.cn/yjsxkapp/sys/xsxkapp/xsxkHome/gotoChooseCourse.do
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var inArray = function(arr, item) {
       for(var i = 0; i < arr.length; i++) {
              if(arr[i] == item) {
                     return true;
              }
       }
       return false;
    };
    // Your code here...
    var targetCourse = new Array('2706004')
    window.onload=function(){
        setTimeout(function(){
                    //找到课程列表
            var mainTable = document.getElementById("zynkcGrid").getElementsByTagName("tbody")[0].getElementsByTagName("tr");
            //var mainTable = document.getElementById("zynkcGrid").childNodes;
            for(var i=0;i<mainTable.length;i++){
                //如果出现了目标课程，那么点开看看
                if(inArray(targetCourse,mainTable[i].getElementsByTagName("td")[0].innerHTML )){
                    //点开某门课的标签
                    mainTable[i].click();
                    //点开具体课程
                    var course = mainTable[i].getElementsByClassName("cv-course-card")[0]
                    //如果这门课还有剩余名额就点击选课
                    if(course.getElementsByTagName("div")[0].getElementsByTagName("div")[4].getElementsByTagName("div")[1].style['width']!="100%"){
                        console.log("可以选！")//width:100%
                        course.click();
                        //选课
                        course.getElementsByTagName("button")[0].click();
                    }
                }
            }
            location.reload()
        },1000);
    }

})();