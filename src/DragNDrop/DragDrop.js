import "./DragDrop.css";

const DragDrop = () => {
  const fill = document.querySelector(".fill");
  const empties = document.querySelectorAll(".empty");
  function dragStart(e) {
    console.log(e);
    e.classList.add("hold");
  }

  function dragEnd(e) {
    console.log(e);
    e.target.classList.add("fill");
  }

  function dragEnter(e) {
    console.log(e);
    e.preventDefault();
    // e.target.classList.add("hovered");
  }

  function dragLeave(e) {
    console.log(e);
    e.target.className = "empty";
  }

  function dragDrop(e) {
    console.log(e);
    console.log("dropped");
    // e.target.className = "empty";
    empties[1].append(fill);
  }

  return (
    <>
      <div className="container">
        <div
          className="empty"
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => dragEnter(e)}
          onDragLeave={(e) => dragLeave(e)}
          onDrop={(e) => dragDrop(e)}
        >
          <div
            className="fill"
            draggable="true"
            onDragStart={(e) => dragStart(e)}
            onDragEnd={(e) => dragEnd(e)}
          ></div>
        </div>

        <div
          className="empty"
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => dragEnter(e)}
          onDragLeave={(e) => dragLeave(e)}
          onDrop={(e) => dragDrop(e)}
        ></div>
      </div>
    </>
  );
};

export default DragDrop;
