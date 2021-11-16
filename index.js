const express = require('express')
const path = require('path')
const app = express()


app.use(express.static(path.resolve(__dirname, 'client')))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})


app.get('/info', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'info.html'))
})


app.get('/lab1', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit1', 'lab1.html'))
})


app.get('/lab2', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit2', 'lab2.html'))
})


app.get('/lab3', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit3', 'lab3.html'))
})


app.get('/lab4', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit4', 'lab4.html'))
})


app.get('/lab5', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit5', 'lab5.html'))
})


app.get('/lab6', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit6', 'lab6.html'))
})


app.get('/lab7', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit7', 'lab7.html'))
})


app.get('/lab8', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit8', 'lab8.html'))
})


app.get('/lab9', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit9', 'lab9.html'))
})


app.get('/opisP1', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit1', 'opisPred1.html'))
})


app.get('/zagP1', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit1', 'zagPost1.html'))
})


app.get('/postZ1', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit1', 'postZad1.html'))
})


app.get('/codeF1', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit1', 'codeForm1.html'))
})


app.get('/codeI1', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit1', 'codeImg1.html'))
})


app.get('/report1', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit1', 'report1.html'))
})


app.get('/photos', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit1', 'photo.html'))
})


app.get('/report2', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit2', 'report2.html'))
})


app.get('/postZ2', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit2', 'postZad2.html'))
})


app.get('/list2', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit2', 'list.html'))
})


app.get('/ident2', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit2', 'ident2.html'))
})


app.get('/otstupi2', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit2', 'otstupi2.html'))
})


app.get('/floatEl2', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit2', 'floatElements2.html'))
})


app.get('/select2', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit2', 'selectors2.html'))
})


app.get('/othSelect2', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit2', 'othersSelects2.html'))
})


app.get('/groupS2', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit2', 'groupSelects2.html'))
})


app.get('/postZ3', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit3', 'postZad3.html'))
})


app.get('/layOV', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit3', 'layoutV.html'))
})


app.get('/blocks', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit3', 'blocks.html'))
})


app.get('/table', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit3', 'tables.html'))
})


app.get('/report3', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit3', 'report3.html'))
})


app.get('/report5', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit5', 'report5.html'))
})


app.get('/postZ5', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit5', 'postZad5.html'))
})


app.get('/dynElem', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'zvit5', 'dynElements.html'))
})

















app.listen(5000, () => console.log('Server has been started...'))
