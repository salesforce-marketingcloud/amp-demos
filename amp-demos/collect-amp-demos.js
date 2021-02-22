const {readdirSync, readFileSync} = require('fs');
const {resolve} = require('path');

module.exports = () => {
    const dirs = readdirSync(resolve(__dirname), { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

    const ampDemos = {};
    for(let dir of dirs) {
        ampDemos[dir] = JSON.parse(readFileSync(resolve(__dirname, dir, 'meta.json')));
        if(!ampDemos[dir].title) {
            ampDemos[dir].title = dir;
        }
        if(!ampDemos[dir].componentsUsed) {
            ampDemos[dir].componentsUsed = [];
        }
        if(!ampDemos[dir].additionalFiles) {
          ampDemos[dir].additionalFiles = [];
        }
        if(!ampDemos[dir].thumnail) {
          ampDemos[dir].thumnail = {    
            webp:"",
            jpg:"",
            alt:""
          };
        }
        try {
            let html = readFileSync(resolve(__dirname, dir, 'demo.html')).toString();
            ampDemos[dir].html = html;
        } catch(e) {
            ampDemos[dir].html = '';
        }
    }

    // console.log({ampDemos});

    return ampDemos;
};