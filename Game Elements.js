// This allows information to be updated without the page having to be reloaded fully.
function displayInfo() { 

      // You can Get the values from these forms and these are all IDs to the values
      const username = document.getElementById('username').value; 
      const weapons = document.getElementById('weapons').value; 
      const health = document.getElementById('health').value; 
      const points = document.getElementById('points').value; 

  

      // These are the Output values and helps fill that area with the user’s information in a nice format.
      const outputDiv = document.getElementById('output'); 
      outputDiv.innerHTML = ` 

        <strong>User Name:</strong> ${username}<br> 
        <strong>Weapons:</strong> ${weapons}<br> 
        <strong>Health/Damage:</strong> ${health}<br> 
        <strong>Point Total:</strong> ${points} 

      `; 

  
      return false; // This prevents the page to reload when submiting a answer 

    } 
