# odin-weather-app-api
practicing use of API's in web applications 

the .then .catch method didnt work with the way i had setup my functions to chain getting new info for what gif to query, switched to using
the try,catch instead and this worked, however the function did multiple things and didnt seperate concerns well, ill allow it this time as i was just doing some janky testing with using the work, though i think i should have seperated the await calls into seperate functions probably, possibly having a module where i called all the info i would require for the page, and then returning to other rendering modules or functions ONLY the information that would be displayed on the page.