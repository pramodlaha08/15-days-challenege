document.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.getElementById('content');
    
    // Add event listener to each link
    document.querySelectorAll('a[data-route]').forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const route = this.getAttribute('data-route');
        loadPage(route);
        window.history.pushState({}, '', `/${route}`);
      });
    });
  
    // Load initial page
    function loadPage(route) {
      fetch(`/${route}/index.html`)
        .then(response => {
          if (response.ok) {
            return response.text();
          } else {
            return 'Page not found';
          }
        })
        .then(html => {
          contentDiv.innerHTML = html;
        })
        .catch(error => {
          contentDiv.innerHTML = 'Error loading page';
        });
    }
  
    // Handle popstate event
    window.addEventListener('popstate', function () {
      const route = window.location.pathname.substring(1);
      if (route) {
        loadPage(route);
      } else {
        contentDiv.innerHTML = 'Welcome! Select a day.';
      }
    });
    
    // Load initial page
    const initialRoute = window.location.pathname.substring(1);
    if (initialRoute) {
      loadPage(initialRoute);
    }
  });
  