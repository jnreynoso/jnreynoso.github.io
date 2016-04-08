$(function(){

  function run(content, cad) {
    return new Promise(function (resolve, reject) {
      $(content).typed({
        strings: [cad],
        typeSpeed: 1,
        //showCursor: false,
        backDelay: 500,
        loop: false,
        contentType: 'html',
        callback: function (){
          $(".typed-cursor").remove();
          resolve();
        }
      });
    });

  }

  run('#hi-title-typed', 'Hi.').then(function (){

    var hi = "I'm a Peruvian developer interested in programming, Linux, Hacking and AI. I tackle on challenging problems\
           and try to solve them with code. If you want to know more about me <a href='http://jnreynoso.github.io/CV.pdf'>here</a>\
           is my cv. Also you can stop and say hello at <a href='mailto:jeanalessi.reynoso@yahoo.com'>jeanalessi.reynoso@yahoo.com</a>.";

    run('#hi-content-typed', hi).then(function (){

      run('#about-title-typed', 'About').then(function (){

        var b = "My name is Jean Reynoso, I have 20 years and live in Lima, I'm a programmer who has over 3 years of\
experience in software development. I started when I was very young to develop apps in Visual FoxPro,\
expanding my knowledge to all the other web system and achieving eventually more elaborated structures.\
I am currently working at <a href='http://www.wundermanphantasia.pe'>Wunderman Phantasia</a> as a Full stack developer";

        var a = "I'm a Peruvian developer interested in programming, Linux, Hacking and AI. I tackle on challenging problems\
           and try to solve them with code. If you want to know more about me <a href='http://jnreynoso.github.io/CV.pdf'>here</a>\
           is my cv. Also you can stop and say hello at <a href='mailto:jeanalessi.reynoso@yahoo.com'>jeanalessi.reynoso@yahoo.com</a>.";

        var about = "I'm a Peruvian developer interested in programming, Linux, Hacking and AI. I tackle on challenging problems\
           and try to solve them with code. If you want to know more about me <a href='http://jnreynoso.github.io/CV.pdf'>here</a>\
           is my cv. Also you can stop and say hello at <a href='mailto:jeanalessi.reynoso@yahoo.com'>jeanalessi.reynoso@yahoo.com</a>.";


        var abouts = "My name is Jean Reynoso, I'm a programmer who has over four years of experience in software development.\
                     I started when I was very young to develop apps in Visual FoxPro, expanding my knowledge to all the other web system and";
                     //achieving eventually more elaborated structures. I am currently working at\ <a href='http://www.wundermanphantasia.pe/'>Wunderman Phantasia</a> as a Full stack developer.";

        run('#about-content-typed', b).then(function (){
          console.log('finish');
        });
      });
    });
  });

});


