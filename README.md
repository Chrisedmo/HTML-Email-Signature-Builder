# HTML-Email-Signature-Builder
A Gulp based workflow to quickly generate batches of HTML Email Signatures

## Set Up
Clone or download this repository and then run `npm install`

## Data
Format all your contacts/clients data into the csv file located in `_csv/_data.csv` you can change the headers as you please but you will need to then update your `templates/temp.handlebars' file to reflect these new columns.

## Render
Run `gulp csv2json` this will create a json file that the handlebars file reads from. (You only need to this for the first time).
You can then just run `gulp` and it will automatically run the previous command for you. But it needs a .json file in the project first.

## Templates
The template file uses handlebars. You can use `if` statements in these email signatures which is very handy,
