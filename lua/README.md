### How to send data from DCS to the webserver application

1. At the **top** of the `MissionScripting.lua` script file located in your DCS/Scripts directory, add the following line
```
mint = { require = require }
```
2. In your mission, add a `MISSION START` trigger to run the `mint.lua` script
3. Start the webserver application
4. Start the mission
