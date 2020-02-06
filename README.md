# Work Day Planner

## Description
A work day planner that allows for dividing tasks up into the hour of the work day. The hours are color coded to reflect the time of day, red if the hour has already passed, blue for the current hour, and green for future hours. There is a save button that saves the input value which will be displayed even on page reload.

## Technologies
HTML was used for the basic page layout, CSS was used sparingly for the input color coding and formating the save button icon, JS was used to dynamically create the inputs, comparing the time with the work hours, and saving the input values to local storage. The bootstrap framework was used for most of the styling, added mostly through JS. Jquery was used to type less because vanilla JS is tedious and depressing. Moment.js was used for the actual time and date.

## Challenges
The main challenge was dealing with the dynamically generated inputs. It took a long time to figure out how to get the values of an input when its corresponding save button was pressed becuase each input didn't have a specific id or unique class. In the end this was solved using the 'this' function and jquery's element navigation. The event listener for the save button also had to have a slightly different syntax than what I was used to doing, which took a lot of time and frustration to my soul to figure out. There were surprisingly very few bugs, the main one having to do with not updating values from local storage, but it was an easy fix.

## Screenshots
