import { useState } from "react";
import Histogram from "./Histogram";
import UserData from "./Data";
// import ConfusionMatrix from 'ml-confusion-matrix';
const {localStorage} = window;

// var userData = 10;

// UserData = JSON.parse(localStorage.getItem('myData'));
// console.log("Data stored in local storage is ", userData);


function Graphs() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.model_target),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.model_output),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });



  

  return (
    <div>
      <Histogram chartData={userData} />
    </div>
  )
}

export default Graphs