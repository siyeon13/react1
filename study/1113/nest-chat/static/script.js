const socket = io('http://localhost:3000/chat');
const roomSocket = io('http://localhost:3000/room');

const nickname = prompt('닉네임을 입력해주세요');
//socket.emit('nickname', nickname);

function sendMessage() {
  const message = $('#message').val();
  $('#chat').append(`<div>나 : ${message} </div>`);
  socket.emit('message', { message, nickname });
}

socket.on('connect', () => {
  console.log('connected');
});

socket.on('message', (message) => {
  $('#chat').append(`<div >${message}</div>`);
});

function createRoom() {
  const room = prompt('채팅방 이름을 입력해주세요');
  roomSocket.emit('createRoom', { room, nickname });
}

roomSocket.on('rooms', (data) => {
  console.log('생성한 채팅방: ', data);
  $('#rooms').empty();
  data.forEach((room) => {
    $('#rooms').append(
      `<li>${room} <button onclick="joinRoom('${room}')">참여</button></li>`,
    );
  });
});
