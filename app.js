
 var eng = Number(prompt('enter eng marks'));
 var urdu = Number(prompt('enter urdu marks'));
 var math = Number(prompt('enter math marks'));
 var pakStudy = Number (prompt('enter pakStudy marks'));
 var islamiat = Number(prompt('enter islamiat marks'));

 var totalMarks = 500;
 var obtainedMarks = (eng+urdu+math+pakStudy+islamiat);
 var percentage = (obtainedMarks*100/totalMarks);



 console.log(totalMarks);
 console.log(obtainedMarks);
 console.log(percentage);

 // console.log(eng);
 // console.log(urdu);
 // console.log(math);
 // console.log(pakStudy);
 // console.log(islamiat);
 // 
 
 if (percentage > 40 && percentage < 50 )
{
 console.log('D Grade ');

}else if (percentage > 50 && percentage < 60 ){
    console.log('C Grade');

}else if (percentage > 60 && percentage < 70){
    console.log('B Grade');
    
}else if (percentage  > 70 && percentage < 100){
    console.log('A Grade');
    
}else {
    console.log('fail');
    
}


