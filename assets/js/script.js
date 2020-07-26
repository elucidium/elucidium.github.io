$(document).ready(function () {
    $('.fade-in').each(function(index) {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
            $(this).delay(75 * index).queue(() => {
                $(this).addClass('is-visible').dequeue();
            });
        }
    });
})

$(window).scroll(function() {
    $('.fade-in').each(function() {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
            $(this).addClass('is-visible');
        }
    });
});

particlesJS('particles', {
    "particles": {
      "number": {
        "value": 127,
        "density": {
          "enable": true,
          "value_area": 700
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 2,
          "color": "#ffffff80"
        },
        "polygon": {
          "nb_sides": 6
        },
        "image": {
          "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Benzene_circle.svg/2000px-Benzene_circle.svg.png",
          "width": 10,
          "height": 10
        }
      },
      "opacity": {
        "value": 0.2,
        "random": false
      },
      "size": {
        "value": 5,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "bounce",
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "bubble": {
          "distance": 200,
          "size": 7,
          "duration": 2,
          "opacity": 0.1,
          "speed": 3
        },
        "push": {
          "particles_nb": 1
        }
      }
    },
    "retina_detect": true
  });