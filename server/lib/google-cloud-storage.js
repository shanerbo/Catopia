const { Storage } = require('@google-cloud/storage');
const path = require('path');
const GOOGLE_CLOUD_PROJECT_ID = 'fluffy-247100';
const GOOGLE_CLOUD_KEYFILE = '../server/fluffy-secret-file.json';
const storage = new Storage({
  projectId: GOOGLE_CLOUD_PROJECT_ID,
  keyFilename: GOOGLE_CLOUD_KEYFILE,
});
function getPublicUrl(bucketName, fileName) {
  return `https://storage.googleapis.com/${bucketName}/${fileName}`;
}
//https://storage.googleapis.com/user_prof/IMG.jpeg

exports.uploadImgToGCP = (req, res, next) => {
  if (!req.files) return next();
  if (!req.user) return res.status(401).json({ err: "unauthorized" });

  const bucketName = req.uploadBucket;
  const bucket = storage.bucket(bucketName);
  // Can optionally add a path to the gcsname below by concatenating it before the filename
  let uploadedCount = 0;
  function complete() {
    console.log("uploaded ", uploadedCount);
    if (uploadedCount == req.files.length) {
      console.log("upload complete");
      next();
    }
  }
  req.files.forEach((currentFile) => {
    const ext = path.extname(currentFile.originalname).toLowerCase();
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
      res.status(415).json({ error: "File type not accepted" });
    }
    const gcsname = Date.now() + path.basename(currentFile.originalname, ext) + ext;
    console.log("uploading " + gcsname + "...");
    const file = bucket.file(gcsname);

    const stream = file.createWriteStream({
      metadata: {
        contentType: currentFile.mimetype
      }
    });

    stream.on('error', (err) => {
      currentFile.cloudStorageError = err;
      next(err);
    });

    stream.on('finish', (result) => {
      currentFile.cloudStorageObject = gcsname;
      currentFile.cloudStoragePublicUrl = getPublicUrl(bucketName, gcsname);
      uploadedCount++;
      complete();
    });

    stream.end(currentFile.buffer);
  });
};
