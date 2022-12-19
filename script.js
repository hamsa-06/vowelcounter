var count=document.getElementById('vowelCount');
function countVowel(str){
    str=str.toLowerCase();
    let varArr=['a','e','i','o','u'],
    counter=0;
    for(let letter of str){
        if(varArr.includes(letter)){
            counter++;
            count.classList.add('blink')
        }
        else{
            count.classList.remove('blink');
        }
    }
    count.innerHTML=counter;
}