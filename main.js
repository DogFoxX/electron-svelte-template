// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('path')
const windowStateKeeper = require('electron-window-state')
const serve = require('electron-serve')
const loadURL = serve({ directory: 'public' })
// Uncomment the following code to create a Single Instance app
// This will prevent the use to open the app twice
// and will focus the already open app
// const gotTheLock = app.requestSingleInstanceLock()

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function isDev() {
	return !app.isPackaged
}

// Main Window
function createWindow() {
	// Set default width and height values
	let mainWindowState = windowStateKeeper({
		defaultWidth: 800, // Default Width in pixels
		defaultHeight: 600 // Default Height in pixels
	})
	
	// Create the browser window.
	mainWindow = new BrowserWindow({
		x: mainWindowState.x, // Sets last x position
		y: mainWindowState.y, // Sets last y position
		width: mainWindowState.width, // Sets last width
		height: mainWindowState.height, // Sets last height
		minWidth: 800, // Minimum Width in pixels
		minHeight: 600, // Minimum Height in pixels
		webPreferences: {
			nodeIntegration: true,
			preload: path.join(__dirname, 'preload.js'),
			// enableRemoteModule: true,
			// contextIsolation: false
		},
		show: false
	})
	
	// Uncomment the following line on code to remove the menu underneath the title bar
	// mainWindow.removeMenu()
	
	mainWindowState.manage(mainWindow) // Saves the last window state (width, height, x posistion, y position)
	
	// This block of code is intended for development purpose only.
	// Delete this entire block of code when you are ready to package the application.
	if (isDev()) {
		// Open the DevTools
		// mainWindow.openDevTools()
		
		// Set the window icon while in development.
		// Not needed when packaged. Replace icon.ico in ./resources with your own.
		// Icon is set in electron-builder.yml
		mainWindow.setIcon('./resources/icon.ico')
		
		mainWindow.loadURL('http://localhost:5000/')
	}
	else {
		loadURL(mainWindow)
	}
	
	// Uncomment the following line of code when app is ready to be packaged
	// loadURL(mainWindow)
	
	// Disable Electron Security Warning.
	// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true
	
	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null
	})
	
	// Emitted when the window is ready to be shown
	// This helps in showing the window gracefully.
	mainWindow.once('ready-to-show', () => {
		mainWindow.show()
	})
}

// Single Instance 
// Uncomment the following block of code to make the app Single Instance:

// if (!gotTheLock) {
	// app.quit()
// }
// else {
	// app.on('second-instance', () => {
		// if (mainWindow) {
			// if (mainWindow.isMinimized()) {
				// mainWindow.focus()
			// }
			// else {
				// mainWindow.show()
			// }
		// }
	// })
	
	// app.on('ready', () => {
		// createWindow()
		// Include any other code here. Good place to check for updates when the app starts
	// })
// }

// If using Single Instance, remove the following code
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
	createWindow()
	// Include any other code here. Good place to check for updates when the app starts
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
