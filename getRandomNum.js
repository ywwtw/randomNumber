const myclassList=[
    {
        id:"1",
        img:"https://cdn2.ettoday.net/images/5037/5037459.jpg"
    },
    {
        id:"2",
        img:"https://yt3.ggpht.com/ytc/AAUvwngno5cJVjzt7xzX-xjkansV7YIcrxD5G34FXCHIFQ=s900-c-k-c0x00ffffff-no-rj"},
    {
        id:"3",
        img:"https://upload.wikimedia.org/wikipedia/zh/d/d0/JaketheDog.png"
    },
    {
        id:"4",
        img:"https://stickershop.line-scdn.net/stickershop/v1/product/1627/LINEStorePC/main.png;compress=true"
    },
    {
        id:"5",
        img:"https://cdn.shopify.com/s/files/1/0264/9063/4337/files/PAW_GTG_FW20_F_Chase_001_flop_CGI_x1500.png?v=1592931209"
    },
    {
        id:"6",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20mNitxRqquo4omgXmd6wP4i_LszokoiZSg&usqp=CAU"
    },
    {
        id:"7",
        img:"https://upload.wikimedia.org/wikipedia/zh/thumb/1/18/%E8%A5%BF%E7%B4%A2.jpg/250px-%E8%A5%BF%E7%B4%A2.jpg"
    },
    {
        id:"8",
        img:"https://goodsmileshop.com/medias/sys_master/images/images/h72/hab/9156389797918.jpg"
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

myclassList.forEach(myclass => {
    const classmembers = createImage(myclass);
    $("#pic").append(classmembers);
});
function start(){
    let result = document.getElementById('result');
    let getRandom = setInterval(displayNum, 100);
    function displayNum(){
        const random = Math.floor(Math.random() * parseInt(8) + parseInt(1));   

        result.innerHTML =`
            <div><img src="${myclassList[random-1].img}" class="displayPic"></div>
            <div class="result">${random}號</div>
            `
    }
    setTimeout(function(){
        clearInterval(getRandom);
    },3000);
}