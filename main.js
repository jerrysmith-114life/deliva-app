




const leftLink = document.querySelector('.left-link');
const rightLink = document.querySelector('.right-link');
const leftSidebar = document.querySelector('.left-sidebar');
const rightSidebar = document.querySelector('.right-sidebar');
const overlay = document.querySelector('.overlay');
const closeButtons = document.querySelectorAll('.close-btn');

// Function to open a specific sidebar
function openSidebar(sidebar) {
    sidebar.classList.add('active');
    overlay.classList.add('active');
}

// Function to close all sidebars
function closeSidebars() {
    leftSidebar.classList.remove('active');
    rightSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// Event listeners for the sidebar links
leftLink.addEventListener('click', (e) => {
    e.preventDefault();
    openSidebar(leftSidebar);
});

rightLink.addEventListener('click', (e) => {
    e.preventDefault();
    openSidebar(rightSidebar);
});

// Event listeners for the close buttons
closeButtons.forEach(button => {
    button.addEventListener('click', closeSidebars);
});

// Event listener for the overlay
overlay.addEventListener('click', closeSidebars);







document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        
        // Remove active class from all links and boxes
        document.querySelectorAll('.link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.content-box').forEach(box => box.classList.remove('active'));
        
        // Add active class to the clicked link
        link.classList.add('active');
        
        // Get the target box using the unique class from data-target and show it
        const targetClass = link.getAttribute('data-target');
        document.querySelector(`.content-box.${targetClass}`).classList.add('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
const triggers = document.querySelectorAll('.trigger');
const popupitemsfods = document.querySelectorAll('.popupitemsfod');
const overlayss = document.querySelector('.overlayss');

// Open the targeted popup
triggers.forEach(trigger => {
trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = trigger.getAttribute('data-target');
    const targetPopupitemsfod = document.getElementById(targetId);
    
    if (targetPopupitemsfod) {
        targetPopupitemsfod.classList.add('active');
        overlayss.classList.add('active');
    }
});
});

// Close the popup when clicking on the overlay or a close button
document.addEventListener('click', (e) => {
if (e.target.classList.contains('overlayss') || e.target.classList.contains('close')) {
    popupitemsfods.forEach(popupitemsfod => popupitemsfod.classList.remove('active'));
    overlayss.classList.remove('active');
}
});

// Add individual close behavior for "close1" and "close2"
const closeButtons = document.querySelectorAll('.close1, .close2');

closeButtons.forEach(closeButton => {
closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    const popupToClose = closeButton.closest('.popupitemsfod'); // Find the parent popup to close
    if (popupToClose) {
        popupToClose.classList.remove('active');
        overlayss.classList.remove('active');
    }
});
});
});







const maxItems = 10;

// Get all progress bars and related buttons
document.querySelectorAll('.progress-bar').forEach((progressBar, index) => {
    let currentItems = 0; // Individual cart count

    const progress = progressBar.querySelector('.progress');
    const cartInfo = document.querySelectorAll('#cart-info')[index];
    const addItemButton = document.querySelectorAll('#add-item')[index];
    const removeItemButton = document.querySelectorAll('#remove-item')[index];

    function updateCart() {
        const progressPercentage = (currentItems / maxItems) * 100;
        progress.style.width = `${progressPercentage}%`;
        cartInfo.textContent = `${currentItems}/${maxItems} Items`;
    }

    addItemButton.addEventListener('click', () => {
        if (currentItems < maxItems) {
            currentItems++;
            updateCart();
        }
    });

    removeItemButton.addEventListener('click', () => {
        if (currentItems > 0) {
            currentItems--;
            updateCart();
        }
    });

    // Initialize each cart
    updateCart();
});


document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".fooditemss");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 200); // Delay each item
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
    });

    items.forEach((item) => {
        observer.observe(item);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".toppsfoodsadd");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 100); // Delay each box
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
    });

    boxes.forEach((box) => {
        observer.observe(box);
    });
});

const boxes = document.querySelectorAll('.boxswipedel');

boxes.forEach(box => {
let startX;

box.addEventListener('touchstart', (e) => {
startX = e.touches[0].clientX;
});

box.addEventListener('touchmove', (e) => {
const touchX = e.touches[0].clientX;
const deltaX = touchX - startX;

if (deltaX < -50) { // Swipe left
    box.classList.add('swipe-out');
    setTimeout(() => box.remove(), 300); // Remove after animation
}
});

box.addEventListener('mousedown', (e) => {
startX = e.clientX;
});

box.addEventListener('mousemove', (e) => {
if (e.buttons !== 1) return; // Only track when mouse button is pressed
const deltaX = e.clientX - startX;

if (deltaX < -50) { // Swipe left
    box.classList.add('swipe-out');
    setTimeout(() => box.remove(), 300); // Remove after animation
}
});
});

const slideUpButton = document.getElementById('slideUpButton');
const slideUpDiv = document.getElementById('slideUpDiv');
const closeButton = document.querySelector('.close-btncclsfood');


slideUpButton.addEventListener('click', () => {
slideUpDiv.classList.toggle('active');
});



// Slide up when the button is clicked
slideUpButton.addEventListener('click', () => {
slideUpDiv.classList.add('active');
});

// Close the slide-up div when the close button is clicked
closeButton.addEventListener('click', () => {
slideUpDiv.classList.remove('active');
});

const slideUpButtongift = document.getElementById('slideUpButtongift');
const slideUpDivgift = document.getElementById('slideUpDivgift');
const closeButtongift = document.querySelector('.close-btncclsfoodgift');


slideUpButtongift.addEventListener('click', () => {
slideUpDivgift.classList.toggle('active');
});



// Slide up when the button is clicked
slideUpButtongift.addEventListener('click', () => {
slideUpDivgift.classList.add('active');
});

// Close the slide-up div when the close button is clicked
closeButtongift.addEventListener('click', () => {
slideUpDivgift.classList.remove('active');
});

const selectedFlag = document.getElementById('selected-flag');
const selectedCode = document.getElementById('selected-code');
const flagDropdown = document.getElementById('flag-dropdown');

// Toggle dropdown display on flag click
selectedFlag.addEventListener('click', function() {
  flagDropdown.style.display = flagDropdown.style.display === 'block' ? 'none' : 'block';
});

// Change flag and country code on selection
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function() {
    const flag = item.getAttribute('data-flag');
    const countryCode = item.getAttribute('data-country-code');
    selectedFlag.src = flag;
    selectedCode.textContent = countryCode;
    flagDropdown.style.display = 'none'; // Hide dropdown after selection
  });
});

// Close dropdown if clicked outside
document.addEventListener('click', function(event) {
  if (!selectedFlag.contains(event.target) && !flagDropdown.contains(event.target)) {
    flagDropdown.style.display = 'none';
  }
});


      // Select all links and pop-ups
      const links = document.querySelectorAll('.unique-link');
      const popups = document.querySelectorAll('.unique-popup');

      // Show the corresponding pop-up when a link is clicked
      links.forEach(link => {
          link.addEventListener('click', function(event) {
              event.preventDefault();
              const popupId = this.getAttribute('data-popup'); // Get associated pop-up ID
              const popup = document.getElementById(popupId);
              if (popup) {
                  popup.style.display = 'block';
                  setTimeout(() => {
                      popup.classList.add('popup-visible');
                  }, 10);
              }
          });
      });

      // closeseldtcrd the pop-up when the closeseldtcrd button is clicked
      popups.forEach(popup => {
          const closeseldtcrdButton = popup.querySelector('.closeseldtcrd-popup');
          closeseldtcrdButton.addEventListener('click', function() {
              popup.classList.remove('popup-visible'); // Start fade-out
              setTimeout(() => {
                  popup.style.display = 'none'; // Hide completely after fade-out
              }, 300); // Match the transition duration
          });
      });

























document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".fooditemss");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 200); // Delay each item
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
    });

    items.forEach((item) => {
        observer.observe(item);
    });
});


document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        
        // Remove active class from all links and boxes
        document.querySelectorAll('.link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.content-box').forEach(box => box.classList.remove('active'));
        
        // Add active class to the clicked link
        link.classList.add('active');
        
        // Get the target box using the unique class from data-target and show it
        const targetClass = link.getAttribute('data-target');
        document.querySelector(`.content-box.${targetClass}`).classList.add('active');
    });
});






const orderHistoryContainer = document.getElementById('orderHistory');

orderHistoryContainer.addEventListener('click', () => {
    orderHistoryContainer.classList.toggle('active');
});















