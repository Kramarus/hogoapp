
window.addEventListener('scroll', function(){
    var navbar = document.querySelector('nav');
    navbar.classList.toggle('bottom-border has-background-white', window.scrollY > 0);
});

const langmenu = document.getElementById('language-dropdown');
langmenu.addEventListener('click', e=>{
    e.stopPropagation()
    langmenu.classList.toggle('is-active')
});

/*
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("xhogo").style.fontSize = "30px";
    document.getElementById("xnavbarMenuHeroB").style.fontSize = "16px";
  } else {
    document.getElementById("xhogo").style.fontSize = "48px";
    document.getElementById("xnavbarMenuHeroB").style.fontSize = "24px";
  }
} 

*/


//Tabs advantages

const tabs = document.querySelectorAll('#advTabs .tabs li');
const tabContentBoxes = document.querySelectorAll('#advTabs .tab-content > div');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(item => item.classList.remove('is-active'));
    tab.classList.add('is-active');

    const target = tab.dataset.target;
    tabContentBoxes.forEach(box => {
      if (box.getAttribute('id') === target) {
        box.classList.remove('is-hidden');
      } else {
        box.classList.add('is-hidden');
      }
    })
  })
})

//Tabs pricing

const tabs2 = document.querySelectorAll('#priceTabs .tabs li');
const tabContentBoxes2 = document.querySelectorAll('#priceTabs .tab-content > div');

tabs2.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs2.forEach(item => item.classList.remove('is-active'));
    tab.classList.add('is-active');

    const target2 = tab.dataset.target;
    tabContentBoxes2.forEach(box => {
      if (box.getAttribute('id') === target2) {
        box.classList.remove('is-hidden');
      } else {
        box.classList.add('is-hidden');
      }
    })
  })
})

//Who is it good for

/*
const advTabs = document.querySelectorAll('.tabs li');
const advContentBoxes = document.querySelectorAll('#advantage-content > div');

advTabs.forEach(advTab => {
  advTab.addEventListener('click', () => {
    advTabs.forEach(item => item.classList.remove('is-active'))
    advTab.classList.add('is-active');

    const target = advTab.dataset.target;
    advContentBoxes.forEach(box => {
      if (box.getAttribute('id') === target){
        box.classList.remove('is-hidden');
      } else {
        box.classList.add('is-hidden');
      }
    })

  })
})
*/


// How it works OLD VERSION-------------------------------------------------------------


const hiwTabs = document.querySelectorAll('.hiw-tabs li');
const hiwContentBoxes = document.querySelectorAll('#hiw-content > div');
const scroller = document.querySelector('#vid0');



// Start Progress Bar
function startProgress (duration) {
  console.log(duration);
}

hiwTabs.forEach(hiwTab => {
  hiwTab.addEventListener('click', () => {
    hiwTabs.forEach(item => item.classList.remove('hiw-active'))
    hiwTab.classList.add('hiw-active');
    
    
    

    const target3 = hiwTab.dataset.target;
    hiwContentBoxes.forEach(box => {
      if (box.getAttribute('id') === target3) {
        box.classList.remove('is-hidden');
        box.querySelector('video').currentTime = 0;
        
        
        
        
      } else {
        box.classList.add('is-hidden');
      }
    })
  })
})



// OLV VERSION END -------------------------------------------------




//Video current Time



/*

const progbar = document.querySelectorAll('.hiw-progress')


hiwTabs.forEach((hiwTab) => {
  hiwTab.addEventListener('click', () => {
    hiwTabs.forEach(item => item.classList.remove('hiw-active'))
    hiwTab.classList.add('hiw-active');


    const target = hiwTab.dataset.target;
    const hiwVideos = document.getElementsByClassName('hiw-video').currentTime = 0;

    tabContentBoxes.forEach(box=> {
      if (box.getAttribute('id') === target) {
        box.classList.remove('is-hidden');
        
      } else {
        box.classList.add('is-hidden');
      }
    })
  })
})

*/
/*

// Progress bar
$('.hiw-btn').on('click', function(){


  let progressValue = 0;
  $(this).find("progress").attr("value", progressValue);

  setInterval(function(){

    progressValue += 50; 
    $(this).find("progress").attr("value", progressValue);   

  }, 100);
  

  
  
});
*/

//document.getElementById('first-progress').value+=5;

/*
let progressBar = $(".hiw-progress");
let maxProgress = progressBar.attr("max");
let progressTime = (1000 / maxProgress) * 5;
let progressValue = progressBar.val();

const loading = () => {
  progressValue += 1;
  progressBar.val(progressValue);

  if (progressValue == maxProgress) {
    clearInterval(animate);
  }
};
const animate = setInterval(() => loading(), time);

*/


// Timer example
/*
function started(duration){
  
  var TotalSeconds = 40;
 var documentWidth  = $(document).width();
  var start          = Date.now();
  var intervalSetted = null;

function timer() {
  
                var diff = duration - (((Date.now() - start) / 1000) | 0);

                var seconds = (diff % 60) | 0;

                seconds         = seconds < 10 ? "0" + seconds : seconds;

                $('#timer').html("00:" + seconds);

                var progresBarWidth = (seconds * documentWidth / TotalSeconds);


                $('#progress').animate({
                    width: progresBarWidth + 'px'
                }, 1000);

                if (diff <= 0) {
                    clearInterval(intervalSetted);
                }
  
            }

            timer();
            intervalSetted = setInterval(timer, 1000);
}

started(40);
*/



// PROBLEM! the tabs don't change because of this part
/*
var hiwOne = {
  id = "hiw-1",
  videoLink = "vid/step_1.webm",
  videoDuration = "4600",
};

var hiwTwo = {
  id = "hiw-2",
  videoLink = "vid/step_2.webm",
  videoDuration = "3500",
};

var hiwThree = {
  id = "hiw-3",
  videoLink = "vid/step_3.webm",
  videoDuration = "2000",
};

var hiws = [hiwOne, hiwTwo, hiwThree];

var currentTagIndex = 0;

function start(currentTagIndex) {

};
*/




// Pricing plans
/*

const priceTabs = document.querySelectorAll('.tabs li');
const priceContentBoxes = document.querySelector('.pricing-content > div')

priceTabs.forEach(priceTab => {
  priceTab.addEventListener('click', () => {
    priceTabs.forEach(priceItem => priceItem.classList.remove('is-active'));
    priceTab.classList.add('is-active');

    const target = priceTab.dataset.target;
    priceContentBoxes.forEach(contentBox => {
      if (contentBox.getAttribute('id') === target){
        contentBox.classList.remove('is-hidden');
      } else {
        contentBox.classList.add('is-hidden');
      }
    })
  })
})

*/

const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener('click', event => {
    accordionItemHeader.classList.toggle('active');

    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains('active')) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
