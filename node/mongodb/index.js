const { MongoClient, ObjectId } = require("mongodb");
let mongoDB = null;

(async function () {
  //인증 정보를 넣어야하는데 몽고디비 설치과정 중 오류가 생겨서 아이디와 패스워드가 먹히지않아 삭제하고 실행
  // const urlMongoDB = `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/?maxPoolSize=${process.env.MONGODB_LIMIT}`;
  const urlMongoDB = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/?maxPoolSize=${process.env.MONGODB_LIMIT}`;
  const client = new MongoClient(urlMongoDB, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log("MongoDB에 정상적으로 접속되었습니다.");
    mongoDB = client.db(process.env.MONGODB_DB);
  } catch (err) {
    console.log(err);
  }
})();

const find = async (collectionName, option = {}) => {
  const r = await mongoDB.collection(collectionName).find(option).toArray();
  return r;
};

const findById = async (collectionName, _id) => {
  const r = await mongoDB
    .collection(collectionName)
    .findOne({ _id: ObjectId(_id) });
  return r;
};

const insertOne = async (collectionName, data) => {
  const r = await mongoDB.collection(collectionName).insertOne(data);
  return r;
};

const insertMany = async (collectionName, data) => {
  const r = await mongoDB.collection(collectionName).insertMany(data);
  return r;
};

module.exports = {
  find,
  findById,
  insertOne,
  insertMany,
};