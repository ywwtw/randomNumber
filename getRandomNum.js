const myclassList=[
    {
        id:1,
        img:"./img/1.jpg"
    },
    {
        id:2,
        img:"./img/2.jpg"},
    {
        id:3,
        img:"./img/3.jpg"
    },
    {
        id:4,
        img:"./img/4.jpg"
    },
    {
        id:5,
        img:"./img/5.jpg"
    },
    {
        id:6,
        img:"./img/6.jpg"
    },
    {
        id:7,
        img:"./img/7.jpg"
    },
    {
        id:8,
        img:"./img/88.jpg"
    },
    {
        id:9,
        img:"./img/9.jpg"
    },
    {
        id:10,
        img:"./img/10.jpg"
    },
    {
        id:11,
        img:"./img/11.jpg"
    },
    {
        id:12,
        img:"./img/12.jpg"
    },
    {
        id:13,
        img:"./img/13.jpg"
    },
    {
        id:14,
        img:"./img/14.jpg"
    },
    {
        id:15,
        img:"./img/15.jpg"
    },
    {
        id:16,
        img:"./img/16.jpg"
    },
    {
        id:31,
        img:"./img/31.jpg"
    },
    {
        id:32,
        img:"./img/32.jpg"
    },
    {
        id:33,
        img:"./img/33.jpg"
    },
    {
        id:34,
        img:"./img/34.jpg"
    },
    {
        id:35,
        img:"./img/35.jpg"
    },
    {
        id:36,
        img:"./img/36.jpg"
    },
    {
        id:37,
        img:"./img/37.jpg"
    },
    {
        id:38,
        img:"./img/38.jpg"
    },
    {
        id:39,
        img:"./img/39.jpg"
    },
    {
        id:40,
        img:"./img/40.jpg"
    },
    {
        id:41,
        img:"./img/41.jpg"
    },
    {
        id:42,
        img:"./img/42.jpg"
    },
    {
        id:43,
        img:"./img/43.jpg"
    },
    {
        id:44,
        img:"./img/44.jpg"
    },
    {
        id:45,
        img:"./img/45.jpg"
    },
    {
        id:46,
        img:"./img/46.jpg"
    },
]

function createImage(myclass){
    const members =`
        <div class=student>
            <img src="${myclass.img}" class="studentImg">
            <p>${myclass.id}號</p>
        </div>
    `
    return members;
}

// myclassList.forEach(myclass => {
//     const classmembers = createImage(myclass);
//     $("#pic").append(classmembers);
// });
for(let i=0;i<4;i++){
    const classB=createImage(myclassList[i]);
    $("#picB1").append(classB);
}
for(let i=4;i<8;i++){
    const classB=createImage(myclassList[i]);
    $("#picB2").append(classB);
}
for(let i=8;i<12;i++){
    const classB=createImage(myclassList[i]);
    $("#picB3").append(classB);
}
for(let i=12;i<16;i++){
    const classB=createImage(myclassList[i]);
    $("#picB4").append(classB);
}


for(let i=16;i<20;i++){
    const classG=createImage(myclassList[i]);
    $("#picG1").append(classG);
}
for(let i=20;i<24;i++){
    const classG=createImage(myclassList[i]);
    $("#picG2").append(classG);
}
for(let i=24;i<28;i++){
    const classG=createImage(myclassList[i]);
    $("#picG3").append(classG);
}
for(let i=28;i<32;i++){
    const classG=createImage(myclassList[i]);
    $("#picG4").append(classG);
}
function start(){
    let result = document.getElementById('result');
    let getRandom = setInterval(displayNum, 50);
    function displayNum(){   
        random = Math.floor(Math.random() * 46 + 1);
        if(random>16 && random<31){
            displayNum(); 
        }else{
            let picIndex = myclassList.findIndex(x=>x.id === random);
            result.innerHTML =`
            <div><img src="${myclassList[picIndex].img}" class="displayPic"></div>
            <div class="resultnum">
            <div class = "left">${random}</div>
            <div class = "right">號</div>
            </div>
            `       
        }                   
            setTimeout(function(){
                clearInterval(getRandom);
            },3000);  
                
    }       
}