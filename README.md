<div align="center">
<font size="16px"><strong>Desktop Apps with Electron + Svelte</strong></font>
<br>
<br>
<img src="https://raw.githubusercontent.com/dogfoxx/assets/master/electron-svelte-template/electron_svelte.png" alt="Electron + Svelte Banner" width="600" />
<br>
<br>
<font size="5px">Boilerplate to get started with Electron using the Svelte Framework</font>
</div>

# Get Started :checkered_flag:
### 1) Clone this boilerplate

<strong>Run the following command to clone</strong>
Replace electron-svelte-app to folder of your choice and with your project name
eg. Cloning the project into Documents folder <strong>C:\Users\UserName\Documents\My App<strong>

    npx degit DogFoxX/electron-svelte-template electron-svelte-app
	
<strong>Switch to cloned directory</strong>
Again, replace electron-svelte-app with your project directory from the first step

    cd electron-svelte-app
	
<strong>Install all Dependencies</strong>

    npm install
    
<strong>Initialize Project</strong>
Will ask for package name, description, author, github repo, etc

    npm init
	
<strong>Update all Dependencies</strong>

    npm install --save electron-serve@latest electron-window-state@latest

<strong>Update all Dev Dependencies</strong>

    npm install --save-dev @rollup/plugin-commonjs@latest @rollup/plugin-node-resolve@latest concurrently@latest electron@latest electron-builder@latest rollup@latest rollup-plugin-css-only@latest rollup-plugin-livereload@latest rollup-plugin-svelte@latest rollup-plugin-terser@latest sirv-cli@latest svelte@latest wait-on@latest

### 2) Changing some values :pencil2:
After you've cloned the project you're <i><u><strong>almost</strong></u></i> ready to get started on your app
We need to change some things first

#### package.json:
Open package.json with your preferred IDE, and look for <strong>productName</strong>
It's value will be the title of your app

It may contain upper and lowercase letters, spaces and other special characters not allowed in the <strong>name</strong> property
eg. If the <strong>name</strong> property is <strong>"myapp"</strong>, the <strong>productName</strong> property can be <strong>"MyApp"</strong>

#### Electron-Builder:
Open <strong>electron-builder.yml</strong> with your preferred IDE
You may change any values here, but we will only cover the ones that are neede for now
See <a href="https://www.electron.build/configuration/configuration">Electron Builder Configuration</a> for more details on each property

- Set the <strong>appID</strong>
- Set the <strong>uninstallDisplayName</strong> (May contain upper and lowercase letters, spaces and other special characters)
- Set <strong>token</strong> (Your GitHub Personal Access Token. This is needed if you wish to publish your app to your repo and use <strong>electron-updater</strong>

### 3) Running & Building your app :hammer:
You should be good to go to run your app

<strong>Test your app</strong> :rocket:

    npm run dev
    
<strong>Build your app</strong> :hammer:

This will create a new folder in your project folder <strong>dist</strong>
Inside the <strong>dist</strong> folder will be your setup file, and the fully unpacked app inside <strong>win-unpacked</strong> folder

    npm run build
    
<strong>Publish your app</strong> :trophy:

This will build your app the same as `npm run build`, but it will also publish your app as a release in your GitHub Repo
Version number inside <strong>package.json</strong> is also taken into account

    npm run deploy

## Wait, I don't what to do next! :fearful:
If you haven't used Svelte before, it may get a bit confusing where to start
We'll get you started with the basics

### 1) CSS and HTML
Svelte makes use of the <strong>public</strong> and <strong>src</strong> folders found in the root of your project

#### Public Folder
Here you'll find two files; <strong>global.css</strong> and <strong>index.html</strong>

- <strong>global.css</strong>
<strong>global.css</strong> is where you'll add any css code to be applied to your whole app
We recommend not to use this file to set all your css code, as it can get cluttered

- <strong>index.html</strong>
This is the main html file where all your <strong>.svelte</strong> files will be loaded
We do not recommend to change anything in the <strong>```<body>```</strong> tag
Inside the <strong>```<head>```</strong> tag you can include more css stylesheets

#### Src Folder
Here you find two files; <strong>App.svelte</strong> and <strong>main.js</strong>

- <strong>App.svelte</strong>
This file serves as the main html and scripts for your project
<strong>.svelte</strong> files typically have a <strong>```<script>```</strong> tag where all your javascript code will be, and a <strong>```<style>```</strong> tag to add css code that only affect the html inside the current .svelte file
You do not need to create a <strong>```<body>```</strong> tag again. Just write your html as normal.

eg.

```
<script>
any javascript code here
</script>

html code here
eg.
<h1>Hello World</h1>

<style>
any css code here
eg.
h1 { color: red;}
</style>
```

- <strong>main.js</strong>
Not to be confused with the <strong>main.js</strong> in the root of your project
This file is tells electron to add <strong>App.svelte</strong> inside the <strong>```<body>```</strong> of <strong>index.html</strong>
We do not recommend to change anything here, except for any <strong>props</strong> you wish to send to <strong>App.svelte</strong>
If you do not want to send any props to <strong>App.svelte</strong>, you may go ahead and remove the property

That's it for now
Visit the <a  href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps

