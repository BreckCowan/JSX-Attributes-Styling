import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <img
        className="pics"
        src="https://th.bing.com/th/id/OIP.M5cpj0zQ5syS8ZP2tqVVLwHaEx?pid=ImgDet&rs=1"
        alt="food"
      />
      <li>Jamon</li>
      <img
        className="pics"
        src="https://th.bing.com/th/id/R.9d3a95469cc4f7a4c9049ec27f8a1cc8?rik=bDrI%2fvXB%2flgx2Q&riu=http%3a%2f%2fwww.marnaula.com%2fWebRoot%2fStoreES3%2fShops%2f78706999%2f5E31%2f9E61%2f8E31%2f321F%2f95CB%2f0A0C%2f6D12%2fEC89%2fjamon_iberico1_3.jpg&ehk=F40I9oap703zVlBGQKTOenMnM3O9%2bXYTivj%2bLZNVrMk%3d&risl=&pid=ImgRaw&r=0"
        alt="food"
      />
      <li>Noodles</li>
      <img
        className="pics"
        src="https://drivemehungry.com/wp-content/uploads/2019/03/thai-peanut-noodles-7.jpg"
        alt="food"
      />
    </ul>
  </div>,
  document.getElementById("root")
);
