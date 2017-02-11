# map-demo Check-In


### What Updates Did I Make?

* I removed the static airport information on the html page and moved it onto the markers.
* Sorted the airport list before rendering.
* Cleaned up the pre-existing JavaScript Code.
* Changed a few HTML IDs to Classes.
* Added a "Clear Map" button.
* Changed the layout and style of the general page.
* The map view will automatically snap to where the airport is.

### Interesting things I noticed about the code

* Most HTML elements were identified with IDs instead of classes. This caused an error with inserting text into the (later removed) "setting-name" div.
* JavaScript file layout was a little messy, had to add or remove a lot of whitespace to make it a little more readable.
* HTML qoutes were used instead of apostraphes, just a minor typo.

### Suggestions for Improvements

* Use fewer id attributes for the HTML, most of the time they weren't really necessary, and it can have odd effects like the above issue.
* Move the airport dropdown above the map, it's annoying to have to scroll to the bottom of the page in order to use it.

### Places Where I Went Above and Beyond

* I moved the map to the right side of the screen so that users won't have to unecessarily scroll down.
* I styled the marker window in order to make information easier to read, and removed that information from the page in order to free up screen real estate.
