# Server List viewer using Excel File as Database.

List out your server from Excel file in a minute!

## How to start

You will need to clone the source code of ServerList-Viewer GitHub repository.

`git clone https://github.com/paanjoe/`

After the repository is cloned, go inside of the repository directory and install dependencies:

```
cd ng-dashboard
npm install
npm start
```
```
IIS
cd <PATH>
npm install
npm install -g@ angular/cli
npm install pm2@latest -g
npm run ng build
deploy dist in IIS

cd <BACKEND>
pm2 start index.js
pm2 startup

```
## Build
```
npm start build
```
All build file are stored at dist folder.
