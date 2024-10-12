// 
var text = "mahmoud";
 text = "mahmoud mohsen";
 var number1=2121;
// console.log(text);
// console.log([text]);
// document.write(text);
// console.log(namer1 *2);
// console.getElementById("title");
// document .write(`
//     <h1 style=" color:green" >javascript</h1>
//      `)
// let title = document.getElementById("title");
// title .outerHTML = " <p>mohsen  n</p> ";
// document .getElementById("title").innerHTML = "<p>fffffffffffffffffffffffffffffff</p>";
// let text = "I$laern$javascript";
// text = text.replace("$", "");

// document.getElementById("title").innerHTML = text;

// var data =["mahmoud",29,true,["mohsen","Arabic"]]
// data[2]= "good"
// data[3]="java"
// // delete data[1]
// // data.splice(1,1)
// // console.log(data)
// // console.log(data[data.length -4])
// // console.log(data[3],[0])

// // data.forEach(item =>{
// //     count++
// //     console.log(count + ":")
// //     console.log(item)
// // })
// // ..............................................................*
// // var count = 0;
// // var languages =["Arabic","English","Arabic","English","Arabic","Arabic","English","Arabic","English"]
// // languages.forEach(language =>{
// //     document.getElementById("title").innerHTML += `<li> ${language}</li>`
// // })
// //JavaScript Objects 
// // key : value     
// // ---------------------------------------------------------------------
// // يمكن تخزين ضمن المفتاح : بيانات من هذه الانواع التالي  
// // Arrays, boolean , String , Number , function Return , Objects 

// var data = {
//     name:"mahmoud",
//     age:20 ,
//     working: true ,
//      language: ["html","css","javascript"]  ,
//     myFunction: function(){
//         return 10 * 10
//     } };
//     data.name = "mahmoud JavaScript";
// // هنا قمنا بإنشاء مفتاح جديد وحددنا قيمة الذي نرغب بتخزينها ضمن المفتاح , وقمنا بإضافته للاوبجت المحدد

// data.color = "Red";
// data.title = "home";
// // delete لحذف بيانات من اوبجكت كل ما عليك بتحديد اي قيمة ترغب بحذفها 
// // الذي يتواجد ضمن اوبجكت الذي ترغب بحذف بيانات منها مثال:
// // delete data.name;     هنا قمنا بحذف مفتاح نئم من اوبجكت مع بياناتها
// // مثال لطريقة عرض البيانات الموجودة ضمن اوبجكت - قد يفيدك اثناء البرمجة
// console.log(data);
// // مثال لطريقة لعرض بيانات المخزنة ضمن فاريبل الذي يتواجد ضمن احد مفاتيح في اوبجكت
// console.log(data.name);
// console.log(data["name"]);
// // مثال لعرض بيانات المخزنة ضمن ارراي الذي يتواجد ضمن احد مفاتيح في اوبجكت
// console.log(data.language[0]);
// // مثال لطريقة استدعى فونكشن مخزن ضمن مفتاح في اوبجكت
// console.log(data.myFunction());
// var users = {
//     user1:{email:"user1@gmail.com" , password:"test1234"} , 
//     user2:{email:"user2@gmail.com" , password:"134342355"} , 
//     user3:{email:"user3@gmail.com" , password:"setgfdrg"}
// };
// alert(users.user3.password);
// alert(users["user1"]["email"]);
// var points = 70;

// if (points >= 90) {
//   alert("ممتاز");
// } else if (points >= 80) {
//   alert("جيد جدا");
// } else if (points >= 70) {
//   alert("جيد");
// } else if (points >= 60) {
//   alert("مقبول");
// } else {
//   alert("ضعيف");
// }
//      >	        علامة أكبر من
//      <	        علامة أصغر من
//      >=	        علامة أكبر من أو يساوي
//      <=	        علامة أصغر من أو يساوي
//      ==	        القيمتين متساويتين بغض النظر 
//      !=	        القيمتين غير متساويتين
//       &&       and
// ........................................................................*
// var count = 1;
// while(count<=100){
//     document.getElementById("title").innerHTML+="mahmoud:" + count + "<br>";
//     ++count;
// }

// for(var count= 0;count<=10;++count){
//     document.getElementById("title").innerHTML+="mahmoud:" + count + "<br>";

// }
// ...................................................................................for  while
// var id2 =["name:mahmoud","age:29","Nationality:Egypt"]
// for(var count=0;count<id2.length;count++){
//     document.getElementById("title").innerHTML+=id2[count]+"<br>";
// }
// ......................................................................break

// var i = 1;
// while(i<=10){
//     if(i==8){
//         break;
//     }
//     console.log("ID:"+i);
//  ++i;
// }
// ........................................................................ continue..................
// for(var count = 1; count<=10 ; ++count){
//     if(count==8)
//          {
//         continue;
//     }
//     document.getElementById("title").innerHTML += "ID : "+ count +"<br>";
// }
// ...................................................................................do while....
// var i = 1;
// do {
//     document.getElementById("title").innerHTML += "ID : "+ i +"<br>";
//     ++i;
// }
// while (i <= 10);
// -------------------------------------------------------------------------------------foreach loop

// var myHobbies = ["Football" , "ICT" , "Swimming" , "Singing" , "Programming"];

// // document.write(myHobbies[1]);

// // for(var i in myHobbies){
// // console.log(myHobbies[i]);
// // }

// var title = document.getElementById("title");
// myHobbies.forEach(items=>{
//     title.innerHTML += "<li>" + items + "</li>" ;
//     console.log(items);
// });
// -------------------------------------------------------------------------------foreach loop-------------------

// var user = {name:"mahmoud",password:"1234", user:"admin"};
// var users = { 
//     user1:{name:"mahmoud",password:"1454234", user:"admin"} , 
//     user2:{name:"mohsen",password:"12646434", user:"user"} , 
//     user3:{name:"mohammad",password:"416161", user:"Admin"}
//  };
//  for (var items in users){
//     console.log(users[items].name);
//  }
//  var table_items = document.getElementById("table_items");
//  for (var items in users){
//     table_items.innerHTML += 
//     "<tr>" 
//     + "<td> "  + users[items].name + "</td>"
//     + "<td> "  +users[items].password + "</td>"
//     + "<td> "  + users[items].user +"</td>"
//     "</tr>"; }

// Object.keys(users).forEach(element=>{
//     document.write(users [element].name + "<br>");
// });
// ------------------------------------------------------------تنفيذ اوامر على  cssوhtml------
// var body = document.getElementById("body");
// body.style.backgroundImage = "linear-gradient(to left, #000000e3, #232222d9)";

// var logo = document.getElementById("logo");
// logo.style.width = "100px";
// logo.style.position= "absolute";
// logo.style.top = "50%";
// logo.style.left = "50%";
// logo.style.transform= "translate(-50%, -50%)";
// logo.style.backgroundColor ="red"
// logo.style.borderRadius ="50%"
// -------------------------------------------------------------تنفيذ اوامر على  cssوhtml------
//  document.querySelector()                    لتحديد عنصر واحد                
//  document.querySelectorAll()              لتحديد جميع العناصر

// var header = document.querySelector("header");
// header.innerHTML = "<h1>Hi good mahmoud</h1>";

// var myElements = document.querySelectorAll("header , main");
// myElements[1].style.color = "white";

// // //  i  = مجرد اسم فاريابل استخدمناها لاجل العدد
// // // length قمنا بإستخدامها لجلب عدد عناصر الذي تم تحديدها
// for(var i = 0; i<= myElements.length; ++i){
// // هنا طلبنا بأن بتم تنفيذ اوامر الذي نرغب به على جميع العناصر المحددة
//     myElements[i].innerHTML += "I love good mahmoud" ; 
//     myElements[i].style.background = "red";
   // -------------------------------------------------------تنفيذ اوامر على  cssوhtml---------
//     var content = document.getElementById("content");
//     content.innerHTML = " mahmoud ";
//  content.style.background = "red";
//     document.getElementById("content");
// // --------------------------------------// function  مهمة - وظيفة-----------------------
// function run_codes(){

//     alert("تم استدعاء الوظيفة");
// }
// -----------------------------------
// function         مهمة - وظيفة
// return        - إرجاع = إعادة
// parameters    - فاريبل يتم تحديد لها قيمة عند إستدعاء الوظيفة
// -----------------------------------

// function plus(number1,number2){

//     return number1 + number2;
// }
// alert(plus(500 , 200));
// -------------------------------////////////////////////////////////////////
// function getValue(){
//     var text = document .getElementById("text-1").Value;
//     console.log (text);
// }
// ////////////////////////////////////////////////////////////////////////----------
// class App{
//     constructor(){
//       alert("send") ;
//     }
// }
// onload = new App();
// console.log (App);
// document.write(App)
// var app_object = new App();
// var app_object = new App();
// ----------------------------------------------------------------------------------------
class App{
        constructor(text,img){
         let mo =document.getElementById("mo");
        mo.innerHTML = "<img src='" + img + "' />   <h1>" + text + "</h1>" ;

        }
    }
    onload = new App("text","about-4.png");