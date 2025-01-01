import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../Shared/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Helmet } from "react-helmet";
import useMenu from "../../../hooks/useMenu";

import OrderTab from "../../../Components/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
	const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks', 'popular']
	const {category} = useParams()
	const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
 
  console.log(category)

  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const drink = menu.filter((item) => item.category === "drinks");
  const popular = menu.filter((item) => item.category === "popular");

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
            <Tab>Popular</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel><OrderTab items={pizza}></OrderTab></TabPanel>
          <TabPanel><OrderTab items={soup}></OrderTab></TabPanel>
          <TabPanel><OrderTab items={dessert}></OrderTab></TabPanel>
          <TabPanel><OrderTab items={drink}></OrderTab></TabPanel>
          <TabPanel><OrderTab items={popular}></OrderTab></TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default Order;
