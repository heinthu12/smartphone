   
window.addEventListener('DOMContentLoaded',
                         function(){
    var sub = document.querySelector('[type = "submit"]'); 
	var pass = document.querySelector('[name="password"]');
    var epass = document.querySelector('#epass');
	
	var reset = document.querySelector('[type = "reset"]'); 
    var no = document.querySelector('[name= "no"]');
    var eno = document.querySelector('#eno');//エラーメッセージ出力用
    var ename = document.querySelector('#ename')
    var name = document.querySelector('[name ="name"]');
	no.addEventListener('keyup',
                       function(e){
        myValidate(no,eno);//関数myValidateをCall
    },false
);
    name.addEventListener('keyup',
                       function(e){
        myValidate(name,ename);//関数myValidateをCall
    },false
);
    
    //passを入力後実行するコート
   pass.addEventListener('keyup',
                        function(e){
        myValidate(pass,epass,ename);//関数myValidateをCall
   },false
 );
    //submitボタンのクリック時実行するコート
    sub.addEventListener('click',
                        function(e){
        e.preventDefault();
        if(no.validity.valid==true && pass.validity.valid==true){//エラーはない
            alert('出席番号は' + no.value + 'パスワードは' + pass.value);
            
    }else{//エラーがある
         // no のチェック
        myValidate(no,eno);//関数myValidateをCall
        //passのチェック
        myValidate(pass,epass);//関数myValidateをCall
        myValidate(name,ename);
         }
       },false
    );
    //resetボタンのクリック時実行するコート
    reset.addEventListener('click',
                          function(){
        //htmlの初期化
        eno.innerHTML = '';
        epass.innerHTML = '';
    },false
                          );
  },false
);
    //関数myValidateの定義
function myValidate(inE,outE){
    var message = ''; //メッセージ初期化
    //入力値のチェック
    if(inE.value === '')
        message = '未入力です。</br>';
    else if(inE.validity.valid === false)
        message = 'パータンが違います。</br>';
    else
        message = '<img src="image/check.png">';
    //メッセージの表示
    outE.innerHTML = message;
}