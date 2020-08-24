const menuOpen = document.querySelector(".menu__collapse");
const menuClose = document.querySelector(".menu__close");
const headerMenu = document.querySelector(".menu");

menuOpen.addEventListener("click", function() {
    headerMenu.classList.add("is-open");
    menuOpen.classList.add("unActive");
    menuClose.classList.add("active");
  });
   
  menuClose.addEventListener("click", function() {
    headerMenu.classList.remove("is-open");
    menuOpen.classList.remove("unActive");
    menuClose.classList.remove("active");
  });

  var arr = document.querySelectorAll(".slide__item");
  var arr2 = document.querySelectorAll(".btn--slide");
  console.log(arr);
  console.log(arr2);
  
  
 
      var i=0;

    function show(n){   
      for(let i=0; i<arr.length; i++){
 
        // arr[i].classList.add("hidden");
        arr[i].style.display = "none";
        arr2[i].classList.remove("color--active");
      }
      // arr[n].classList.add("slide--active");
      arr[n].style.display = "block";
      arr2[n].classList.add("color--active");
      }

      show(0);
      for(let i=0; i<arr2.length; i++){
        arr2[i].addEventListener("click", next);
        function next(){
          show(i);

        }
      }
  
