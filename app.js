
function calculate(){
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let bmi = (weight/ (height*height)).toFixed(0);
    document.getElementById('result').innerText = 'Your BMI is : ' + bmi;

    if(bmi<18.5){
        document.getElementById('range').innerText = 'You are underweight. You need to gain some weight to reach a healthy weight.';
    }
    else if(bmi>=18.5 && bmi<=24.9){
        document.getElementById('range').innerText = 'Your weight is healthy.';
    }
    else if(bmi>=25 && bmi<=29.9)
        document.getElementById('range').innerText = 'You are overweight. You need to lose some weight to reach a healthy BMI.';
        
    else if(bmi>=30 && bmi<=35)
        document.getElementById('range').innerText = 'You are obese. You need to lose weight to reach a healthy BMI.';
        
    else
        document.getElementById('range').innerText = 'You are severely obese. You need to lose weight to reach a healthy BMI.';
        
    
    



}