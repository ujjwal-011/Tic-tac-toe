$(document).ready(function(){

    function check(){
      if(arr[0]==arr[1] && arr[1]==arr[2] && arr[0]!=-1) return true;
      if(arr[3]==arr[4] && arr[4]==arr[5] && arr[3]!=-1) return true;
      if(arr[6]==arr[7] && arr[7]==arr[8] && arr[6]!=-1) return true;
      if(arr[0]==arr[3] && arr[3]==arr[6] && arr[0]!=-1) return true;
      if(arr[1]==arr[4] && arr[4]==arr[7] && arr[1]!=-1) return true;
      if(arr[2]==arr[5] && arr[5]==arr[8] && arr[2]!=-1) return true;
      if(arr[0]==arr[4] && arr[4]==arr[8] && arr[0]!=-1) return true;
      if(arr[2]==arr[4] && arr[4]==arr[6] && arr[2]!=-1) return true;
      return false;
    }

    function check1(){
      var cnt=0;
      for(var i=0;i<9;i++){
        if(arr[i]==-1) cnt++;
      }
      if(cnt==0) return true;
      return false;
    }

    function assign(){
      for(var i=0;i<9;i++){
        arr[i]=0
      }
    }

    setInterval(function () {
        $(".pop-up").fadeOut(1000).fadeIn(1000);
    },2000);

    var s1="Player 1 Turn"
    var s2="Player 2 Turn"
    var arr=[-1,-1,-1,-1,-1,-1,-1,-1,-1]
    var par=0;

    $(".start").click(function(){     
      for(var i=0;i<9;i++){
        arr[i]=-1;
      }    
      par=0;
      $("img").attr("src","images/white.png")
      $(".pop-up").text(s1)
      $(".start").prop('disabled',true)
     $(".data1").click(function(){
      if(arr[0]==-1){
        if(par==0){
          $(".data1 img").attr("src","images/cross.png")
          par++;
        }
        else{
          $(".data1 img").attr("src","images/circle.png")
          par--;
        }
        if($(".pop-up").text()===s1) $(".pop-up").text(s2);
        else $(".pop-up").text(s1);
        arr[0]=par;
        if(check()==true){
          if(par==0){
            $(".pop-up").text("Player 2 won.");
          }
          else{
            $(".pop-up").text("Player 1 won.");
          }
          $(".start").prop('disabled',false)
          $(".start").text("Play Again")
          assign();
        }
        else if(check1()==true){
          $(".pop-up").text("Draw");
          $(".start").prop('disabled',false)
          $(".start").text("Play Again")
          assign();
        }
      }
    });
    $(".data2").click(function(){
      if(arr[1]==-1){
      if(par==0){
        $(".data2 img").attr("src","images/cross.png")
        par++;
        }
        else{
        $(".data2 img").attr("src","images/circle.png")
          par--;
        }
        if($(".pop-up").text()===s1) $(".pop-up").text(s2);
        else $(".pop-up").text(s1);
        arr[1]=par;
        if(check()==true){
          if(par==0){
            $(".pop-up").text("Player 2 won.");
          }
          else{
            $(".pop-up").text("Player 1 won.");
          }
          $(".start").prop('disabled',false)
          $(".start").text("Play Again")
          assign();
        }
        else if(check1()==true){
          $(".pop-up").text("Draw");
          $(".start").prop('disabled',false)
          $(".start").text("Play Again")
          assign();
        }
      }
    });
    $(".data3").click(function(){
      if(arr[2]==-1){
      if(par==0){
        $(".data3 img").attr("src","images/cross.png")
        par++;
      }
      else{
        $(".data3 img").attr("src","images/circle.png")
        par--;
      }
      if($(".pop-up").text()===s1) $(".pop-up").text(s2);
      else $(".pop-up").text(s1);
      arr[2]=par;
      if(check()==true){
        if(par==0){
          $(".pop-up").text("Player 2 won.");
        }
        else{
          $(".pop-up").text("Player 1 won.");
        }
        $(".start").prop('disabled',false)
        $(".start").text("Play Again")
        assign()
      }
      else if(check1()==true){
        $(".pop-up").text("Draw");
        $(".start").prop('disabled',false)
        $(".start").text("Play Again")
        assign()
      }
    }
    });
    $(".data4").click(function(){
      if(arr[3]==-1){
      if(par==0){
        $(".data4 img").attr("src","images/cross.png")
        par++;
      }
      else{
        $(".data4 img").attr("src","images/circle.png")
        par--;
      }
      if($(".pop-up").text()===s1) $(".pop-up").text(s2);
      else $(".pop-up").text(s1);
      arr[3]=par;
      if(check()==true){
        if(par==0){
          $(".pop-up").text("Player 2 won.");
        }
        else{
          $(".pop-up").text("Player 1 won.");
        }
        $(".start").prop('disabled',false)
        $(".start").text("Play Again")
        assign()
      }
      else if(check1()==true){
        $(".pop-up").text("Draw");
        $(".start").prop('disabled',false)
        $(".start").text("Play Again")
        assign()
      }
    }
    });
    $(".data5").click(function(){
      if(arr[4]==-1){
      if(par==0){
        $(".data5 img").attr("src","images/cross.png")
        par++;
      }
      else{
        $(".data5 img").attr("src","images/circle.png")
        par--;
      }
      if($(".pop-up").text()===s1) $(".pop-up").text(s2);
      else $(".pop-up").text(s1);
      arr[4]=par;
      if(check()==true){
        if(par==0){
          $(".pop-up").text("Player 2 won.");
        }
        else{
          $(".pop-up").text("Player 1 won.");
        }
        $(".start").prop('disabled',false)
        $(".start").text("Play Again")
        assign()
      }
      else if(check1()==true){
        $(".pop-up").text("Draw");
        $(".start").prop('disabled',false)
        $(".start").text("Play Again")
        assign()
      }
    }
    });
    $(".data6").click(function(){
      if(arr[5]==-1){
      if(par==0){
        $(".data6 img").attr("src","images/cross.png")
        par++;
      }
      else{
        $(".data6 img").attr("src","images/circle.png")
        par--;
      }
      if($(".pop-up").text()===s1) $(".pop-up").text(s2);
       else $(".pop-up").text(s1);
       arr[5]=par;
       if(check()==true){
        if(par==0){
          $(".pop-up").text("Player 2 won.");
        }
        else{
          $(".pop-up").text("Player 1 won.");
        }
        $(".start").prop('disabled',false)
        $(".start").text("Play Again")
        assign()
      }
      else if(check1()==true){
        $(".pop-up").text("Draw");
        $(".start").prop('disabled',false)
        $(".start").text("Play Again")
        assign()
      }
    }
    });
    $(".data7").click(function(){
      if(arr[6]==-1){
      if(par==0){
        $(".data7 img").attr("src","images/cross.png")
        par++;
      }
      else{
        $(".data7 img").attr("src","images/circle.png")
        par--;
      }
      if($(".pop-up").text()===s1) $(".pop-up").text(s2);
      else $(".pop-up").text(s1);
      arr[6]=par;
      if(check()==true){
        if(par==0){
          $(".pop-up").text("Player 2 won.");
        }
        else{
          $(".pop-up").text("Player 1 won.");
        }
        $(".start").prop('disabled',false)
        $(".start").text("Play Again")
        assign()
      }
      else if(check1()==true){
        $(".pop-up").text("Draw");
        $(".start").prop('disabled',false)
        $(".start").text("Play Again")
        assign()
      }
    }
    });
    $(".data8").click(function(){
      if(arr[7]==-1){
      if(par==0){
        $(".data8 img").attr("src","images/cross.png")
        par++;
      }
      else{
        $(".data8 img").attr("src","images/circle.png")
        par--;
      }
      if($(".pop-up").text()===s1) $(".pop-up").text(s2);
      else $(".pop-up").text(s1);
      arr[7]=par;
      if(check()==true){
        if(par==0){
          $(".pop-up").text("Player 2 won.");
        }
        else{
          $(".pop-up").text("Player 1 won.");
        }
        $(".start").prop('disabled',false)
        $(".start").text("Play Again")
        assign()
      }
      else if(check1()==true){
        $(".pop-up").text("Draw");
        $(".start").prop('disabled',false)
        $(".start").text("Play Again")
        assign()
      }
    }
    });
    $(".data9").click(function(){
      if(arr[8]==-1){
      if(par==0){
        $(".data9 img").attr("src","images/cross.png")
        par++;
      }
      else{
        $(".data9 img").attr("src","images/circle.png")
        par--;
      }
      if($(".pop-up").text()===s1) $(".pop-up").text(s2);
      else $(".pop-up").text(s1);
      arr[8]=par;
      if(check()==true){
        if(par==0){
          $(".pop-up").text("Player 2 won.");
        }
        else{
          $(".pop-up").text("Player 1 won.");
        }
        $(".start").prop('disabled',false)
        $(".start").text("Play Again")
        assign()
      }
      else if(check1()==true){
        $(".pop-up").text("Draw");
        $(".start").prop('disabled',false)
        $(".start").text("Play Again")
        assign()
      }
    }
    });
  })
})
