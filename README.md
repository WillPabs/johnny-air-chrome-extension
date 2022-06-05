# johnny-air-corporate-chrome-extension

### HOW TO INSTALL
------------------
1. Fork then clone this repo to your local machine.
2. In Google Chrome, click the extensions icon and click "Manage extensions".
3. Click The "Load unpacked" icon.
4. Select the folder you just cloned.
5. Go to [JohnnyAirPlus Website](https://tracker.johnnyairplus.com/).
6. Log in!

##### If you don't know the basics of using git, here's a great resource to get you started. https://www.theodinproject.com/lessons/foundations-git-basics

### ABOUT
This extension modifies incorrect pricing calculations.

The script will grab the DOM element that contains the select pickup point value options. It will run an event that will assign the selected
option value to a variable. Depending on which location the selected pickup point value is, will determine the rate.

The script contains a button that allows the user to say that an invoice will be paid for using the corporate account. The button will be considered an inland. The price of inland is calculated by weight. If weight is less than 15lbs fixed price is $35. If over 15lbs, inland price is calculated by weight multiplied by 2.5.

The script will grab the DOM element that contains the delivery value and replace it with 5.00.
