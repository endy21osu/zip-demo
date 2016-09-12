var AdmZip = require('adm-zip'),
    azure = require('azure-storage');


// create a zip
var zip = new AdmZip();

zip.addLocalFile('data/demo.txt');

zip.writeZip('zip.zip');


// read a zip
zip = new AdmZip('zip.zip');

zip.getEntries().forEach(e => {
    console.log(e.getData().toString('utf-8'));
});

zip.extractAllTo('output');


// upload to azure
// these are set in the environment and read by 'azure.createBlobService()'

// AZURE_STORAGE_ACCOUNT - account name
// AZURE_STORAGE_ACCESS_KEY - access key 1
// AZURE_STORAGE_CONNECTION_STRING - endpoint

var blobSvc = azure.createBlobService();

blobSvc.createBlockBlobFromLocalFile('zips', 'myblob.zip', 'zip.zip', function(error, result, response){
  console.log('blob callback');
  if(error){
    console.log(error);
  } 
  console.log(result);
  console.log();
  console.log(response); 
});

//DefaultEndpointsProtocol=https;AccountName=<storage account name>;AccountKey=<storage account key>