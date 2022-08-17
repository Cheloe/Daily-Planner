

//--Today's Date--------------------------------------------------------------//

var currentDay = moment().format("dddd, MMMM Do YYYY");
$('#currentDay').text(currentDay);

//--Populate and style time blocks--------------------------------------------//

var timeBlockContainer = $('.container');
var statusColor = " red";

var hourEl = ["9:00 am", "10:00 am", "11:00 am", "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm"];
var savedEventArray = [];
savedEventArray[5] = "Never go home, work rules";
// console.log(savedEventArray);


for (let i = 0; i < hourEl.length; i++) {

    var timeBlockHtml = `<div class='input-group' data-index-position = ${i}> <span class='input-group-text' id='addon-wrapping'> ${hourEl[i]} </span> <input type='text' class='form-control ${statusColor}' value= '${savedEventArray[i]}' placeholder='Add something' aria-label='Add something' aria-describedby='button-addon2'> <button class='btn btn-info saveBtn' type='button' id='button-addon2'>Save</button></div>`;

//reformat time label to moment format
    var momentFormatter = moment(hourEl[i], "hh:mm a").format("YYYY-MM-DD HH:mm"); //transform label time to moment time
    
//if else logic for before/after/same
    var afterChecker = moment().isAfter(momentFormatter, "hour");//compare time to transformed time 
    var sameChecker = moment().isSame(momentFormatter, "hour"); 
    var beforeChecker = moment().isBefore(momentFormatter, "hour");

//set styles based on before/after/same

//then append all the thingies

    timeBlockContainer.append(timeBlockHtml);

$('#test').text(afterChecker);

}

//--Save to Storage-------------------------------------------------------------------//

//event listener--on save
//the text gets placed in the savedEventArray at #data-index-position
//save that array to local storage
//add a step to the for loop that makes the value of any corresponding timeblock populate if it has been saved
