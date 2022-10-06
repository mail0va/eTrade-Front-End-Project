// AOS.init();


// SLIDER :(

  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 700,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll:1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


//end





// sales  
$('.saless').slick({
  dots: false,
  infinite: true,
  speed: 700,
    //  arrows: false,
  // autoplay: true,
  // autoplaySpeed: 3000,
  nextArrow: '<button class="slide-arrow prev-arrow2 prev-sm-arrow2"><i class="fa-solid fa-right-long "></i></button>',
  prevArrow: '<button class="slide-arrow next-arrow2 next-sm-arrow3"><i class="fa-solid fa-left-long "></i></button>',
  slidesToShow: 4,
  slidesToScroll:4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
          //  arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
          //  arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
          //  arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//end sales 




//electronics
$('.cates').slick({
  dots: false,
  infinite: true,
  speed: 700,
  // arrows: false,
  // autoplay: true,
  // autoplaySpeed: 3000,
  nextArrow: '<button class="slide-arrow prev-arrow2 prev-sm-arrow3"><i class="fa-solid fa-right-long "></i></button>',
  prevArrow: '<button class="slide-arrow next-arrow2 next-sm-arrow3"><i class="fa-solid fa-left-long "></i></button>',
  slidesToShow: 7,
  slidesToScroll:7,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
          //  arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
          //  arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
          //  arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
//end




//sellings
$('.sellings').slick({
  dots: false,
  infinite: true,
  speed: 700,
  // arrows: false,
  // autoplay: true,
  // autoplaySpeed: 3000,
  nextArrow: '<button class="slide-arrow prev-arrow2 prev-sm-arrow3"><i class="fa-solid fa-right-long "></i></button>',
  prevArrow: '<button class="slide-arrow next-arrow2 next-sm-arrow3"><i class="fa-solid fa-left-long "></i></button>',
  slidesToShow: 4,
  slidesToScroll:4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {  
        //  arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        // arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        // arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//end
  



//start testimontials
$('.testimonial').slick({
  dots: false,
  infinite: true,
  speed: 700,
  // arrows: false,
  // autoplay: true,
  // autoplaySpeed: 3000,
  nextArrow: '<button class="slide-arrow prev-arrow2 prev-sm-arrow3"><i class="fa-solid fa-right-long "></i></button>',
  prevArrow: '<button class="slide-arrow next-arrow2 next-sm-arrow3"><i class="fa-solid fa-left-long "></i></button>',
  slidesToShow: 3,
  slidesToScroll:1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {  
        //  arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        // arrows: false,
        slidesToShow: 1,
        slidesToScroll:1
      }
    },
    {
      breakpoint: 480,
      settings: {
        // arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
//end




//start arrival

$('.arrival').slick({
  dots: false,
  infinite: true,
  speed: 700,
  // arrows: false,
  // autoplay: true,
  // autoplaySpeed: 3000,
  nextArrow: '<button class="slide-arrow prev-arrow2 prev-sm-arrow3"><i class="fa-solid fa-right-long "></i></button>',
  prevArrow: '<button class="slide-arrow next-arrow2 next-sm-arrow3"><i class="fa-solid fa-left-long "></i></button>',
  slidesToShow: 4,
  slidesToScroll:4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {  
        //  arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        // arrows: false,
        slidesToShow: 1,
        slidesToScroll:1
      }
    },
    {
      breakpoint: 480,
      settings: {
        // arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//end




//products
$('.product').slick({
  dots: false,
  infinite: true,
  speed: 700,
  // arrows: false,
  // autoplay: true,
  // autoplaySpeed: 3000,
  nextArrow: '<button class="slide-arrow prev-arrow2 prev-sm-arrow3"><i class="fa-solid fa-right-long "></i></button>',
  prevArrow: '<button class="slide-arrow next-arrow2 next-sm-arrow3"><i class="fa-solid fa-left-long "></i></button>',
  slidesToShow: 4,
  slidesToScroll:4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {  
        //  arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        // arrows: false,
        slidesToShow: 1,
        slidesToScroll:1
      }
    },
    {
      breakpoint: 480,
      settings: {
        // arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//end



//contact slider
$('.contactslider').slick({
  dots: false,
  infinite: true,
  speed: 700,
  // arrows:true,
  // autoplay: true,
  // autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<button class="slide-arrow prev-arrow prev-sm-arrow"><i class="fa-solid fa-right-long "></i></button>',
  prevArrow: '<button class="slide-arrow next-arrow next-sm-arrow"><i class="fa-solid fa-left-long "></i></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        // arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        // arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        // arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
//contact slider end





//items start
$('.item').slick({
  dots: false,
  infinite: true,
  speed: 700,
  // arrows: false,
  // autoplay: true,
  // autoplaySpeed: 3000,
  nextArrow: '<button class="slide-arrow prev-arrow2 prev-sm-arrow3"><i class="fa-solid fa-right-long "></i></button>',
  prevArrow: '<button class="slide-arrow next-arrow2 next-sm-arrow3"><i class="fa-solid fa-left-long "></i></button>',
  slidesToShow: 4,
  slidesToScroll:4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {  
        //  arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        // arrows: false,
        slidesToShow: 1,
        slidesToScroll:1
      }
    },
    {
      breakpoint: 480,
      settings: {
        // arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
//items end




 // dropdowns
 //first

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//second

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn2')) {
      var dropdowns2 = document.getElementsByClassName("dropdown-content2");
      var i;
      for (i = 0; i < dropdowns2.length; i++) {
        var openDropdown2 = dropdowns2[i];
        if (openDropdown2.classList.contains('show2')) {
          openDropdown2.classList.remove('show2');
        }
      }
    }
  }

  // end dropdown.


    

  //user dropdown
  function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show3");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn3')) {
      var dropdowns3 = document.getElementsByClassName("dropdown-content3");
      var i;
      for (i = 0; i < dropdowns3.length; i++) {
        var openDropdown3 = dropdowns3[i];
        if (openDropdown3.classList.contains('show3')) {
          openDropdown3.classList.remove('show3');
        }
      }
    }
  }

//user drodown end

//user dropdown mobile start
  //user dropdown
  function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show4");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn4')) {
      var dropdowns4 = document.getElementsByClassName("dropdown-content4");
      var i;
      for (i = 0; i < dropdowns4.length; i++) {
        var openDropdown4 = dropdowns4[i];
        if (openDropdown4.classList.contains('show4')) {
          openDropdown4.classList.remove('show4');
        }
      }
    }
  }
//user dropdown mobile end






//counter

var dateCountDown = new Date("Oct 31, 2022 23:59:59").getTime()

var setInt = setInterval(function () {
  var now = new Date().getTime();
  var countDiffer = dateCountDown - now;
  var hours = Math.floor((countDiffer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((countDiffer % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((countDiffer % (1000 * 60)) / 1000);

  document.getElementById('counter').innerHTML = hours + ' : ' + minutes + ' : ' + seconds;

}, 1000)


setInterval(() => {
  Time();
}, 1000);

//end



//start second counter
var dateCountDown = new Date("Oct 31, 2022 23:59:59").getTime()

var setInt = setInterval(function () {
  var now = new Date().getTime();
  var countDiffer = dateCountDown - now;
  var hours = Math.floor((countDiffer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((countDiffer % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((countDiffer % (1000 * 60)) / 1000);

  document.getElementById('counter2').innerHTML = hours + ' : ' + minutes + ' : ' + seconds;

}, 1000)


setInterval(() => {
  Time();
}, 1000);
// end




//back to top
$(window).on("scroll", function (event) {
  if ($(this).scrollTop() > 600) {
      $(".back-to-top").css("opacity","1");
  } else {
    $(".back-to-top").css("opacity","0");

  }
});



   //Product counter + and -

let plus = document.querySelector(".span-plus");
let minus = document.querySelector(".span-minus");
let toteCount = document.querySelector(".tote-count");
let procount = 1;
plus.onclick = function(){
    procount++;
    toteCount.innerHTML=procount;
}

minus.onclick = function(){
    if(procount == 1){
        toteCount.innerHTML = 1
    }else{
        procount--;
    toteCount.innerHTML=procount;
    }
}



//icon bar sider bar
let bar = document.querySelector('#iconSide');

bar.onclick = function Bars() {  
if (document.getElementById('sideBar').className == 'side-bar') {
   document.getElementById('sideBar').className = 'open-side-bar'
}else{
   document.getElementById('sideBar').className = 'side-bar'
}
}


// function openRightMenu() {
//   document.getElementById("rightMenu").style.display = "block";
// }

// function closeRightMenu() {
// }





// basket
if(localStorage.getItem('basket') === null) {
  localStorage.setItem('basket',JSON.stringify([]))
}

function CountBasket() {
let basket = JSON.parse(localStorage.getItem('basket'));
if(basket.length === 0 ) {
    document.getElementById('count').style.display = 'none'
}
else{
    document.getElementById('count').style.display = 'block'
}
document.getElementById('count').innerHTML = basket.length
}

CountBasket()

let btns = document.getElementsByClassName('btn_add');

setTimeout(() => {
for(let btn of btns) {
    btn.onclick = function(e) {
        let basket = JSON.parse(localStorage.getItem('basket'))
        let id = e.target.parentElement.parentElement.id;
        console.log(id);
        let price = e.target.parentElement.parentElement.children[2].children[2].children[1].innerHTML;
        price=Number.parseInt(price.slice(1));
        console.log(price);
        let title = e.target.parentElement.parentElement.children[2].children[0].innerHTML;
        console.log(title);
        let image = e.target.parentElement.parentElement.children[0].children[0].children[0].src ;
          
        let existProd = basket.find(x => x.Id == id);
        let filter = basket.filter(x => x.Id != id);
       
        if(existProd == undefined) {
            basket.push({
                Id: id,
                Name: title,
                Price: price,
                Image: image,
                Count: 1
            })
        }
        else{
            existProd.Count += 1;
        }
        localStorage.setItem('basket',JSON.stringify(basket));
        CountBasket();
    }
}
}, 1000);
