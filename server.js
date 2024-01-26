const express = require("express");
const path = require("path");
const app = express();

const { MongoClient, ObjectId } = require("mongodb");
const { getDB, setDB } = require("./db");
const { API_URL } = require("./client/src/components/config/contansts");
require("dotenv").config();


const { S3Client } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");
const s3 = new S3Client({
  region: "ap-northeast-2",
  credentials: {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
  },
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "popol5",
    key: function (요청, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, Date.now().toString() + ext);
    },
  }),
});




const naverRouter = require("./routes/naverlogin");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const jwtRouter = require("./routes/jwtRouter");
const roomRouter = require("./routes/chat_room");


app.use(express.json());

const cors = require("cors");
const { log } = require('console');
const { write } = require("fs");
app.use(cors());

const url = process.env.DB_URL;
const port = process.env.PORT
new MongoClient(url)
  .connect({ useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("popol5");
    setDB(db);
    console.log("DB연결성공");
    app.listen(process.env.PORT, function () {
      console.log(`연결포트 : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/naver", naverRouter);
app.use("/jwt", jwtRouter);
app.use("/prod", productRouter);
app.use("/user", userRouter);
app.use("/chat", roomRouter);

// app.post('/product/new', upload.single('image'), (요청, 응답) => {
//   console.log(요청.file)
// })

app.use(express.static(path.join(__dirname, "client/build")));

// app.get('/', async (req,res) => {
//   let result = await db.collection("product").find().toArray()
//   console.log(result);
//   res.status(201).send(result)
// })

// app.get('/header', async (req,res) => {
//   let result = await db.collection("product").find().toArray()
//   console.log(result);
//   res.status(201).send(result)
// })

app.get("/", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/client/build/index.html"));
});

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   console.log(req.body);

//   const Findemail = await db.collection("user").findOne({
//     email: req.body.email
//   });
//   if(Findemail){
//     if(req.body.password === Findemail.password){
//       res.status(201).send("성공");
//     } else {
//       res.status(400).send("비번 틀림");
//     }
//   }
//   }
// );

// app.post('/register', async (req,res) => {
//   let result = req.body  // sign up 의 데이테를 불러오는 값
//   await db.collection("user").insertOne({
//     real_name: result.name,
//     id: result.id,
//     email: result.email,
//     password: result.password,
//     address: result.address,
//     phone_number: result.phone_number,
//     role: "user",
//     user_name: "user",
//     about: " ",
//     create_at: new Date()
//   })

//   res.status(201).send(
//     "전송 성공"
//     )
//   }
// );

app.post("/product", upload.array("img", 3), async (req, res) => {
  const tag = JSON.parse(req.body.tag);
  const category = JSON.parse(req.body.category);
  const db = getDB();

  console.log(req.body);
  console.log("img", req.files);

  const images = req.files.map((file) => file.location);
  await db.collection("product").insertOne({
    seller: req.body.seller,
    buyer: "",
    category: category,
    title: req.body.title,
    comment: req.body.content,
    product_status: req.body.status,
    refund: req.body.change,
    price: req.body.price,
    location: req.body.selectedAddress,
    tags: tag,
    count: req.body.count,
    images: images,
    status: "판매중",
    created_at: new Date(),
    updated_at: "",
    postprice: req.body.postprice,
  });
  res.status(201).send("상품등록성공");
});

app.post("/productuser", async (req, res) => {
  if (req.body.cookie) {
    const db = getDB();
    let result = await db
      .collection("user")
      .findOne({ _id: new ObjectId(req.body.cookie) });
    res.status(201).send(result.address);
  } else {
    res.status(404).send("");
  }
});

app.get("/search/:search", async (req, res) => {
  const db = getDB();
  let 검색조건 = [
    {
      $search: {
        index: "title_index",
        text: { query: req.params.search, path: ["title", "tags"] },
      },
    },
  ];
  let result = await db.collection("product").aggregate(검색조건).toArray();
  res.status(201).send(result);
});

app.get("/detailsearch/:category", async (req, res) => {
  const db = getDB();
  let 검색조건 = [
    {
      $search: {
        index: "category_index",
        text: { query: req.params.category, path: "category" },
      },
    },
  ];
  let result = await db.collection("product").aggregate(검색조건).toArray();
  res.status(201).send(result);
});

app.get("/address/:cookie", async (req, res) => {
  const db = getDB();

  let result = await db.collection("user").findOne({
    _id: new ObjectId(req.params.cookie),
  });
  console.log(result);
  res.status(201).send(result.address);
});

// app.get("/mypage", async (요청, 응답) => {
//   const db = getDB();
//   console.log(요청.query);
//   let list = await db
//     .collection("user")
//     .findOne({ _id: new ObjectId(요청.query.id) });
//   console.log("test", list);
//   응답.send(list);
// });

app.post('/upload', upload.single('profileIMG'), (req, res) => {
  const file = req.file;

  // 업로드된 파일의 경로를 클라이언트에게 전송
  const fileUrl = `https://popol5.s3.ap-northeast-2.amazonaws.com/${file.filename}`;
  res.json({ fileUrl });
});


// 등록된 상품을 받아옴
app.get("/product/registered", async (요청, 응답) => {
  const db = getDB();
  console.log(요청.query);
  let result = await db
    .collection("product")
    .find({
      seller: 요청.query.id,
      status: "판매중",
    })
    .toArray();
  console.log(result);
  응답.send(result);
});

// 구매한 상품의 목록을 받아옴
app.get("/product/buylist", async (요청, 응답) => {
  const db = getDB();
  console.log(요청.query);
  let result = await db
    .collection("product")
    .find({
      buyer: 요청.query.id,
      status: "판매완료",
    })
    .toArray();
  console.log(result);
  응답.send(result);
});

// 자신이 판매했던 목록을 나열
app.get("/product/soldlist", async (요청, 응답) => {
  const db = getDB();
  console.log(요청.query);
  let result = await db
    .collection("product")
    .find({
      seller: 요청.query.id,
      status: "판매완료",
    })
    .toArray();
  console.log(result);
  응답.send(result);
});

app.get("/review/mypagehoogi", async (요청, 응답) => {
  const db = getDB();
  console.log(요청.query);
  let result = await db
    .collection("review")
    .find({
      resiver: 요청.query.id,
    })
    .toArray();
  console.log(result);
  응답.send(result);
});

app.get("/review/mypagehoogi2", async (요청, 응답) => {
  const db = getDB();
  console.log(요청.query);
  let result = await db
    .collection("review")
    .find({
      writer: 요청.query.id,
    })
    .toArray();
  console.log(result);
  응답.send(result);
});


// 찜해둔 물품목록
app.get("/like/picklist", async (요청, 응답) => {
  const db = getDB();
  const prodData = [];
  console.log(요청.query);
  let result = await db
    .collection("like")
    .find({ liker: 요청.query.id })
    .toArray();
  console.log("like", result);

  for (let i = 0; i < result.length; i++) {
    await db
      .collection("product")
      .findOne({ _id: new ObjectId(result[i].product_id) })
      .then((res) => {
        console.log("res", res);
        prodData.push(res);
      })
      .catch((err) => {
        console.log(err);
        res.static(501).end();
      });
  }
  console.log("prodData:", prodData);
  응답.send(prodData);
})


// ---------실시간채팅------------- //
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const { callbackPromise } = require("nodemailer/lib/shared");
// const socketio = require('socket.io');
// const io = socketio(server)
app.use(cors({ origin: '*' }))
const io = new Server(server, {cors: {origin: '*'}});

app.get('/chat', (req, res) => res.sendFile(`${__dirname}/chat_room.js`));
const roomInfo = [];
// Socket.io 설정
io.on('connection', (socket) => {
  const { url } = socket.request;
  console.log(`${url} 에서 연결됨`);
  
  // 방 입장 이벤트 핸들링
  socket.on('join', (room, callback) => {
    console.log('방 입장:', room);
    // 해당 방에 클라이언트 소켓을 조인
    roomInfo[socket.id] = room;
    console.log(roomInfo[socket.id]);
    socket.join(room);
    console.log("join 실행");
    // callback()
  });

  // 클라이언트로부터의 메시지 이벤트 핸들링
  socket.on('sendMessage', async (data, callback) => {
    const { writer, message } = data;
    // console.log("data: ", data);
    // console.log("writer: ", writer);
    console.log('메시지 받음:', message);
    const room = roomInfo[socket.id];
    // console.log("room: ", room);

    // 같은 방에 있는 모든 클라이언트에게 메시지 전송
    io.to(room).emit('message', { writer, message });
    // callback()
  });

  // 연결 해제 이벤트 핸들링
  socket.on('disconnect', () => {
    console.log('사용자가 연결 해제됨');

  });
});

server.listen(5000, () => console.log("채팅서버 연결"));



// ------------------------------- //


// 채팅을 위한 친구들-----------------



app.get('/room_list', async(req, res) => {
  const db = getDB();
  // console.log("req.query: ", req.query);
  let result = await db.collection('chattingroom').find({
    user: req.query.id
  }).toArray()
  // console.log("roomList의 result: ", result);
  res.status(201).send(result)
})

app.get('/chat_room', async(req, res) => {
  const db = getDB();
  // console.log("req.query: ", req.query);
  const user_ID = req.query.id;
  // console.log("user_ID: ", user_ID);
  try {
  let result = await db.collection('chattingroom').find({
    user: user_ID
  }).toArray()
  res.status(201).end();
}
catch(error){
  console.log("채팅 불러오기 실패다 이자식아");
  res.status(500).send("대체 어떻게 조회한거야?!")
}
})

app.get('/chat_log', async (req, res) => {
  // console.log("로그에서 req.query: ", req.query);
  const db = getDB();
  try {
  await db.collection('chatting').find({room_id : req.query.room_id}).toArray()
  .then((result)=>{
    // console.log("result: ", result);
    return res.status(201).send(result);
  })
  
}
catch(error){
  console.log("채팅 불러오기 실패다 이자식아");
  res.status(500).send("대체 어떻게 조회한거야?!")
}
})

// ---------------------------------


app.get("*", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/client/build/index.html"));
});
