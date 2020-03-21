var list=[];
        var ans = ['a','a','a','a','a','a','a'];
        var num=1;
        var bust = 0;
        function toggle(e){
            var event = e;
            for(var i=0;i<8;i++) {
                if($("#layer"+`${num}`).css("display") == "block"){
                $("#layer"+`${num}`).hide();
                num++;
                 break;
                }
            }
            list.push(event);
            console.log(event);
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
                    //$(".result").text("당신의 결과는 ");
            }
        }
        