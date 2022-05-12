// Select pickup point text
pupPointContainer.change(() => {
    let pupSelection = $('#pickup_point option:selected').text();
    console.log(pupSelection);
})
