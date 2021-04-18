function start(){
    let min = document.getElementById("min").value;
    let max= document.getElementById("max").value;
    let result = document.getElementById('result');
    let getRandom = setInterval(displayNum, 100);
    function displayNum(){
        result.innerText = Math.floor(Math.random() * parseInt(max - min) + parseInt(min));
    }
    setTimeout(function(){
        clearInterval(getRandom);
    },3000);
}