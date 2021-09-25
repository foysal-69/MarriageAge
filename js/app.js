let yourname= String( prompt( "enter Your Name"));
let yourage= Number( prompt( "enter Your Age"));	
let marrigeAge=21;
let result=yourage >= marrigeAge ?  "<span style='color:green'>অভিনন্দন </span>আপনার বিয়ের বয়স হয়েছে! দ্রুত বিয়ে করুন আর আমারে দাওয়াত দিয়েন।":"<span style='color:red'>দুঃখিত ! </span> আপনার কপালে বিয়া নাই।অনুগ্রহপূর্বক অপেক্ষা করুন";
result=`<h2 style="text-align:center"> ${yourname} , ${result} </h2>`
document.write(result )