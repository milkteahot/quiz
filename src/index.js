var list=[];
        var ans = ['a','a','a','a','a','a','a'];
        var num=1;
        function toggle(e){
            for(var i=0;i<8;i++) {
                if($("#layer"+`${num}`).css("display") == "block"){
                $("#layer"+`${num}`).hide();
                num++;
                 break;
                }
            }
            var event = e;
            list.push(e);
            console.log(e);
            console.log(list);
            if(list.length >= 7){
            total(list);
            }
        }
        var cnt=0;
        function total(){
            for(var i=0;i<7;i++){
                if(list[i]==ans[i]){
                    cnt++;
                }
            }
            console.log(cnt);
            if(cnt>6){
                for(var i=0;i<7;i++){
                    if(list[i]==ans[i]){
                        if($("#result1").css("display") == "none"){
                        $("#result1").show();
                        }
                    }
            }
                    $(".result").text("당신의 결과는 ");
                }
        }
        