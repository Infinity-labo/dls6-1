// 定数imagesを定義して、配列で画像をファイルを値に入れましょう
    const images = ["images/dog1.jpg","images/dog2.jpg","images/dog3.jpg"];
// 画像名を切り替えていく
    let num = -1;
    const slide = ()=>{
// もしnumが2だったら、numに0を代入
// それ以外だったらnumに1ずつ+する処理を記入 
        if(num===2){
            num = 0;
        }else{
            num++;
        }
        document.getElementById("mypic").src = images[num];
    };
    setInterval(slide, 2000);
