var AdmZip = require('adm-zip');

var zip = new AdmZip();

zip.addLocalFile('data/demo.txt');

zip.writeZip('zip.zip');



zip = new AdmZip('zip.zip');

zip.getEntries().forEach(e => {
    console.log(e.getData().toString('utf-8'));
});

zip.extractAllTo('output');