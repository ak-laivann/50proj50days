import "./DragDrop.css";

const DragDrop = () => {
  const empties = document.querySelectorAll(".empty");

  for (const empty of empties) {
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragend", dragEnd);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
  }
  function dragStart() {
    console.log("started");
  }

  function dragEnd() {
    console.log("ended");
  }

  function dragOver(e) {
    e.preventDefault();
    console.log("over");
  }

  function dragEnter() {
    console.log("entered");
  }

  function dragLeave() {
    console.log("left");
  }

  function drop() {
    console.log("dropped");
  }

  return (
    <>
      <div className="container">
        <div className="empty">
          <div className="fill" draggable="true"></div>
        </div>

        <div className="empty"></div>
      </div>
    </>
  );
};

export default DragDrop;
