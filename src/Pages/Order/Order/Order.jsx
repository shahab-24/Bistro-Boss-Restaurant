import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Shared/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet";
import useMenu from "../../../hooks/useMenu";
import FoodCard from "../../../Components/FoodCard";
import OrderTab from "../../../Components/OrderTab";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Order</title>
      </Helmet>

      <Cover bgImage={orderImg} title={"Our shop"}></Cover>

      {/* food category tab */}
      <section className="my-10">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salads}></OrderTab>
          </TabPanel>
          <TabPanel>ddd</TabPanel>
          <TabPanel>ddd</TabPanel>
          <TabPanel>ddd</TabPanel>
          <TabPanel>ddd</TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default Order;
