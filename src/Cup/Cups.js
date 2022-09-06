import "./Cups.css";

const Cups = () => {
  const SmallCups = document.querySelectorAll(".cups-small");

  const percentage = document.getElementById("percentage");

  SmallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => handleClick(idx));
  });

  updateBigCup();

  function handleClick(idx) {
    SmallCups.forEach((cup, idx2) => {
      if (idx2 <= idx) {
        cup.classList.add("full");
      } else {
        cup.classList.remove("full");
      }
    });
    updateBigCup();
  }

  function updateBigCup() {
    const FullCups = document.querySelectorAll(".cup.cups-small.full").length;
    const TotalCups = SmallCups.length;

    if (FullCups === 0) {
      percentage.style.height = `${0}px`;
    } else {
      percentage.style.height = `${(FullCups / TotalCups) * 330}px`;
    }
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="cup">
          <h1>Goal: 2L</h1>
          <div className="remained">
            <div className="percentage" id="percentage">
              <p></p>
            </div>
          </div>
        </div>

        <p>Select the amount of water you drank</p>

        <div className="cups">
          <div className="cup cups-small">250ml</div>
          <div className="cup cups-small">250ml</div>
          <div className="cup cups-small">250ml</div>
          <div className="cup cups-small">250ml</div>
          <div className="cup cups-small">250ml</div>
          <div className="cup cups-small">250ml</div>
          <div className="cup cups-small">250ml</div>
          <div className="cup cups-small">250ml</div>
        </div>
      </div>
    </div>
  );
};

export default Cups;
