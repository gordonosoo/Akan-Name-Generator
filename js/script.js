document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var birthday = new Date(document.getElementById('birthday').value);
    var gender = document.getElementById('gender').value;
  
    if (isNaN(birthday)) {
      alert('Please enter a valid date.');
      return;
    }
  
    var dayOfWeek = calculateDayOfWeek(birthday);
    var akanName = getAkanName(dayOfWeek, gender);
  
    document.getElementById('result').innerText = "Your Akan name is " + akanName;
  });
  
  function calculateDayOfWeek(birthday) {
    var century = Math.floor(birthday.getFullYear() / 100) + 1;
    var year = birthday.getFullYear() % 100;
    var month = birthday.getMonth() + 1;
    var day = birthday.getDate();
  
    var dayOfWeek = (Math.floor(century / 4) - 2 * century - 1 + Math.floor(5 * year / 4) + Math.floor(26 * (month + 1) / 10) + day) % 7;
  
    return dayOfWeek;
  }
  
  function getAkanName(dayOfWeek, gender) {
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
    if (gender === 'male') {
      return maleNames[dayOfWeek];
    } else {
      return femaleNames[dayOfWeek];
    }
  }


  document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var birthday = new Date(document.getElementById('birthday').value);
    var gender = document.getElementById('gender').value;
  
    if (isNaN(birthday)) {
      alert('Please enter a valid date.');
      return;
    }
  
    var dayOfWeek = calculateDayOfWeek(birthday);
    var akanName = getAkanName(dayOfWeek, gender);
  
    document.getElementById('result').innerText = "Your Akan name is " + akanName;
  });
  
  