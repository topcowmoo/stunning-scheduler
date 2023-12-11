# Stunning Scheduler JavaScript Logic

## 1. Once the page fully loads:
  * Set the date as current date via Day.js in the "currentDay" element.

## 2. When event is entered and the save button is clicked:
* Get the time-block ID for the event.
* Obtain the input from textarea.
* Use time-block ID as the key to save event to local storage, keeping event after refreshing browser.

## 3. Show users input from local storage:
* Each time-block - get the time-block ID for the event, - get the input from local storage, - Put user input into textarea value in the event.

## 4. 