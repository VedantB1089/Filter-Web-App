noseX=0;
 noseY=0;
  function preload(){
       clown_nose=loadImage("https://i.postimg.cc/W1wC4jq5/moustache.jpg")
     } 
     function setup(){
          canvas= createCanvas(400,400);
           canvas.position(570,300);
            video=createCapture(VIDEO);
            video.size(400,400); 
            video.hide(); 
            poseNet=ml5.poseNet(video,modelLoaded);
             poseNet.on('pose',gotPoses); tint_color=""; 
            } 
            function modelLoaded(){ 
                console.log("PoseNet is initialized");
             }
              function draw(){ 
                  image(video,0,0,400,400);
                   image(clown_nose,noseX,noseY,30,30);
                    tint(tint_color);
                 } 
                 function filter_tint(){
                      tint_color=document.getElementById("color_name").value;
                     }
                      function take_snapshot(){ 
                          save("myClownFilterImage.png");
                         }
                          function gotPoses(results){ 
                              if(results.length>0){ 
                                  console.log(results);
                                   noseX=results[0].pose.nose.x-15;
                                    noseY=results[0].pose.nose.y-15; 
                                } 
                            }