## Trello extract for Gantt chart creation for Delivery Excellence team.

### Prequisites:
#### Git
- Git or some git tool is required to clone the project locally


#### NodeJS
- Node V12.16.1 or higher is recommended.  
- This code was written and tested only on Node V12.16.1.
- I recommed using Node Version Manager (https://github.com/nvm-sh/nvm) as it does not require you to install Node as root.

### Running locally:
1. Clone this repo locally: https://github.ibm.com/Expert-Labs-Assets/delex-trello-reports 
2. To run this locally you MUST create a developer key and token using your Trello credential by navigating here:  https://trello.com/app-key
3. Create a file in your **/server** folder named **keys.json**
4. Inside the **keys.json** file
```json
{
	"trello": {
		"key": "<developer api key from https://trello.com/app-key>",
		"token": "<manually created token from https://trello.com/app-key>"
	}
}
```
5. From a command prompt inside the project cloned in Step 1 enter the command `npm ci` to allow npm to install all necessary dependencies to execute the code.
6. Start the server by entering the following at the command prompt: `npm run dev`
   
### Using the dashboard

From a web browser navigate to https://localhost:3000

** You must have be in the IBM BlueGroup `delex-dashboard-user` **
