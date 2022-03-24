function getScores(){
  let req1 = parseInt(document.querySelector("#req1").value);
  let req2 = parseInt(document.querySelector("#req2").value);
  let req3 = parseInt(document.querySelector("#req3").value);
  let req4 = parseInt(document.querySelector("#req4").value);
  let req5 = parseInt(document.querySelector("#req5").value);
  let req6 = parseInt(document.querySelector("#req6").value);
  let req7 = parseInt(document.querySelector("#req7").value);
  let req8 = parseInt(document.querySelector("#req8").value);
  let req9 = parseInt(document.querySelector("#req9").value);

  console.log(req1 + req2 + req3);
  console.log(req4 + req5 + req6);
  console.log(req7 + req8 + req9);
  getSum(req1, req2, req3, req4, req5, req6, req7, req8, req9);
}

function getSum(r1, r2, r3, r4, r5, r6, r7, r8, r9){
  let sum1 = r1+r2+r3;
  let sum2 = r4+r5+r6;
  let sum3 = r7+r8+r9;

  console.log(sum1);
  console.log(sum2);
  console.log(sum3);
  
  getPercent(sum1, sum2, sum3);
}

function getPercent(sum1, sum2, sum3){

  const HPS = 20+30+50;
  percentage1 = sum1/HPS * 100;
  percentage2 = sum2/HPS * 100;
  percentage3 = sum3/HPS * 100;
 
  console.log(percentage1);
  console.log(percentage2);
  console.log(percentage3);
  calcGrade(percentage1, percentage2, percentage3);
}

function calcGrade(tentaGrade1,tentaGrade2,tentaGrade3){
  let prevGrade1 = parseInt(document.querySelector("#prev1").value);
  let prevGrade2 = parseInt(document.querySelector("#prev2").value);
  let prevGrade3 = parseInt(document.querySelector("#prev3").value);
  
  let grade1 = ((2 * tentaGrade1) + prevGrade1)/3;
  let grade2 = ((2 * tentaGrade2) + prevGrade2)/3;
  let grade3 = ((2 * tentaGrade3) + prevGrade3)/3;
  
  console.log(prevGrade1);
  console.log(prevGrade2);
  console.log(prevGrade3);
  console.log(grade1);
  console.log(grade2);
  console.log(grade3);

  calcPisayGrade(grade1, grade2, grade3);
}

function calcPisayGrade(g1, g2, g3){
  let convGrade1;
  let convGrade2;
  let convGrade3;
  
  switch (true){
    case g1 >= 96:
      convGrade1 = 1.00;
      console.log("1.00");
      break;
  
    case g1 >= 90:
      convGrade1 = 1.25;
      console.log("1.25");
      break;
  
    case g1 >= 84:
      convGrade1 = 1.50;
      console.log("1.50");
      break;
        
    case g1 >= 78:
      convGrade1 = 1.75;
      console.log("1.75");
      break;
        
    case g1 >= 72:
      convGrade1 = 2.00;
      console.log("2.00");
      break;
        
    case g1 >= 66:
      convGrade1 = 2.25;
      console.log("2.25");
      break;
        
    case g1 >= 60:
      convGrade1 = 2.50;
      console.log("2.50");
      break;
    
    case g1 >= 55:
      convGrade1 = 2.75;
      console.log("2.75");
      break;
    
    case g1 >= 50:
      convGrade1 = 3.00;
      console.log("3.00");
      break;
        
    case g1 >= 40:
      convGrade1 = 4.00;
      console.log("4.00");
      break;
        
    case g1 >= 0:
      convGrade1 = 5.00;
      console.log("5.00");
      break;

    default:
      break;
  }

  switch (true){
    case g2 >= 96:
      convGrade2 = 1.00;
      console.log("1.00");
      break;
  
    case g2 >= 90:
      convGrade2 = 1.25;
      console.log("1.25");
      break;
  
    case g2 >= 84:
      convGrade2 = 1.50;
      console.log("1.50");
      break;
        
    case g2 >= 78:
      convGrade2 = 1.75;
      console.log("1.75");
      break;
        
    case g2 >= 72:
      convGrade2 = 2.00;
      console.log("2.00");
      break;
        
    case g2 >= 66:
      convGrade2 = 2.25;
      console.log("2.25");
      break;
        
    case g2 >= 60:
      convGrade2 = 2.50;
      console.log("2.50");
      break;
    
    case g2 >= 55:
      convGrade2 = 2.75;
      console.log("2.75");
      break;
    
    case g2 >= 50:
      convGrade2 = 3.00;
      console.log("3.00");
      break;
        
    case g2 >= 40:
      convGrade2 = 4.00;
      console.log("4.00");
      break;
        
    case g2 >= 0:
      convGrade2 = 5.00;
      console.log("5.00");
      break;

    default:
      break;
  }

  switch (true){
    case g3 >= 96:
      convGrade3 = 1.00;
      console.log("1.00");
      break;
  
    case g3 >= 90:
      convGrade3 = 1.25;
      console.log("1.25");
      break;
  
    case g3 >= 84:
      convGrade3 = 1.50;
      console.log("1.50");
      break;
        
    case g3 >= 78:
      convGrade3 = 1.75;
      console.log("1.75");
      break;
        
    case g3 >= 72:
      convGrade3 = 2.00;
      console.log("2.00");
      break;
        
    case g3 >= 66:
      convGrade3 = 2.25;
      console.log("2.25");
      break;
        
    case g3 >= 60:
      convGrade3 = 2.50;
      console.log("2.50");
      break;
    
    case g3 >= 55:
      convGrade3 = 2.75;
      console.log("2.75");
      break;
    
    case g3 >= 50:
      convGrade3 = 3.00;
      console.log("3.00");
      break;
        
    case g3 >= 40:
      convGrade3 = 4.00;
      console.log("4.00");
      break;
        
    case g3 >= 0:
      convGrade3 = 5.00;
      console.log("5.00");
      break;

    default:
      break;
  }
 
  console.log(convGrade1);
  console.log(convGrade2);
  console.log(convGrade3);

  let subjUnit1 = parseFloat(document.querySelector("#unit1").value);
  let subjUnit2 = parseFloat(document.querySelector("#unit2").value);
  let subjUnit3 = parseFloat(document.querySelector("#unit3").value);

  let totalUnit = subjUnit1 + subjUnit2 + subjUnit3;

  console.log(subjUnit1);
  console.log(subjUnit2);
  console.log(subjUnit3);
  console.log(totalUnit);

  
  finalGrade = ((convGrade1*subjUnit1)+(convGrade2*subjUnit2)+(convGrade3*subjUnit3))/totalUnit;

  document.write("Your Final Grade is " + finalGrade);
}


function calcFinalGrade(){
  getScores();
}
