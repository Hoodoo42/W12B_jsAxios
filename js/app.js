
// the oredBuster function will send a request to the url , and sets up for either a success or a failure
function boredBuster(details){

    axios.request({
        url: `http://www.boredapi.com/api/activity/`
    })
    .then(successFunction).catch(failureFunction);
 

}
// succes function will display a new activity to beat boredom every time the button is clicked. these activities are provided through the api
function successFunction(response) {
    document.body.insertAdjacentHTML(`beforeend`, `<h3>${response[`data`][`activity`]}</h3>`);
  }
// the failure function will display "error" if there was any issue in getting the api request

  function failureFunction(error) {
    document.body.insertAdjacentHTML(`afterbegin`, `<h3>Error!</h3>`);
  }



// adding a variable that will hold the selected element, and use the variable to add an eventListener that will listen for the button click and start the function

let boredButton = document.getElementById(`bored_button`);
boredButton.addEventListener(`click`, boredBuster);