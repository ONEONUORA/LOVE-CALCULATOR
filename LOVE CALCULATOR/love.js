let button=document.querySelector('button')

function love(){
    let maleName = document.querySelector('.one').value
    let femaleName= document.querySelector('.two').value

    

    let lovePercentage = Math.floor(Math.random()*100);

    if (!maleName && !femaleName){
        return
    }else if(lovePercentage > 75) {
        alert(maleName + ' & ' + femaleName  + ' ARE PERFECT MATCH')
    }else if(lovePercentage < 75 && lovePercentage > 50){
        alert(maleName + ' & ' + femaleName  + " ARE COMPARTABLE")
    }else if(lovePercentage < 50 && lovePercentage > 25){
        alert(maleName + ' & ' + femaleName  + ' NOT COMPARTABLE')
    }else{
        alert('PLEASE SEPERATE')
    }
    }

button.addEventListener('click',love)