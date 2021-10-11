import AWS from "aws-sdk";

const awss3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS,
  secretAccessKey: process.env.AWS_SECRET,
});

const base64uploadImage = async (buffer, mimetype) => {
  var upload = process.env.AWS_FOLDER + "/" + Date.now();
  var params = {
    Bucket: process.env.AWS_BUCKET,
    Key: upload,
    Body: buffer,
    //ACL: 'public-read',
    ContentEncoding: "base64",
    ContentType: mimetype,
  };
  try {
    let data = await awss3.upload(params).promise();
    //return { location: data.Location, path: data.key }
    return { status: true, message: "", data: data.Location };
  } catch (e) {
    return { status: false, message: "error al cargar " + e, data: "" };
  }
};

const decodeBase64Image = (dataString) => {
  var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};

  if (!matches) {
    return { data: new Buffer.from(dataString, "base64") };
  }

  response.type = matches[1];
  response.data = new Buffer.from(matches[2], "base64");

  return response;
};
export const uploadFile = async (file) => {
  var imageBuffer = decodeBase64Image(file);
  let uploaded = await base64uploadImage(imageBuffer.data, imageBuffer.type);
  return uploaded;
};

export default uploadFile;
