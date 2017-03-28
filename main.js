'use strict'
const expressApp = require('./server/start')
const seed = require('./db/seed')
const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const exec = require('child_process').exec




require('electron-reload')(__dirname, {
  ignored: /node_modules|[\/\\]\.|resources/
})


//////////////////
// WINDOW
/////////////////

// Create a GLOBAL window variable
// so the garbage collector
// doesn't throw it away
let win = null

const createWindow = () => {
  // Create window and set properties
  win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  // Link it to index.html from Express Server
  win.loadURL('http://localhost:1337')
  win.focus()

  win.on('close', () => {

    // Remember, window is a global variable.
    // Set it to null when closed so garbage collection
    // can clean up the memory
    win = null
  })
}

///////////////
// APP
///////////////

// Create the window when the app is ready
app.on('ready', () => {
  expressApp()
  seed()
  // exec('node util/sync', (error, stdout, stderr) => {
  //   console.log(stdout, stderr)
  //   if (error) console.error(error)
  // })
  // childProcess.exec('node ./util/sync', {maxBuffer: 1024 * 10000000}, (error, something) => {
  //   if (error) console.error(error)
  // })
  createWindow()
})

// Quit the app when all windows are closed
// Except on macOS, where it will remain in the Dock
app.on('windows-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// On macOS, if no windows are open and users clicks icon from Dock
// start a new instance of the application
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
