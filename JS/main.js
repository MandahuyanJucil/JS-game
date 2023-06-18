

let GameManager ={
    
    setgamestart: function(classtype){
      
       this.resetplayer(classtype);
       this.setprefight();
          
    },

    resetplayer:function(classtype){
           
      switch(classtype){
        case 'pikachu':
            player=new Player(classtype,300,35,80,101);

        break;

        case 'cindaquil':
            player=new Player(classtype,320,55,50,50);

        break;

        case 'lucario':
            player=new Player(classtype,250,75,60,70);

        break;

        case 'golduck':
            player=new Player(classtype,340,70,50,60);

        break;

        case 'arceus':
            player=new Player(classtype,420,85,80,90);

        break;

        
         
      }
      let main__firstdiv = document.querySelector(".main__firstdiv");

      main__firstdiv.innerHTML='<div class="wraper"> <img src="/IMG/'+classtype.toLowerCase()+'.png"  class="main__imagechar"> <h3>'+classtype+'</h3><div class="main__information"> <p>HP:'+ player.health+'</p> <p>Power:'+player.strength+'</p> <p>AGILITY:'+player.agility+'</p> <p>SPEED:'+player.speed+'</p> </div> </div>';

    },

    setprefight:function(){         

      let header__firstdiv = document.querySelector(".header__firstdiv");
      let findmatch = document.querySelector(".findmatch");
      let main__areana = document.querySelector(".main__areana");

      header__firstdiv.innerHTML='<h2>GET READY TO THE BATTLE</h2>';
      findmatch.innerHTML='<a href="#" class="btn-findmatch" onclick="GameManager.setfight()"> <h4>FIND MATCH</h4> </a>';
      main__areana.innerHTML='<img src="/IMG/background.jpg" class="areanaimg" alt="arena">';


    },

    setfight:function(){
        let header__firstdiv = document.querySelector(".header__firstdiv");
        let findmatch = document.querySelector(".findmatch");
        let main__enemy=document.querySelector(".main__enemy");
           //enemy
        
        let opponent0= new Enemy("opponent1",200,30,60,40);
        let opponent1= new Enemy("opponent2",250,40,50,30);
        let opponent2= new Enemy("opponent3",150,60,30,50);
        let opponent3= new Enemy("opponent4",350,20,30,30);
        let randomenemy=Math.floor(Math.random()*Math.floor(4));
        
        switch(randomenemy){

            case 0:
                enemy=opponent0;

            break;

            case 1:
                enemy=opponent1;

            break;

            case 2:
                enemy=opponent2;

            break;


            case 3:
                enemy=opponent3;

            break;

           

             
        }

            header__firstdiv.innerHTML='<h2>ENEMY FOUND</h2>';
            findmatch.innerHTML ='<a href="#" class="btn-findmatch" onclick="playermove.calattack()"> <h4>ATTACK</h4> </a>';
            main__enemy.innerHTML='<div class="wraper"> <img src="/IMG/enemies/opponent'+randomenemy+'.png"  class="main__imagechar"> <h3>'+enemy.enemytype+'</h3><div class="main__information"> <p>HP:'+ enemy.health+'</p> <p>Power:'+enemy.strength+'</p> <p>AGILITY:'+enemy.agility+'</p> <p>SPEED:'+enemy.speed+'</p> </div> </div>';
    }

}