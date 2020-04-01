$(document).ready(function(){

//hacer cambiar de color el logo :

      setInterval(function(){
        let logo = document.querySelector('#logo');
        if(logo.style.color == 'black'){
            logo.style.color = 'yellow'
        }else {
            logo.style.color = 'black';
        }
      },500)




/** 1 plugin con jquery slider */
if(window.location.href.indexOf('index') > -1){

        $('.bxslider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 1000
            });

}

/** 2 almacenar los post dinamicamente con json */
if(window.location.href.indexOf('index') > -1){
    var posts = [
        {
            title: 'Jeffree Star has COVID-19',
            date: 'submit : 29/03/2020',
            img:  'img/article1.jpg',
            content: `
            Jeffree recently uploaded a video, where he gaves an update to his house, and his status right now. It's come to our attention that he says that legally can not talk about it, and then his assistant makes a reference about doing things for people who don't deserve it. This is brought up because jeffree recently change de title of a video he did with his ex. The legal thing, could it be that Nathan and jeffree are in a legal battle about, idk their marihuana business maybe? What dou YOU think? Comment down below!Sending jeffree lots of love and good vibes! ~<br><br>

            Jeffree recientemente estrenó un nuevo video, dónde da una actualización de su casa y de su estatus en este momento. Nos ha llamado la atención que el diga que legalmente no puede hablar de su estatus, y después su asistente hace referencia sobre el hacer mucho por las personas que no lo merecen. Todo esto es mencionado por una reciente polémica que tuvo el youtuber al cambiar el título de un vídeo que realizó con su ex. El asunto legal podría der que Nathan y jeffree de encuentran en una batalla legal?, Quizás por su negocio de marihuana? Que piensan ustedes? Comenten!
            Enviándole a jeffree mucho amor y buenas vibras! 📸 Taken from
      `
        },
        {
            title: 'HBO confirmed the return of "Friends"',
            date: 'submit: 20/02/2020',
            img: 'img/article2.jpg',
            content: `The characters of "Friends" in their usual place in Central Perk,
                      from left to right: Joey (Matt LeBlanc), Rachel (Jennifer Aniston), Ross (David Schwimmer), Chandler
                      (Matthew Perry), Monica (Courteney Cox) and Phoebe (Lisa Kudrow)
                      After several weeks of speculation, the future content platform HBO Max confirmed on Friday
                      that the star stars of the series "Friends" will meet again in a special that will be available
                      from the launch of the service next May.<br><br>

                      The six protagonists of "Friends", the creators of the series and the Warner Bros. studios have reached an agreement
                      to prepare this special together after several negotiations, according to sources quoted by the specialized media The Hollywood Reporter.

                      Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry and David Schwimmer, as well as the creators David Crane and Marta Kauffman, would have asked for this program double the salary they charged for each episode of the legendary series, an amount that US media estimates it will be around 2.5 or 3 million dollars.`
        }
    ];

    console.log(posts);

        posts.forEach((item,index)=>{

        var post =
        `<article class='post'>
            <h3>${item.title}</h3>
            <span class='date'>${item.date}</span><br>
            <img class='img-post' src='${item.img}'><br><br>
            <p>
                ${item.content}
            </p>
            <button class='leermas'>read more...</button>
        </article>`;

        $('#posts').append(post);

    });

}

    /*
                    <article class='post'>
                        <h3>Lorem</h3>
                        <span class='date'>date of submit</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia natus molestias
                            deleniti cum? Laborum harum, ipsam eius, voluptates rem natus magnam voluptas
                            nihil ullam, aut aspernatur assumenda ipsum officiis atque? Lorem ipsum, dolor sit
                            amet consectetur adipisicing elit. Debitis nihil culpa ducimus distinctio incidunt
                            neque consequatur, tempora id nulla sint facere explicabo repellat voluptatum optio
                            accusantium placeat rem recusandae excepturi.</p>
                        <button class='leermas'>read more...</button>
                    </article>
                    */


/* Cambiadores de color por tema : */

//selector de tema
var theme = $('#theme');
$('#to-green').click(function(){
    theme.attr('href','css/green.css');
});

$('#to-red').click(function(){
    theme.attr('href','css/red.css');
});

$('#to-blue').click(function(){
    theme.attr('href','css/blue.css');
});

//scroll para subir en la web

$('.subir').click(function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop:0,
    }, 'slow');
    return false
})

//login falso

    $('#login').submit(function(){
        var form_name=  $('#name').val();
        var form_email= $('#email').val();
        var form_password= $('#password').val();
        localStorage.setItem('form_name',form_name);
        localStorage.setItem('from_email',form_email);
        localStorage.setItem('form_password',form_password);

    })

    var form_name = localStorage.getItem('form_name');

    if(form_name != null && form_name != 'undefined'){
        var about_parrafo = $('#about p');
        about_parrafo.html('<strong>Bienvenid@, ' + form_name+'</strong><br>');
        about_parrafo.append('<br><a href="" id="logout" >Cerrar sesion</a>');
        $('#login').hide();
        $('#sidebar').addClass('stick');

        /*position: fixed;
        min-height: 225px;
        margin-bottom: 10px;
        margin-right: 10px;
        overflow: hidden;
        text-align: center;
        width: 200px;*/
        $('#logout').click(function(){
            localStorage.clear();
            location.reload();
        })
    }


//acordeon con jqueryUI

if(window.location.href.indexOf('about') > -1){
    $('#acordeon').accordion();
}


//reloj con jquery :

if(window.location.href.indexOf('clock') > -1){


    setInterval(function(){
        var reloj = moment().format('h:mm:ss a');
        $('#reloj').html(reloj);
    },1000)
}

//validacion de formulario con plugin de jquery:
if(window.location.href.indexOf('contact') > -1){
$.validate({
    lang: 'es',
    errorMessagePosition: 'top',

  });
}

});
