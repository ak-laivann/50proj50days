import "./CheckBox.css";

function CheckBox() {
  document.title = "CheckBox Animation";

  const toggles = document.querySelectorAll(".toggle");

  const good = document.getElementById("good");

  const cheap = document.getElementById("cheap");

  const fast = document.getElementById("fast");

  toggles.forEach((toggle) =>
    toggle.addEventListener("change", (e) => theFunction(e.target))
  );

  function theFunction(theClickedOne) {
    if (good.checked && cheap.checked && fast.checked) {
      if ((good.checked = theClickedOne)) {
        fast.checked = false;
      }
      if ((cheap.checked = theClickedOne)) {
        good.checked = false;
      }
      if ((fast.checked = theClickedOne)) {
        cheap.checked = false;
      }
    }
  }
  return (
    <div className="total">
      <h3>Select what you need</h3>
      <div className="check">
        <div className="container">
          <input type="checkbox" id="good" className="toggle" />
          <label for="good" className="label">
            <div className="ball"></div>
          </label>
          <span>&nbsp;Good</span>
        </div>

        <div className="container">
          <input type="checkbox" id="cheap" className="toggle" />
          <label for="cheap" className="label">
            <div className="ball"></div>
          </label>
          <span>Cheap</span>
        </div>

        <div className="container">
          <input type="checkbox" id="fast" className="toggle" />
          <label for="fast" className="label">
            <div className="ball"></div>
          </label>
          <span>&nbsp;Fast</span>
        </div>
      </div>
    </div>
  );
}

export default CheckBox;
