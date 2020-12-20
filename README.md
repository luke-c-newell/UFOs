# UFOs
## Overview of the Analysis
This repository contains code for a web app which publishes information from a database of UFO sightings. I have created the web app using HTML/CSS and JavaScript and it enables the user to filter a table of UFO Sightings based on the date of the event, the location and also the shape of UFO. The web app is hosted via GitHub Pages and can be [found at this link](https://luke-c-newell.github.io/UFOs/ "UFO Sightings")!
## Results
You can view the site at the link above, but I have also included an image of the site below. I have written a guide with instructions on how to perform a search, which can be found beneath this image. When the site loads, the entire table is also loaded and the dataset can be viewed in its entirety by scrolling down the page.

![UFO_Sightings](https://github.com/luke-c-newell/UFOs/blob/main/static/images/UFO_Sightings.png "UFO_Sightings.png")

### How to perform a search
To perform a search of the data, you can click on the desired search box on the left hand side, type your search term into the box and then press enter. For example, I have filtered for the city of El Cajon, as shown in the image below. Do ensure that you type your search term entirely in lower case, ensuring that the spelling is correct! 

![One_Filter](https://github.com/luke-c-newell/UFOs/blob/main/static/images/One_Filter.png "One_Filter.png")

It is also possible to search for multiple terms at once. To filter by an additional column, type your search term(s) in the desired box and then press enter again. The table will automatically update to show all results which exactly match every search term, as shown below by the results for 'triangle' shaped sightings in 'el cajon' on '1/1/2010'.

![Three_Filters](https://github.com/luke-c-newell/UFOs/blob/main/static/images/Three_Filters.png "Three_Filters.png")

## Summary
Overall, the web app has been set up to successfully filter the table on five distinct columns. However, there is a drawback to the filtering functionality. If the user spells a search term incorrectly, or adds an uppercase letter to their query, the search function will break and return zero results. This could be rectified with further development, but for now, the user is nudged to enter the search term correctly by the placeholder data in the search boxes.
### Recommendations for further development
1. I could add a 'reset filters' button to the page that would allow the user to refresh the main table. This would avoid the user having to delete the text they have previously entered before starting their next search query.
2. I could also add a counter that shows the number of results returned by the search query. This would enable the user to quickly understand how many results are available for each of their searches.