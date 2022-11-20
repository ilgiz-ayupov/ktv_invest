import { Tabs } from "antd";

import TabButton from "./TabButton";
import FirstTabItem from "./FirstTabItem";

export default function TabsMenu() {
  return (
    <Tabs
      id="section-top__tabs"
      defaultActiveKey="1"
      items={[
        {
          label: <TabButton>Жилая недвижимость</TabButton>,
          key: "1",
          children: <FirstTabItem />,
        },
        {
          label: <TabButton>Коммерческая недвижимость</TabButton>,
          key: "2",
          children: "Content tab 2",
        },
        {
          label: <TabButton>Земельные участки</TabButton>,
          key: "3",
          children: "Content tab 3",
        },
      ]}
    ></Tabs>
  );
}
