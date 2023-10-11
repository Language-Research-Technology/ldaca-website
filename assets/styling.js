var water_green = '#79a38d';
var land_green = '#91a96d';
var clear_blue = '#537ec0';
var storm_blue = '#566777';
var sandstone = '#FFCC79';
var deep_rock = '#653C2C';
var light_rock = '#653C2C';

var theme_light = true;
if (document.body.getAttribute("theme") == "dark") {
  theme_light = false;
}

// Defines a list of the colors for our headers
const color_list = [water_green, land_green, clear_blue, light_rock, storm_blue, sandstone];
var color_count = 0; // Count variable to cycle through the colours

// Gets an array of all the menu-item elements, then adds transitions and event listeners to each one
const menuItems = document.querySelectorAll('a.menu-item');
menuItems.forEach((menuItem) => {
  menuItem.style.transition = "background 0.5s ease-in-out"
  //menuItem.style.transition = "color 0.5s ease-in-out"

  // Event listener to change style on hover
  menuItem.addEventListener("mouseover", function handleMouseOver() {
      menuItem.style.background = color_list[color_count];
      menuItem.style.color = '#ffffff';
      color_count++;
      if(color_count >= color_list.length) {
          color_count = 0;
      }
  })
  // Event listener to change style coming off hover
  menuItem.addEventListener("mouseout", function handleMouseOut() {
      menuItem.style.background = null;
      if (theme_light == true) {
        menuItem.style.color = '#000000';
      } else {
        menuItem.style.color = '#ffffff';
      }
      
  }
  );
})
checkStyle();

// Checks the color of the menu text depending on the theme
function checkStyle() {
  let logos = document.getElementsByClassName("logo");
    for (logo of logos) {
      if (theme_light == true) {
        logo.src = "/logo.png";
        logo.srcset = "/logo.png, /logo.png 1.5x, /logo.png 2x";
        logo.title = "logo";
        logo.alt = "logo"
      } else {
        logo.src = "/logo_dark.png";
        logo.srcset = "/logo_dark.png, /logo_dark.png 1.5x, /logo_dark.png 2x";
        logo.title = "logo_dark";
        logo.alt = "logo_dark"
      }
    }
    let flex_containers = document.getElementsByClassName("flex_container");
    for (flex of flex_containers) {
      if (theme_light == true) {
        flex.style.background = 'rgba(255,255,255,0.5)';
      } else {
        flex.style.background = 'rgba(0,0,0,0.3)';
      }
    }

  menuItems.forEach((menuItem) => {
    if (theme_light == true) {
      menuItem.style.color = '#000000';

    } else {
      menuItem.style.color = '#ffffff';
    }
  })
}



// Implements an observer to detect changes to the theme
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === "theme") {
        theme_light = !theme_light;
        checkStyle();
      }
    });
  });

  observer.observe(document.body, {
    attributes: true
  }
)
  