function boredBuster(details){

    axios.request({
        url: `http://www.boredapi.com/api/activity/`
    })
    .then(successFunction).catch(failureFunction);
    function successFunction(response) {
        document.body.insertAdjacentHTML(`beforeend`, `<h3>${response[`data`][`activity`]}</h3>`);
      }
    
      function failureFunction(error) {
        document.body.insertAdjacentHTML(`afterbegin`, `<h3>Error!</h3>`);
      }

}




let boredButton = document.getElementById(`bored_button`);
boredButton.addEventListener(`click`, boredBuster);