// Select pickup point option container
const pickupPoints = [
    {
        'name': 'MAKATI HEAD OFFICE',
        'rate': '7',
        'value': '1'
    },
    {
        'name': 'JAC SM MEGAMALL',
        'rate': '7',
        'value': '2'
    },
    {
        'name': 'JAC CEBU',
        'rate': '7.5',
        'value': '3'
    },
    {
        'name': 'JAC DAVAO',
        'rate': '7.5',
        'value': '4'
    },
    {
        'name': 'JAC ILOILO',
        'rate': '7.5',
        'value': '5'
    },
    {
        'name': 'JAC CAGAYAN DE ORO',
        'rate': '7.5',
        'value': '6'
    },
    {
        'name': 'JAC DELIVERY',
        'rate': '7',
        'value': '7'
    },
    {
        'name': 'JAC BACOLOD',
        'rate': '7.5',
        'value': '8'
    },
    {
        'name': 'JAC DIAN',
        'rate': '7.5',
        'value': '43'
    },
    {
        'name': 'JAC PICKUP MAKATI',
        'rate': '7',
        'value': '38'
    }
];


// Select rate value container and assign to a variable
let rateValue = $('#rate').val();

// When option selected's value changes assign it to pupselection. Then check to see if pupselection matches 
// any name keys from pickupPoints, and assign it to matched.
// Assign matched object's rate value to rate
let pupPointContainer = $('#pickup_point');
let matched = '';
pupPointContainer.change(() => {
    let pupSelection = $('#pickup_point option:selected').val();
    console.log("Selected " + pupSelection);
    matched = pickupPoints.find(match => match.value === pupSelection);
    rateValue = matched.rate;
    console.log("Matched pickuppoint " + JSON.stringify(matched));
    console.log("Rate value " + rateValue);
});

// function that checks if the value of rate has been changed and uses checkPickupPointRate function to set the correct rate
function watchRateValue() {
    let rateVal = $('#rate');
    let currentVal = rateVal.val();
    if (matched.rate != currentVal) {
        console.log("Matched val " + matched.rate);
        console.log("Current val " + currentVal);
        console.log("Matched " + JSON.stringify(matched));
        currentVal = checkPickupPointRate(matched, currentVal);
        document.querySelector('#rate').value = currentVal;
    }
};

// function to check if current pickup point has correct rate
// if rate is incorrect, get proper rate from specific pickup point object 
// return rate
function checkPickupPointRate(obj, rate) {
    if (obj !== undefined && obj.rate !== rate) {
        console.log(rate + ' changed to proper rate ' + obj.rate);
        rate = obj.rate;
    }
    return rate;
};


// create checkbox to signify if invoice requires inland calculation
const chargesContainer = document.querySelectorAll('.card')[5].children[0];
$('<div id="inlandContainer"><label for="inlandCheckbox">Inland</label><input type="checkbox" id="inlandCheckbox"/></div>').insertAfter(chargesContainer);


// TO DO 
// when inland checkbox is checked, monitor any changes in chargeable weight to reflect the correct inland price 
$(document).on('click', '#inlandCheckbox', setInlandVal);

function setInlandVal() {
    console.log('checkbox clicked');
    let isChecked = $('#inlandCheckbox').prop('checked');
    isChecked ? $('#inland').val(calculateInland(), 1000) : $('#inland').val('');
}

$('.card .card-header #ch_weight').on('change', () => {
    calculateInland();
    console.log("Changing weight value");
});

function calculateInland() {
    // get chargeable weight
    let chargeableWeight = document.querySelector('.card .card-header #ch_weight').value;
    // check if weight is 15lbs or over
    if (chargeableWeight >= 15) {
        // return value of multiply weight times 2.5
        return chargeableWeight * 2.5;
    }
    // return default inland value of $35
    return 35;
}

setInterval(watchRateValue, 500);