# johnny-air-corporate-chrome-extension
This extension modifies incorrect pricing calculations.

The script will grab the DOM element that contains the select pickup point value options. It will run an event that will assign the selected
option value to a variable. Depending on which location the selected pickup point value is, will determine the rate.

The script contains a button that allows the user to say that an invoice will be paid for using the corporate account. The button will be considered an inland. The price of inland is calculated by weight. If weight is less than 15lbs fixed price is $35. If over 15lbs over inland price is calculated by weight multiplied by 2.5.

The script will grab the DOM element that contains the delivery value and replace it with 5.00.
