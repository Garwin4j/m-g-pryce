var timerId =
  countdown(
    new Date(2016,11,20),
    function(ts) {
      document.getElementById('countdown').innerHTML = ts.toHTML("strong");
    },
    countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
