import "./WhatsappPage.css";

const WhatsappPage = () => {
  return (
    <>
      <div className="ChatsApi">
        <div className="Profile">
          <img
            className="profilepic"
            src="https://m.media-amazon.com/images/M/MV5BOTVmYmE3NjgtYjIwMy00ZGQyLWE4ZTgtZGE4MTlkYjZhMmRmXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_.jpg"
          />
        </div>
        <div className="Sections">
          <input
            className="chatsearch"
            placeholder="Search or Start a new chat"
          />
          <div className="chatsleft">
            <img
              className="chatpic"
              src="https://m.media-amazon.com/images/M/MV5BOTVmYmE3NjgtYjIwMy00ZGQyLWE4ZTgtZGE4MTlkYjZhMmRmXkEyXkFqcGdeQXVyODEzOTQwNTY@._V1_.jpg"
            />
            <div>
              <h3>Personal Uses</h3>
              <p>You: summa iraaah</p>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="chats"></div>
    </>
  );
};

export default WhatsappPage;
