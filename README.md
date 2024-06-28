## Setup/Installations
* Install dependencies 
  * for server : ``npm install``
 * Run server (in main directory of project) ``npm start``

## APIS
**[GET]**   http://example.com/users

**[POST]**   http://example.com/user
```
{
    name:<string>,
    email:<string>
}
```
**[PUT]**   http://example.com/user/:id
```
{
    name:<string>,
    email:<string>
}
```

**[DELETE]**   http://example.com/user/:id

## LEVELS

### Level 1 
- Add CSS:
	- [x] Convert the displayed data into an HTML table.
	- [x] Ensure there is appropriate spacing and padding between table elements for better readability [refer screenshot].
- Fix Existing Issues:
	- [x] The "Add User" button is currently not functioning. Identify the issue and fix it so that new users can be added.
	- [x] Ensure that both the name and email fields are not left empty and contain valid values before submission.
	- [x] Implement validation for the email field to ensure that only valid email addresses are accepted.

![image](https://github.com/impressai/frontend_task/assets/28563570/27ae4e34-0ccb-488f-9215-e95842322b97)




### Level 2
- Integrate Antd components
	- [x] Table: Use Ant Design's table component to display the data.
	- [x] Buttons: Replace existing buttons with Ant Design's button components.
	- [x] Inputs: Use Ant Design's input components for forms.
- Fix Existing Issues: 
	- [x] Form Reset on Submission: Ensure that after submitting the form, the values in the name and email input fields are cleared.

![image](https://github.com/impressai/frontend_task/assets/28563570/65eda298-0f5b-4923-bbcc-45f7caf1b758)



### Level 3
- Add delete functionality:
	- [x] Delete for Each User: Implement a delete feature for each user entry

![image](https://github.com/impressai/frontend_task/assets/28563570/c3da4f55-6e89-47cc-bbde-35e3c20f80f6)




### Level 4
- Add edit functionality:
	- [x] Edit for Each User: Implement a edit feature for each user entry

![image](https://github.com/impressai/frontend_task/assets/28563570/67fd80fc-c022-41b3-8f01-de11de046379)



### Bonus level
- [x] Maintain separate reducer - create and manage a separate reducer for storing the details of the currently edited user.
- [x] Add Confirmation for Deletion - implement a confirmation dialog that asks for user approval before deleting a user entry.
