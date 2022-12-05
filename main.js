

const settime = () => {
    const d = new Date()
    h = d.getHours()
    m = d.getMinutes()
    s = d.getSeconds()
    sess = document.getElementById('session')
    if (h >= 12) {
        sess.innerText = 'PM'
    }
    else {
        sess.innerText = 'AM'
    }

    if (h > 12) {
        h = h - 12
    }


    document.getElementById('hours').innerText = h
    document.getElementById('minutes').innerText = m
    document.getElementById('second').innerText = s

}
settime();
setInterval(settime, 1000)


document.querySelector('.set').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.set').innerText = 'Party Time!'
    var wakeupvalue = document.querySelector('#wakeUp').value
    var lunchvalue = document.querySelector('#lunch').value
    var napvalue = document.querySelector('#nap').value
    var nightvalue = document.querySelector('#night').value
    
    document.querySelector('#waketext').innerText = `Wakeup Time is : ` + wakeupvalue
    document.querySelector('#lunchtext').innerText = "Lunch Up Time is : " + lunchvalue;
    document.querySelector('#naptext').innerText = "Nap Up Time is : " + napvalue;
    document.querySelector('#nighttext').innerText = "Night Up Time is : " + nightvalue;


    var splitwakeup = wakeupvalue.toString().split(" ")
    var splitlunch = lunchvalue.toString().split(" ")
    var splitnap = napvalue.toString().split(" ")
    var splitnight = nightvalue.toString().split(" ")

 

    if( splitwakeup[0] === splitlunch[0] === splitnap[0] === splitnight[0] === h){
        document.querySelector('.image-div').innerHTML = '<img class="image-div" src="./assests/welcome.jpeg" alt="">'
        document.querySelector('.good-morning').innerText = 'New'
        document.querySelector('.grab').innerText = 'New'

    }

    else if(splitwakeup[0] === (h)){
        document.querySelector('.image-div').innerHTML = '<img class="image-div" src="./assests/Component 30 .svg" alt="">'
        document.querySelector('.good-morning').innerText = 'GOOD MORNING  !! WAKE UP  !!   .'
        document.querySelector('.grab').innerText = 'GRAB SOME HEALTHY BREAKFAST    !!!.'

    }
    else if(splitlunch[0] === (h)){
        document.querySelector('.image-div').innerHTML = '<img class="image-div" src="./assests/lunch_time.svg" alt="">'
        document.querySelector('.good-morning').innerText = 'GOOD AFTERNOON !! TAKE SOME SLEEP   !!!!!. '
        document.querySelector('.grab').innerText = "LET'S HAVE SOME LUNCH     !!. "

    }

    else if(splitnap[0] === (h)){
        document.querySelector('.image-div').innerHTML = '<img class="image-div" src="./assests/nap_time.svg" alt="">'
        document.querySelector('.good-morning').innerText = 'GOOD EVENING    !!'
        document.querySelector('.grab').innerText = 'STOP YAWNING, GET SOME TEA.. ITS JUST EVENING  !!! '

    }

    else if(splitnight[0] === (h)){
        document.querySelector('.image-div').innerHTML = '<img class="image-div" src="./assests/Component 32 .jpg" alt="">'
        document.querySelector('.good-morning').innerText = 'GOOD NIGHT   !!  ..'
        document.querySelector('.grab').innerText = 'CLOSE YOUR EYES AND GO TO SLEEP !!!!!.'

    }




    


})
document.querySelector('.set').addEventListener('mouseleave', () => {
    document.querySelector('.set').innerText = 'Set Alarm!'



})




console.log(wakeupvalue);





















