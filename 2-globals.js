// GLOBALS  - NO WINDOW !!!!

// __dirname - path to current directory
//__filename - file name
// require - function to use modules (CommonJS)
// module - object with information about current module (file)
// process - info about env where the program us being executed

console.log(__dirname)
setInterval(() => {
    console.log('Hello world')
}, 1000)