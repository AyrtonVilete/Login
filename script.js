document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('toggle-switch');
  
    toggleSwitch.addEventListener('change', function() {
      if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    });
  });
  