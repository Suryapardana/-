function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('jam').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
  }
  
  var i = 0;
  var y = ' Dellaku'
  var pagi = 'Good morning,' + y;
  var siang = 'Good afternoon,' + y;
  var malam = 'Good evening,' + y;
  var malem = 'Good night,' + y;
  var speed = 150;
  var myDate = new Date();
  function typeWriter() {
    if (i < pagi.length && myDate.getHours() < 12) {
      document.getElementById("teks").innerHTML += pagi.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
      document.getElementById('jam').style.color = 'white';
      document.getElementById('teks').style.color = 'white';
    } else if (i < siang.length && myDate.getHours() >=12 && myDate.getHours() <=17) {
        document.getElementById("teks").innerHTML += siang.charAt(i);
        i++
        setTimeout(typeWriter, speed);
    } else if (i < malam.length && myDate.getHours() > 17 && myDate.getHours() <=24){
        document.getElementById("teks").innerHTML += malam.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        document.getElementById('jam').style.color = 'white';
        document.getElementById('teks').style.color = 'white';
    } else {
        document.getElementById("teks").innerHTML += malem.charAt(i);
        i++
        setTimeout(typeWriter, speed);
    }
  }

  function jam() {
    var element = document.getElementById("background");
    if (myDate.getHours() < 12) {
      document.body.style.backgroundColor = element.classList.add("pagi");
    } else if (myDate.getHours() >= 12 && myDate.getHours() <= 15) {
      document.body.style.backgroundColor = element.classList.add("siang");
    } else if (myDate.getHours() >= 15 && myDate.getHours() <= 18) {
      document.body.stye.backgroundColor = element.classList.add("sore");
    } else if (myDate.getHours() >= 18 && myDate.getHours() <= 24) {
      document.body.style.backgroundColor = element.classList.add("malam");
    } else {
      document.body.style.backgroundColor = element.classList.add("sore");
    }
  }