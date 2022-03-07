<div align="center">
<font size="16px"><strong>Desktop Apps with Electron + Svelte</strong></font>
<br>
<br>
<img src="https://raw.githubusercontent.com/dogfoxx/assets/master/electron-svelte-template/electron_svelte.png" alt="Electron + Svelte Banner" width="600" />
<br>
<br>
<font size="5px">Boilerplate to get started with Electron using the Svelte Framework</font>
</div>

# Get Started
### 1) Clone this boilerplate

<p>Run the following command to clone
<br>
Replace electron-svelte-app to folder of your choice and with your project name
<br>
eg. Cloning the project into Documents folder <strong>C:\Users\UserName\Documents\My App<strong></p>

    npx degit DogFoxX/electron-svelte-template electron-svelte-app
	
<p>Switch to cloned directory
<br>
Again, replace electron-svelte-app with your project directory from the first step</p>

    cd electron-svelte-app
	
<p>Install all Dependencies</p>

    npm install
    
<p>Initialize Project
<br>
Will ask for package name, description, author, github repo, etc</p>

    npm init
	
<p>Update all Dependencies</p>

    npm install --save electron-serve@latest electron-window-state@latest

<p>Update all Dev Dependencies</p>

    npm install --save-dev @rollup/plugin-commonjs@latest @rollup/plugin-node-resolve@latest concurrently@latest electron@latest electron-builder@latest rollup@latest rollup-plugin-css-only@latest rollup-plugin-livereload@latest rollup-plugin-svelte@latest rollup-plugin-terser@latest sirv-cli@latest svelte@latest wait-on@latest

### 2) Changing some values
<p> After you've cloned the project and you're ready to get started on your app, we need to change some things</p>

#### package.json:
<p>Open package.json with your preferred IDE, and look for <strong>productName</strong>
<br>
It's value will be the title of your app</p>
<p>It may contain upper and lowercase letters, spaces and other special characters not allowed in the <strong>name</strong> property
<br>
eg. If the <strong>name</strong> property is <strong>"myapp"</strong>, the <strong>productName</strong> property can be <strong>"MyApp"</strong></p>

#### Electron-Builder:
<p>Open <strong>electron-builder.yml</strong> with your preferred IDE
<br>
You may change any values here, but we will only cover the ones that are neede for now
<br>
See [Electron Builder Configuration](https://www.electron.build/configuration/configuration) for more details on each property</p>

- Set the <strong>appID</strong>
- Set the <strong>uninstallDisplayName</strong> (May contain upper and lowercase letters, spaces and other special characters)
- Set <strong>token</strong> (Your GitHub Personal Access Token. This is needed if you wish to publish your app to your repo and use <strong>electron-updater</strong>

### 3) Running & Building your app
<p>You should be good to go to run your app</p>
<p>Test your app<p>

    npm run dev
    
<p>Build your app</p>
<p>This will create a new folder in your project folder <strong>dist</strong>
<br>
Inside the <strong>dist</strong> folder will be your setup file, and the fully unpacked app inside <strong>win-unpacked</strong> folder</p>

    npm run build
    
<p>Publish your app</p>
<p>This will build your app the same as `npm run build`, but it will also publish your app as a release in your GitHub Repo
<br>
Version number inside <strong>package.json</strong> is also taken into account</p>
