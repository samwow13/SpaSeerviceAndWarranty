/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

/*var form = document.getElementsByTagName('form')[0];
form.addEventListener('submit',contact,false);
function contact(e) {
   // Prevent Default Form Submission
   e.preventDefault();
   console.log("function started");
   var target = e.target || e.srcElement;
   var i = 0;
   var message = '';
   console.log(message);
   // Loop Through All Input Fields
   for(i = 0; i < target.length; ++i) {
      // Check to make sure it's a value. Don't need to include Buttons
      if(target[i].type != 'text' && target[i].type != 'textarea') {
             // Skip to next input since this one doesn't match our rules
         continue;
      }

      // Add Input Name and value followed by a line break
      message += target[i].name + ': ' + target[i].value + "\r\n";
   }
   console.log(message);
   // Modify the hidden body input field that is required for the mailto: scheme
   target.elements["body"].value = message;

   // Submit the form since we previously stopped it. May cause recursive loop in some browsers? Should research this.
   this.submit();
}*/
var form = document.getElementById('contactForm');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
      method : "POST",
      body: new FormData(document.getElementById("contactForm")),
  }).then(
      response => response.json()
  ).then((html) => {
    // you can put any JS code here
    //fieldNameElement.innerHtml = "my new text"
    //$( "#dialog" ).dialog("text setting");
    alert('Email has been sent, thank you!')
  });
});





window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
