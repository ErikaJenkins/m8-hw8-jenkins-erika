
var myMainNavLinks = document.getElementsByClassName('main-menu-labels');

function toggleSubMenu(){
  console.log(this.nextElementSibling);
  this.nextElementSibling.classList.toggle('hide');
}

for(i=0; i<myMainNavLinks.length; i++){
  //myMainNavLinks[i].addEventListener('click', toggleSubMenu);
  myMainNavLinks[i].addEventListener('mouseover', toggleSubMenu);
  //myMainNavLinks[i].addEventListener('mouseenter', toggleSubMenu);
  myMainNavLinks[i].addEventListener('mouseleave', toggleSubMenu);
}

/*
var myLinks = document.getElementsByClassName('sub-menu hide');
var menuBackAfterMouse = document.getElementsByClassName('show');

function toggleSubMenu(){
  console.log(this.nextElementSibling);
  this.nextElementSibling.classList.toggle('hide');
}
function minusSubMenu(){
  console.log(this.nextElementSibling);
  this.nextElementSibling.classList.add('show');
}

for(i=0; i<myMainNavLinks.length; i++){
  //myMainNavLinks[i].addEventListener('click', toggleSubMenu);
  myMainNavLinks[i].addEventListener('mouseover', toggleSubMenu);
  //myMainNavLinks[i].addEventListener('mouseenter', toggleSubMenu);
  myMainNavLinks[i].addEventListener('mouseleave', toggleSubMenu);
}*/

//for(i=0; i<myMainNavLinks.length; i++){
  //myMainNavLinks[i].addEventListener('click', toggleSubMenu);
  //myMainNavLinks[i].addEventListener('mouseover', toggleSubMenu);
  //myMainNavLinks[i].addEventListener('mouseenter', toggleSubMenu);
//  myMainNavLinks[i].addEventListener('mouseout', toggleSubMenu);
//}

//if(myLinks){
//else {
		  //Do something else - do this when the condition is FALSE
      //myLinks = false;
      //menuBackAfterMouse;
      //myMainNavLinks.nextElementSibling.classList.toggle('show');
		//}
