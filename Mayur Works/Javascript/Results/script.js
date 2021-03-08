const calcy = ()=>{
    let eng = document.getElementById('eng').value;
    let mat = document.getElementById('mat').value;
    let phy = document.getElementById('phy').value;
    let che = document.getElementById('che').value;
    let grades = ''

    let totalGrades = parseInt(eng) + parseInt(mat) + parseInt(phy) + parseInt(che)
    alert(totalGrades)

    let percent = (totalGrades / 400) * 100
    alert(percent + '%')

    if(percent <= 100 && percent >=80){
        grades = 'A'
    }else
    if(percent <= 79 && percent >=60){
        grades = 'B'
    }else
    if(percent <= 59 && percent >=40){
        grades = 'C'
    }else{
        grades = 'F'
    }

    if(percent >= 39.99){
        document.getElementById('showData').innerHTML = `Out of 400 total you got ${totalGrades} 
        and your percentages are ${percent}%. your grades is ${grades}. your are passed`
    }else{
        document.getElementById('showData').innerHTML = `Out of 400 total you got ${totalGrades} 
        and your percentages are ${percent}%. your grades is ${grades}. your are fail`
    }

    
}