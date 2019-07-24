const { Storage } = require('@google-cloud/storage');
const path = require('path');
const GOOGLE_CLOUD_PROJECT_ID = 'fluffy-247100';
const GOOGLE_CLOUD_KEYFILE = '../server/fluffy-247100-secret-file.json';
const storage = new Storage({
  projectId: GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: GOOGLE_CLOUD_KEYFILE,
});
function getPublicUrl(bucketName, fileName) {
  return `https://storage.cloud.google.com/${bucketName}/${fileName}`;
}
//https://storage.cloud.google.com/user_prof/IMG.jpeg

exports.uploadImgToGCP = (localFilePath, bucketName) => {
  const bucket = storage.bucket(bucketName);
  const fileName = path.basename(localFilePath);
  return bucket.upload(localFilePath)
    .then((result) => {
      console.log(result);
      getPublicUrl(bucketName, fileName);
    });
};
