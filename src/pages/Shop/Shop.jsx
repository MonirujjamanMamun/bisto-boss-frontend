import { Helmet } from 'react-helmet-async';
import Parallax from '../../components/Share/Parallax/Parallax';
import shopImg from '../../assets/shop/banner2.jpg';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import ShopFood from '../../components/Shop/ShopFood/ShopFood';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Shop = () => {
  const categorys = ['salad', 'pizza', 'soup', 'dessert', 'drink'];
  const { category } = useParams();
  const initialIndex = categorys.indexOf(category);
  const [index, setIndex] = useState(initialIndex);

  const [menu] = useMenu();
  const pizza = menu.filter((data) => data.category === 'pizza');
  console.log('menu', pizza);
  const salad = menu.filter((data) => data.category === 'salad');
  const soup = menu.filter((data) => data.category === 'soup');
  const dessert = menu.filter((data) => data.category === 'dessert');
  const drink = menu.filter((data) => data.category === 'drinks');
  return (
    <div>
      <Helmet>
        <title>Bisto Boss | Shop</title>
      </Helmet>

      <Parallax img={shopImg} title={'OUR SHOP'} />

      <div className="container mx-auto my-11">
        <Tabs
          className="text-center"
          defaultIndex={index}
          onSelect={(index) => setIndex(index)}
        >
          <TabList className="border-0 mb-5 uppercase">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drink</Tab>
          </TabList>

          <TabPanel>
            <ShopFood food={salad} />
          </TabPanel>
          <TabPanel>
            <ShopFood food={pizza} />
          </TabPanel>
          <TabPanel>
            <ShopFood food={soup} />
          </TabPanel>
          <TabPanel>
            <ShopFood food={dessert} />
          </TabPanel>
          <TabPanel>
            <ShopFood food={drink} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
