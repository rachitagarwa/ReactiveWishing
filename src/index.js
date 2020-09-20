var React = require("react");
var ReactDOM = require("react-dom");

const name = "Rachit";
const img = "https://picsum.photos/200";
const date = new Date();
const currentTime = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
      {name}
    </h1>
    <div>
      <p>
        <img src={img} alt="road" />
      </p>
      <img
        className="fig-img"
        src="https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fwww.loveandoliveoil.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fsoy-sauce-noodlesH2.jpg&imgrefurl=https%3A%2F%2Fwww.loveandoliveoil.com%2F2015%2F03%2Fsoy-sauce-noodles.html&tbnid=gMibNSfzGXokdM&vet=12ahUKEwjxkriIydLrAhVXAHIKHXIID3MQMygBegUIARD2AQ..i&docid=TM9HvxowRNtUmM&w=1200&h=800&q=noodles&hl=en&authuser=0&ved=2ahUKEwjxkriIydLrAhVXAHIKHXIID3MQMygBegUIARD2AQ"
        alt="noodl"
      />
      <img
        className="fig-img"
        src="https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fstatic.toiimg.com%2Fphoto%2F52467119.cms&imgrefurl=https%3A%2F%2Frecipes.timesofindia.com%2Frecipes%2Fegg-noodles%2Frs52467119.cms&tbnid=JQpalF68MKgQiM&vet=12ahUKEwjxkriIydLrAhVXAHIKHXIID3MQMygDegUIARD8AQ..i&docid=UrRjZCW-YzV2WM&w=1200&h=1200&q=noodles&hl=en&authuser=0&ved=2ahUKEwjxkriIydLrAhVXAHIKHXIID3MQMygDegUIARD8AQ"
        alt="nooodles"
      />
      <img
        className="fig-img"
        src="https://www.google.co.in/imgres?imgurl=https%3A%2F%2Fwww.indianhealthyrecipes.com%2Fwp-content%2Fuploads%2F2016%2F05%2Fveg-noodles-recipe-1.jpg&imgrefurl=https%3A%2F%2Fwww.indianhealthyrecipes.com%2Fveg-noodles-recipe%2F&tbnid=PGMb-aztZXrvDM&vet=12ahUKEwjxkriIydLrAhVXAHIKHXIID3MQMygHegUIARCGAg..i&docid=vWCET5tqXZr-3M&w=1200&h=800&q=noodles&hl=en&authuser=0&ved=2ahUKEwjxkriIydLrAhVXAHIKHXIID3MQMygHegUIARCGAg"
        alt="noodlss"
      />
    </div>
  </div>,
  document.getElementById("root")
);
