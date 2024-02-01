let counterMain = document.querySelector('.counterMain');
let counterFooter = document.querySelector('.counterFooter');
let daysData = counterMain.children[0].children[0];
let hoursData = counterMain.children[1].children[0];
let minutesData = counterMain.children[2].children[0];
let secondsData = counterMain.children[3].children[0];
// console.log(hoursData);

const FooterDate = () => {
    // Get the current date components
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    const day = currentDate.getDate();
    const germanMonths = {
        1: "Januar",
        2: "Februar",
        3: "März",
        4: "April",
        5: "Mai",
        6: "Juni",
        7: "Juli",
        8: "August",
        9: "September",
        10: "Oktober",
        11: "November",
        12: "Dezember"
    };

    console.log(germanMonths[month])
    // Output the current date
    const footerDate = `${day} .  ${germanMonths[month]}  ${year}`;

    // Injecting data into HTML
    counterFooter.innerText = footerDate;
};

// Counter Method 
const timer = () => {
    // Create a new Date object
    const refDate = "3 Feb 2024 12:00 AM";
    const endDate = new Date(refDate);
    const currentDate = new Date();
    const difference = (endDate - currentDate) / 1000;
    //divede by 1000 to convert into seconds from miliseconds

    //  ########### To Avoide Negative Time Values ############
    if (difference < 0) {
        return;
    }



    // *************** Converting seconds into Days ************
    // 1 day=24hours 
    // 1 hour =3600 sec
    // 24*3600=seconds in 1 day 
    let days = Math.floor(difference / 3600 / 24);
    // console.log(days);


    // *************** Converting seconds into Hours ***************
    let hours = Math.floor((difference / 3600) % 24);


    // **************** Converting seconds into Minutes ***************
    let minutes = Math.floor((difference / 60) % 60);


    // **************** Converting seconds into Seconds ***************
    let seconds = Math.floor(difference % 60);


    // ************ injecting data to Counter *********** 
    daysData.innerHTML = days;
    hoursData.innerHTML = hours;
    minutesData.innerHTML = minutes;
    secondsData.innerHTML = seconds;
}

// Render the Footer Date 
FooterDate();

//  Rendering Content after every Second
setInterval(() => {
    timer();
}, 1000);