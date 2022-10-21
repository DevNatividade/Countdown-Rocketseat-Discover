//Puxar o HTML para o JS:
    //document.getElementById
    const daysEl= document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    const newYears = '01 Jan 2023';
    
    function countdown() {
    
        const newYearDate = new Date(newYears);
        const currentDate = new Date();
    
        const totalSeconds = (newYearDate - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        daysEl.innerHTML = days;
        hoursEl.innerHTML = formatTime(hours);
        minutesEl.innerHTML = formatTime(minutes);
        secondsEl.innerHTML = formatTime(seconds);
    }
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    countdown();
    
    setInterval(countdown, 1000)

    //pop-up - dialog
    const button = document.querySelector('#formOpen')
    const modal = document.querySelector('dialog')

    formOpen.onclick = function() {
        modal.showModal()
    }

    //Fechar o modal 
    /*
        tagHTML.onclick = function() {
        modal.close()
    }
    */