import React from "react";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";

const App = () => {
  const response = [
    {
      itemName: "Nirma1",
      itemDate: "20",
      itemMonth: "June",
      itemYear: "2019"
    },
    {
      itemName: "Nirma2",
      itemDate: "21",
      itemMonth: "July",
      itemYear: "2012"
    },
    {
      itemName: "Nirma3",
      itemDate: "22",
      itemMonth: "August",
      itemYear: "2020"
    }
  ];

  // const itemTwoName = "Surf-Excel";

  return (
    <div>

      <Card>

        <Item name={response[0].itemName}>
          Hello jiii Mai hoon aapki first item
        </Item>
        <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

        {/* by this method we can also pass props  */}
        <Item name={response[1].itemName}></Item>
        <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

        <Item name={response[2].itemName}></Item>
        <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate>

        <div>App</div>

      </Card>

    </div>
  )
};

export default App;
