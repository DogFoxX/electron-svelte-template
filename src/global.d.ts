declare const theme: {
	/**
		* Returns the currently saved themeMode as string.
		* @returns promise dark, light or system
   */
	get(): string;

	/**
		* Sets the themeMode.
		* @param themeMode  dark, light or system
   */
	set(themeMode: string): String;
};

declare const mainWindow: {
	/**
		* Returns the current state of Electron BrowserWindow
		* @returns promise boolean - isMaximized();
	*/
	getState(): async;

	/**
		* Maximize or Retore Electron BrowserWindow
	*/
	toggleMax(): any;

	/**
		* Minimized Electron BrowserWindow
	*/
	minimize(): any;

	/**
		* Close Electron BrowserWindow
	*/
	close(): any;

	/**
		* Get Electron BrowserWindow Title
		* @returns promise app.name
	*/
	getTitle(): async;

	/**
		* Set Electron BrowserWindow Title
		* @param prepend prepend the current Electron BrowserWindow Title
		* @param append append the current Electron BrowserWindow Title
		* @param title overwrite the current Electron BrowserWindow Title
		* @returns promise containing BrowserWindow Title
	*/
	setTitle({prepend, append, title}: {prepend?: string, append?: string, title?: string}): async;
};