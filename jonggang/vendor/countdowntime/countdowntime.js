(function ($) {
    "use strict";

    $.fn.extend({

      countdown100: function(options) {
        var defaults = {
          timeZone: "",
          endtimeYear: 0,
          endtimeMonth: 0,
          endtimeDate: 0,
          endtimeHours: 0,
          endtimeMinutes: 0,
          endtimeSeconds: 0,
        }

        var options =  $.extend(defaults, options);

        return this.each(function() {
          var obj = $(this);
          var timeNow = new Date();

          var tZ = options.timeZone; console.log(tZ);
          var endYear = options.endtimeYear;
          var endMonth = options.endtimeMonth;
          var endDate = options.endtimeDate;
          var endHours = options.endtimeHours;
          var endMinutes = options.endtimeMinutes;
          var endSeconds = options.endtimeSeconds;
          // console.log(endYear, endMonth, endDate, endHours, endMinutes);

          if(tZ == "") {
            var deadline = new Date(endYear, endMonth - 1, endDate, endHours, endMinutes, endSeconds);
          }
          else {
            var deadline = moment.tz([endYear, endMonth - 1, endDate, endHours, endMinutes, endSeconds], tZ).format();
          }
          // console.log(Date.parse(deadline));
          // console.log(Date.parse(timeNow));

          // if deadline has passed
          if(Date.parse(deadline) < Date.parse(timeNow)) {
              alert("종강했습니다!");
              var txt = $('#txt')[0];
              txt.innerHTML = "<i>종강 했습니다! 이제 남은 일들을 처리하고 집에 가기를 기다립니다...<i>";
              checkTodo();
          } else {
              initializeClock(deadline);
          }



          function getTimeRemaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
              'total': t,
              'days': days,
              'hours': hours,
              'minutes': minutes,
              'seconds': seconds
            };
          }

          function initializeClock(endtime) {
            var daysSpan = $(obj).find('.days');
            var hoursSpan = $(obj).find('.hours');
            var minutesSpan = $(obj).find('.minutes');
            var secondsSpan = $(obj).find('.seconds');

            function updateClock() {
              var t = getTimeRemaining(endtime);

              daysSpan.html(t.days);
              hoursSpan.html(('0' + t.hours).slice(-2));
              minutesSpan.html(('0' + t.minutes).slice(-2));
              secondsSpan.html(('0' + t.seconds).slice(-2));

              if (t.total <= 0) {
                clearInterval(timeinterval);
              }


              checkTodo();
            }

            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
          }

          // array for storing deadline times
          var todo = [
              new Date('2018-12-19T16:50:00'),
          ];

          function checkTodo() {
              // check todo list
              var i = 0;
              for(i = 0; i < todo.length; i++) {
                  var todoi = $('#todo' + i)[0];
                  // console.log(todoi);
                  if(Date.parse(todo[i]) < Date.parse(timeNow)) {
                      todoi.style.display = "none";
                  }

              }
          }




        });
      }
    });



})(jQuery);
