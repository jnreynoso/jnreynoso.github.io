$(function(){

  var scroll = null;

  var matrix = ['Wake up, Neo...^2000','The Matrix has you ...^2000','Follow the white rabbit...^1000','Knock, knock, Neo... ^3000', 'Hi.'];

  function run(content, cad, type, skills) {
    return new Promise(function (resolve, reject) {
      $(content).typed({
        strings: cad == 'Hi.' ? matrix : [cad],
        typeSpeed: 30,
        startDelay: 2000,
        showCursor: skills == undefined ? true : false,
        backDelay: 500,
        loop: false,
        loopCount: false,
        contentType: type == 'html' ? 'html': 'text',
        callback: function (){
          $(".typed-cursor").remove();
          resolve();
        }
      });
    });

  }

  run('#hi-title-typed', 'Hi.').then(function (){

    var hi = `I'm a Peruvian developer interested in programming, Linux, Hacking and AI. I tackle on challenging problems
           and try to solve them with code. If you want to know more about me <a href='http://jnreynoso.github.io/CV.pdf'>here</a>
           is my cv. Also you can stop and say hello at <a href='mailto:jeanalessi.reynoso@yahoo.com'>jeanalessi.reynoso@yahoo.com</a>.`;

    run('#hi-content-typed', hi, 'html').then(function (){

      run('#about-title-typed', 'About', 'text').then(function (){

        var about = `My name is Jean Reynoso, I have 20 years and live in Lima, I'm a <b>programmer</b> 
               who has over 4 years of experience in software development. I started when I was very
               young to develop apps in Visual FoxPro, expanding my knowledge to all the other web
               system and achieving eventually more elaborated structures. I am currently working at
               <a href="http://www.wundermanphantasia.pe/">Wunderman Phantasia</a>
               as a Full stack developer.`;

        run('#about-content-typed', about, 'html').then(function (){

          scroll =window.setInterval(function() {
            window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
          }, 100);

          run('#skills-title-typed', 'Skills', 'text').then(function (){

            var skills = ` <ul>
                            <li>Javascript</li>
                            <li>Python</li>
                            <li>CSharp</li>
                            <li>Visual Basic</li>
                            <li>Java</li>
                            <li>C/C++</li>
                            <li>HTML-CSS</li>
                            <li>SQL</li>
                            <li>PHP</li>
                           </ul>`;

            run('#skills-content-typed', skills, 'html', 'hideCursor').then(function (){

              run('#bye-typed', 'Bye^2000.^2000.^2000.', 'text').then(function (){

                clearInterval(scroll);

              });

            });

          });
        });
      });
    });
  });
});


