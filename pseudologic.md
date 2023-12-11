# Stunning Scheduler JavaScript Logic

## 1. Once the page fully loads:
  * Set the date as current date via Day.js in the "currentDay" element.

## 2. When event is entered and the save button is clicked:
* Get the time-block ID for the event.
* Obtain the input from textarea.
* Use time-block ID as the key to save event to local storage, keeping event after refreshing browser.

## 3. Show users input from local storage:
* Each time-block - get the time-block ID for the event, - get the input from local storage, - Put user input into textarea value in the event.

## 4. Update the time-block ID colors based on the current time:
* Get the current time.
* Get the time-block time from its ID (past, present or future).
* Add the proper class based on the current time.

## 5. Whenever the pages loads:
* it display the current time via Day.js function
* the correct color is displayed in corresponding time-block
* displays input saved in local storage thus far.
