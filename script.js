const $date = $(".date");
const $inputsForm = $(".inputs");
const hours = ['9 AM','10 AM','11 AM','12 AM','1 PM','2 PM','3 PM','4 PM','5 PM',];
const currentH = moment().format("H");
const $saveButton = $(".saveButton");

// See https://devhints.io/moment for moment.js cheatsheet
$date.text(moment().format('llll'));

for(let i in hours){
    const iTime = parseInt(i) + 9;
    const $inputGroupDiv = $("<div>");
    const $input = $("<input>");
    const $hourLabel = $("<span>");
    const $hourDiv = $("<div>");
    const $buttonDiv = $("<div>");
    const $saveBtn = $("<button>");
    const $saveIcon = $("<i>");

    $inputGroupDiv.addClass("input-group mb-3");
    $input.attr("type", "text");
    $input.addClass("form-control");
    $hourDiv.addClass("input-group-prepend");
    $hourLabel.text(hours[i]);
    $hourLabel.addClass("input-group-text");
    $buttonDiv.addClass("input-group-append");
    $saveBtn.addClass("btn btn-primary saveButton");
    $saveBtn.attr("type", "submit");
    $saveIcon.addClass("material-icons");
    $saveIcon.text("save");
    
    if(iTime > currentH){
        $input.addClass("future");
    } else if(iTime < currentH){
        $input.addClass("past");
    } else{
        $input.addClass("current");
    }

    $hourDiv.append($hourLabel);
    $saveBtn.append($saveIcon);
    $buttonDiv.append($saveBtn);
    $inputGroupDiv.append($hourDiv, $input, $buttonDiv);
    $inputsForm.append($inputGroupDiv);
}

$saveButton.on('click', function(e){
    e.preventDefault();
    console.log('hi');
})