const express = require('express');
var cors = require('cors');

var app = express()

app.use(express.json());
app.use(cors());
app.use(express.static('public'));



app.listen(3001, function() {
  console.log("start! express server on port 3000")
})

const lists = [
  {
    id : 1,
    imageSrc : "/16.png",
    title : "16주차 주간일보",
    author : "관리자",
    createdDate : new Date().toString(),
    comments : [
      { 
        author : "김만옥",
        comment : "반가워요",
        createdDate : "2020-01-04"
      }
    ]
  },
  {
    id : 2,
    imageSrc : "/15.png",
    title : "15주차 주간일보",
    author : "관리자",
    createdDate : new Date().toString(),
    comments : [
    ]
  },
]


const shortBoardList = [
  {
      nickname: "용가리",
      author : "김만옥",
      comment : "반가워요",
      createdDate : "2020-01-04"
  },
]

app.get('/shortcomment', (req, res) => {
  return res.send( { data : shortBoardList} )
})

app.post('/shortcomment', (req, res) => {
  shortBoardList.push(req.body);
  return res.send({ success : true});
})

app.get('/posts', (req, res) => {
  return res.send( { data : lists} )
})

app.post('/posts/comments/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  console.log(data);

  for (let i = 0 ; i < lists.length ; i ++) {
    if (lists[i].id == id) {
      lists[i].comments.push(data);
    }
  }
  console.dir(lists, {depth : 5});
  return res.send( { data : lists} )
})


