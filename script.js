//1. AND(&&)の条件を作成し、その処理に入るよう作ってください。(elseの処理も作成してください)
var numA = 50;
var numB = 100;
if(numA == 50 && numB ==100){
  console.log("ANDの条件と一致した処理");
  console.log(numA == 50 && numB == 100);
}else{
  console.log("ANDの条件と一致しなかった処理");
  console.log(numA == 50 && numB == 100);
};

//2. OR(||)の条件を作成し、その処理に入るよう作ってください。(elseの処理も作成してください)
var numA = 80;
var numB = 90;
if(numA == 75 || numB == 90){
console.log("ANDの条件と一致した処理");
console.log(numA == 80 || numB == 90);
}else{
  console.log("ANDの条件と一致しなかった処理");
  console.log(numA == 65 || numB == 65);
};

//3. NOT(!)の条件を作成し、その処理に入るよう作ってください。比較条件は数値型の比較でお願いします。(elseの処理も作成してください)
var num = null;
if(!num){
  console.log("NOTの条件と一致した処理");
  console.log(num);
}else{
  console.log("NOTの条件と一致しなかった処理");
  console.log(num);
};