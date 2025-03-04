const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 350,
    height: 350,
//frame: false
	resizable: false,
		backgroundMaterial: "acrylic",
	icon: __dirname + 'logo.png',	
  })

  win.loadFile('index.html')
	win.removeMenu()
}

app.whenReady().then(() => {
	
  createWindow()
	
})




