// Get elements from the DOM
const menuBtn = document.querySelector('.mega-menu-mobile-btn');
const menu = document.querySelector('.mega-menu-container');
const dropdowns = document.querySelectorAll('.mega-menu-dropdown > div');
const subDropdowns = document.querySelectorAll('.mega-menu-sub-dropdown > div');

// Toggle variable
let menuOpen = false;

// Set click event to menu button
menuBtn.addEventListener('click', ()=>{
    // Toggle mega menu show class
    menu.classList.toggle('mega-menu-show');
    // If the menu open variable is false
    if(menuOpen===false){
        // Set the close icon to the menu button
        menuBtn.innerHTML=`
        <span class="material-symbols-outlined">
            close
        </span>
        `;
        // Set menu open to true
        menuOpen = true;
    }
    else{
        // Set the menu icon to the menu button
        menuBtn.innerHTML=`
        <span class="material-symbols-outlined">
            menu
        </span>
        `;
        // Set menu open to false
        menuOpen = false;
    }
});

// Select all dropdowns
dropdowns.forEach(dropdown=>{
    // Add click event
    dropdown.addEventListener("click", (e)=>{
        // Toggle dropdown menu show class
        dropdown.nextElementSibling.classList.toggle('mega-menu-item-show');
        // Toggle icon rotated class
        dropdown.lastElementChild.classList.toggle('icon-rotated');
    });
});

// Select all sub dropdowns
subDropdowns.forEach(subDropdown=>{
    // Add click event
    subDropdown.addEventListener('click', (e)=>{
        // Toggle sub dropdown menu show class
        subDropdown.nextElementSibling.classList.toggle('mega-menu-sub-menu-show');
        // Toggle icon rotated class
        subDropdown.lastElementChild.classList.toggle('icon-rotated');
    });
});

 