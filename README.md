# North America vs Japan, A Look Into Popular Video Game Genres and Sales
## Description
When our team came across the chance to design a front-end for a database about video games, there was no need for any more discussion.  Our web application will display information pertaining to video game sales across three decades mainly showcasing which genre of video games were the most popular.  Our database contains information going back to 1990 all the way up to 2010.  Casual gamers, professionals, or those whos simply enjoy videogames and history will be able to witness how the preference of specific genres have changed over time.

## Website
https://finalproject26.herokuapp.com

## Target Browsers
* iPhone 8/9/10/11/12 Plus
* macOS 11.2.9/11.3.0/11.3.1
* Windows 10

## Links
* [Developer Manual](https://github.com/mruiz99/Group26-Final-INST377SP2021/blob/main/README.md) 

# Developer Manual
##  Installing the application and dependencies
1.  You must clone the repository either through your terminal or Github Desktop.
2.  You must open the web applicaton through your preferred terminal.
3.  Type 'npm install'to update the appication and then run again.
4.  These are all of the steps to run the application.

## How to run application on a server 
 1. Open respository in VSCode terminal or Terminal application. 
 2. Run "npm start" into terminal window. Ooutput should be listening on '''localhost:3000'''.
 3. Navigate in web browser to '''http://localhost:3000/'''.

## To run tests for Software
 1. There are no prewritten tests for the source respository, but you can use Cypress to run your own tests. 
 2. In the first terminal, run '''npm start'''.
 3. In the second terminal, run '''npm test'''.	

## Server application APIs

'''/api/games''' - retrieves all records from the games and genre tables
- GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.

'''/api/NAnineties''' - retrieves the average number of North American sales for each genre in the 1990s. 
- GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.

'''/api/NAtwothou''' - retrieves the average number of North American sales for each genre in the 2000s. 
- GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.

'''/api/NAtwoten''' - retrieves the average number of North American sales for each genre in the 2010s. 
- GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.

'''/api/JPnineties''' - retrieves the average number of Japanese sales for each genre in the 1990s. 
- GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.

'''/api/JPtwothou''' - retrieves the average number of North American sales for each genre in the 2000s. 
- GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.

'''/api/JPtwoten''' - retrieves the average number of North American sales for each genre in the 2010s. 
- GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.

'''/api/developers''' - retrieves the average number of North American sales for each genre in the 90s. 
- GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.
- POST - obtains developer name from request body to query database. Fetches data json from Developer's API and returns JSON response.
- DELETE- obtains developer name from request body to query database. Destorys that record if it matches a developer in the database.

## Known Bugs and Future Development
## Bugs
- There may be null values in the developers table that may need to be handled

## Future Development
- Handle null values in the developers table. 
- Continue to add datapoints from 2020 and 2021.
- Adding more elements to sub pages to be more descriptive for the user.
- Adding more options for users to filter data.
- Including the european and global sales figures.

