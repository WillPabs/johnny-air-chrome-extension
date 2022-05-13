// Select pickup point option container
const pickupPoints = [
    {
        'name': 'MAKATI HEAD OFFICE',
        'rate': '7'
    },
    {
        'name': 'JAC SM MEGAMALL',
        'rate': '7'
    },
    {
        'name': 'JAC CEBU',
        'rate': '7.5'
    },
    {
        'name': 'JAC DAVAO',
        'rate': '7.5'
    },
    {
        'name': 'JAC ILOILO',
        'rate': '7.5'
    },
    {
        'name': 'JAC CAGAYAN DE ORO',
        'rate': '7.5'
    },
    {
        'name': 'JAC DELIVERY',
        'rate': '7'
    },
    {
        'name': 'JAC BACOLOD',
        'rate': '7.5'
    },
    {
        'name': 'JAC DIAN',
        'rate': '7.5'
    },
    {
        'name': 'JAC PICKUP MAKATI',
        'rate': '7'
    }
]


// Select rate value container and assign to a variable
let rateValue = $('#rate').value;

// When option selected's value changes assign it to pupselection. Then check to see if pupselection matches 
// any name keys from pickupPoints, and assign it to matched.
// Assign matched object's rate value to rate
let pupPointContainer = $('#pickup_point');
let matched = '';
pupPointContainer.change(() => {
    let pupSelection = $('#pickup_point option:selected').text();
    // TODO
    // handle error when match not found
    matched = pickupPoints.find(match => match.name === pupSelection);
    rateValue = matched.rate;
    console.log(matched);
    console.log(rateValue);
});

setInterval(watchRateValue, 100);

// function that checks if the value of rate has been changed and uses checkPickupPointRate function to set the correct rate
function watchRateValue() {
    let rateVal = $('#rate');
    let lastVal = rateVal.data('lastValue');
    let currentVal = rateVal.val();
    if (lastVal != currentVal) {
        currentVal = checkPickupPointRate(matched, currentVal);
        document.querySelector('#rate').value = currentVal;
        // console.log('Value changed from ' + lastVal + ' to ' + currentVal);
        rateVal.data('lastValue', currentVal);
    }
}

// function to check if current pickup point has correct rate
// if rate is incorrect, get proper rate from specific pickup point object 
// return rate
function checkPickupPointRate(obj, rate) {
    if (obj.rate !== rate) {
        console.log(rate + ' changed to proper rate ' + obj.rate);
        rate = obj.rate;
    }
    return rate;
}