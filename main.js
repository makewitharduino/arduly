// const {app, BrowserWindow,autoUpdater} = require('electron')
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

// const feedUrl = 'https://w836c69fs2.execute-api.us-east-1.amazonaws.com/prod/v1?version=' + app.getVersion()


// メインウィンドウ
// let mainWindow

function createWindow () {
  // メインウィンドウを作成します
  mainWindow = new BrowserWindow({width: 800, height: 600})

  // メインウィンドウに表示するURLを指定します
  // （今回はmain.jsと同じディレクトリのindex.html）
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, '/public/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // デベロッパーツールの起動
  mainWindow.webContents.openDevTools()

  // メインウィンドウが閉じられたときの処理
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

//  初期化が完了した時の処理
app.on('ready', function(){
  // autoUpdater.on('ready', function () {
  // })
  // autoUpdater.on('updateRequired', function () {
  //     app.quit()
  // })
  // autoUpdater.on('updateAvailable', function () {
  //     mainWindow.webContents.send('update-available')
  // })
  // autoUpdater.setFeedURL(feedUrl)
  // autoUpdater.checkForUpdates()
  createWindow();
});

// 全てのウィンドウが閉じたときの処理
app.on('window-all-closed', function () {
  // macOSのとき以外はアプリケーションを終了させます
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// アプリケーションがアクティブになった時の処理(Macだと、Dockがクリックされた時）
app.on('activate', function () {
  /// メインウィンドウが消えている場合は再度メインウィンドウを作成する
  if (mainWindow === null) {
    createWindow();
  }
});

