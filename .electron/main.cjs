const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron");
const windowStateKeeper = require('electron-window-state');
const contextMenu = require("electron-context-menu");
const serve = require('electron-serve');
const loadURL = serve({ directory: '.' });
const Store = require("electron-store");
const gotTheLock = app.requestSingleInstanceLock();

// Initialize electron-store
Store.initRenderer();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function isDev() {
	return !app.isPackaged;
};

// Disable Electron Security Warning.
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true;

// Main Window
const createWindow = () => {
	// Set default width and height values
	let mainWindowState = windowStateKeeper({
		defaultHeight: 700,
		defaultWidth: 1000
	});

	// Create the browser window
	mainWindow = new BrowserWindow({
		x: mainWindowState.x,
		y: mainWindowState.y,
		height: mainWindowState.height,
		width: mainWindowState.width,
		minHeight: 600,
		minWidth: 800,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			enableRemoteModule: true,
			preload: `${__dirname}/preload.cjs`
		},
		backgroundColor: "#192127",
		frame: false,
		show: false
	});

	// Save the last window state (width, height, x posistion, y position)
	mainWindowState.manage(mainWindow);

	// This block of code is intended for development purpose only.
	// Delete this entire block of code when you are ready to package the application.
	if (isDev()) {
		// Open the DevTools
		mainWindow.openDevTools({mode: "detach"});
		
		// Set the window icon while in development.
		// Not needed when packaged. Replace icon.ico in ./resources with your own.
		// Icon is set in electron-builder.yml
		mainWindow.setIcon('./public/icon.ico');
		
		mainWindow.loadURL('http://localhost:5000/');
	} else {
		loadURL(mainWindow);
	};

	// Uncomment the following line of code when app is ready to be packaged
	// loadURL(mainWindow);
	
	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});
	
	// Emitted when the window is ready to be shown
	// This helps in showing the window gracefully.
	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
	});
};

// Set the Context Menu
contextMenu({
	showLookUpSelection: false,
	showSearchWithGoogle: true,
	showCopyImage: true,
});

// Single Instance 
if (!gotTheLock) {
	app.quit();
} else {
	app.on('second-instance', () => {
		if (mainWindow) {
			if (mainWindow.isMinimized()) {
				mainWindow.focus();
			} else {
				mainWindow.show();
			}
		};
	});
	
	app.on('ready', () => {
		createWindow();
		// Include any other code here. Good place to check for updates when the app starts
	});
};

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow();
});

// Theme Toggle
ipcMain.handle("theme-toggle", (e, theme) => {
    nativeTheme.themeSource = theme;
});

// Window States
ipcMain.handle("window/get-state", () => {
	return mainWindow.isMaximized();
});

ipcMain.handle("window/toggle-max", () => {
	if (mainWindow.isMaximized()) { return mainWindow.restore() }
	mainWindow.maximize();
});

ipcMain.handle("window/minimize", () => {
	mainWindow.minimize();
});

ipcMain.handle("window/close", () => {
	mainWindow.close();
});

ipcMain.handle("window/get-title", () => {
	return app.name;
});

ipcMain.handle("window/set-title", (e, args) => {
	const { prepend, append, title } = args;

	if (title) {
		mainWindow.setTitle(title);
	} else if (prepend) {
		mainWindow.setTitle(`${prepend}${mainWindow.getTitle()}`);
	} else if (append) {
		mainWindow.setTitle(`${mainWindow.getTitle()}${append}`);
	};

	return mainWindow.getTitle();
});