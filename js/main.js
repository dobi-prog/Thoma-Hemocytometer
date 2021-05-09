'use strict';

{
  // カウント細胞数の取得

  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {

    let number1 = Number(document.getElementById('number1').value);
    let number2 = Number(document.getElementById('number2').value);
    let number3 = Number(document.getElementById('number3').value);
    let number4 = Number(document.getElementById('number4').value);
    let number5 = Number(document.getElementById('number5').value);

    let average = (number1 + number2 + number3 + number4 + number5) / 5;
    // console.log(average);

    let dil = Number(document.getElementById('dil').value);
    // console.log(dil);

    let calc = average * dil /0.000004;
    // console.log(calc);
    let con = calc.toExponential(1);
    // console.log(con);

    let str = String(con);
    // console.log(str);
    let resultLeft = str.substr(0, 3);
    // console.log(resultLeft);
    let exp = str.substr(5, 1);
    // console.log(exp);
    let resultRight = 10 + '<sup>' + exp + '</sup>';
    // console.log(resultRight);

    let result = resultLeft + '×' + resultRight;
    // console.log(result);

    document.getElementById('result').innerHTML = result;
  });

  // 細胞濃度の算出

}