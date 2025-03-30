



  document.addEventListener("click", function(event) {
    if (event.target.closest(".triggersubsel")) {
        let triggersubsel = event.target.closest(".triggersubsel");
        let targetContent = triggersubsel.getAttribute("data-target");
        let contentDiv = document.querySelector(`.content[data-content='${targetContent}']`);
        let arrowsubsel = triggersubsel.querySelector(".arrowsubsel");

        // Close all open contents first
        document.querySelectorAll(".content.active").forEach(content => {
            if (content !== contentDiv) {
                content.classList.remove("active");
                content.previousElementSibling.querySelector(".arrowsubsel").classList.remove("rotate");
            }
        });

        // Toggle the clicked one
        contentDiv.classList.toggle("active");
        arrowsubsel.classList.toggle("rotate");
    }
});





document.addEventListener('DOMContentLoaded', () => {
    const contents = document.querySelectorAll('.contentact');
    const loader = document.getElementById('loader');
    const backButton = document.querySelector('.backbutnforconts'); // Back button
    let historyStack = [];

    // Retrieve last active content ID from localStorage
    const lastcontentactId = localStorage.getItem('contentact');

    if (lastcontentactId) {
        const lastcontentact = document.getElementById(lastcontentactId);
        if (lastcontentact) {
            contents.forEach(content => content.classList.remove('active'));
            lastcontentact.classList.add('active');
        }
    } else {
        contents[0]?.classList.add('active');
    }

    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = tab.getAttribute('data-target');
            const currentActive = document.querySelector('.contentact.active');

            // Save the current active content before switching
            if (currentActive) {
                historyStack.push(currentActive);
            }

            // Store active content in localStorage
            localStorage.setItem('contentact', targetId);

            // Hide all content with animation
            contents.forEach(content => {
                if (content.classList.contains('active')) {
                    content.classList.remove('active');
                    content.classList.add('exit');
                    setTimeout(() => content.classList.remove('exit'), 700);
                }
            });

            // Show loader
            loader.style.display = 'block';

            // After 1 second, show the target content
            setTimeout(() => {
                loader.style.display = 'none';
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    contents.forEach(content => content.classList.remove('active'));
                    targetContent.classList.add('active');
                }
            }, 1000);
        });
    });

    // Back Button Functionality
    backButton.addEventListener('click', () => {
        if (historyStack.length > 0) {
            const previousContent = historyStack.pop();
            contents.forEach(content => content.classList.remove('active'));
            previousContent.classList.add('active');
            localStorage.setItem('contentact', previousContent.id);
        }
    });
});




  








function handleIntersection(entries, observer) {
    let delay = 0;
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, delay);
            delay += 100; // Delay each div's animation
        } else {
            entry.target.classList.remove('visible');
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
document.querySelectorAll('.divslide').forEach(div => observer.observe(div));




document.addEventListener("DOMContentLoaded", () => {
    const barwelsales = document.querySelectorAll(".barwelsales");
    
    // Adjust max height based on screen size
    const maxHeight = window.innerHeight <= 700 ? 200 : 400;

    const maxValue = Math.max(...Array.from(barwelsales).map(bar => parseInt(bar.textContent)));

    barwelsales.forEach((bar, index) => {
        let value = parseInt(bar.textContent);
        let barHeight = (value / maxValue) * maxHeight;
        bar.style.height = "0px";
        setTimeout(() => {
            bar.style.height = `${barHeight}px`;
        }, index * 200);
    });
});












document.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-btnproduct")) {
      const parentDiv = event.target.closest(".prodonetoend");
      if (parentDiv) {
          parentDiv.remove();
      }
  }
});


document.querySelector(".search-inputproducs").addEventListener("input", function() {
  let searchValue = this.value.toLowerCase();
  let products = document.querySelectorAll(".prodlistvw");

  products.forEach(product => {
      let productID = product.querySelector(".products_id p").textContent.toLowerCase();
      product.style.display = productID.includes(searchValue) ? "grid" : "none";
  });
});

document.querySelector(".search-inputproducspropage").addEventListener("input", function() {
  let searchValue = this.value.toLowerCase().trim();
  let products = document.querySelectorAll(".prodonetoend.divslide");

  products.forEach(product => {
      let productIDElement = product.querySelector(".idprodu");
      if (productIDElement) {
          let productID = productIDElement.textContent.toLowerCase();
          product.style.display = productID.includes(searchValue) ? "grid" : "none";
      } else {
          product.style.display = "none";
      }
  });
});





  document.querySelectorAll('.receivestatus').forEach((receivestatus, index) => {
    const statusText = document.querySelectorAll('.status-text')[index]; // Match the corresponding status-text
    const storageKey = `Accepted_${index}`; // Unique key for each pair

    // Load the saved state
    if (localStorage.getItem(storageKey) === 'true') {
        statusText.textContent = "Accepted";
        statusText.classList.add('received');
        receivestatus.textContent = "Accepted";
        receivestatus.classList.add('received');
    }

    // Click event
    receivestatus.addEventListener('click', function() {
        statusText.textContent = "Accepted";
        statusText.classList.add('received');
        receivestatus.textContent = "Accepted";
        receivestatus.classList.add('received');

        // Save the state
        localStorage.setItem(storageKey, 'true');
    });
});

// Reset button functionality
document.querySelector('.reset-btn').addEventListener('click', function() {
    localStorage.clear();
    location.reload(); // Reload page to reset all elements
});









document.addEventListener("DOMContentLoaded", function () {
  let title = document.querySelector(".title");
  let paragraph = document.querySelector(".paragraph");
  let popupproedit = document.querySelector(".popupproedit");
  let input = popupproedit.querySelector(".edit-input");
  let currentElement = null; // Track which element is being edited

  // Load saved text from localStorage
  if (localStorage.getItem("titleText")) title.textContent = localStorage.getItem("titleText");
  if (localStorage.getItem("paragraphText")) paragraph.textContent = localStorage.getItem("paragraphText");

  document.addEventListener("click", function (event) {
      let target = event.target;

      // Open popupproedit for h1 or p
      if (target.classList.contains("title") || target.classList.contains("edit-title")) {
          currentElement = title;
          input.value = title.textContent;
      } else if (target.classList.contains("paragraph") || target.classList.contains("edit-paragraph")) {
          currentElement = paragraph;
          input.value = paragraph.textContent;
      } else {
          return; // Do nothing if clicked outside
      }

      popupproedit.classList.add("active");
      input.focus();
  });

  

  // Save text when clicking Save button
  document.querySelector(".save").addEventListener("click", updateText);

  // Save text on Enter keypress
  document.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && popupproedit.classList.contains("active")) {
          updateText();
      }
  });

  function updateText() {
      if (currentElement && input.value.trim() !== "") {
          currentElement.textContent = input.value;
          let key = currentElement.classList.contains("title") ? "titleText" : "paragraphText";
          localStorage.setItem(key, input.value); // Save to localStorage
      }
      popupproedit.classList.remove("active");
  }
});















document.querySelector(".search-inputproduce").addEventListener("input", function() {
    let searchValue = this.value.toLowerCase();
    let products = document.querySelectorAll(".prodlistvw");
  
    products.forEach(product => {
        let productID = product.querySelector(".products_id p").textContent.toLowerCase();
        product.style.display = productID.includes(searchValue) ? "block" : "none";
    });
  });



