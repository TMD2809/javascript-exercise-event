window.addEventListener("load", function () {
    const dayView = document.querySelector(".days");
    const hourView = document.querySelector(".hours");
    const minuteView = document.querySelector(".minutes");
    const secondView = document.querySelector(".seconds");
    function countDown(timer) {
        const dDay = new Date(timer).getTime();
        if (isNaN(dDay)) return;
        setInterval(calculateDay, 1000);
        function calculateDay() {
            let days, hour, minute;
            const currentDay = new Date().getTime();
            let remaining = parseInt((dDay - currentDay) / 1000);
            if (remaining > 0) {
                days = parseInt(remaining / (24 * 60 * 60));
                remaining = remaining % (24 * 60 * 60);
                hour = parseInt(remaining / 3600);
                remaining = remaining % 3600;
                minute = parseInt(remaining / 60);
                remaining = remaining % 60;
                dayView.textContent = `0${days}`.slice(-2);
                hourView.textContent = `0${hour}`.slice(-2);
                minuteView.textContent = `0${minute}`.slice(-2);
                secondView.textContent = `0${parseInt(remaining)}`.slice(-2);
            } else return;
        }
    }
    countDown("Mon Aug 24 2023 00:00:0 GMT+0700 (Indochina Time)");
});
