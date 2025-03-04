const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 350,
    height: 350,
//frame: false
	resizable: false,
		transparent: true
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
	
  createWindow()
	
})




