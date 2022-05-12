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

let pupPointContainer = $('#pickup_point');
let pupSelection = '';

// select rate value container and assign to a variable
let rate = $('#rate').value;

// when option selected's value changes assign it to pupselection
pupPointContainer.change(() => {
    pupSelection = $('#pickup_point option:selected').text();
    let matched = pickupPoints.find(match => match.name === pupSelection);
    console.log(matched);
});


