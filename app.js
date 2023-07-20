let profileMenu = document.getElementById('profileMenu');

function toggleMenu(){
    profileMenu.classList.toggle("open-menu")
}

let sideBarActivity = document.getElementById('sidebarActivity');
let showMore = document.getElementById('showMoreLink');

function toggleActivity(){
    sideBarActivity.classList.toggle("open-activity");
    if(sideBarActivity.classList.contains("open-activity")){
        showMore.innerHTML = `Show less <b>-</b>`
    }
    else{
        showMore.innerHTML = `Show More <b>+</b>`
    }
}