// const db = require('../db');

module.exports.getItems = function getItems() {
  return async function (req, res) {
    try {
      const menu = {
        mcd: [
          {
            id: 1,
            shop: "mcd",
            img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_201906_1212_MediumIcedCoffee_Glass_A1_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
            name: "Iced Coffee",
            price: "$1.49",
          },
          {
            id: 2,
            shop: "mcd",
            img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_201907_0005_BigMac_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
            name: "Big Mac",
            price: "$6.90",
          },
          {
            id: 3,
            shop: "mcd",
            img: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-fries-medium:product-header-desktop?wid=829&hei=455&dpr=off",
            name: "World Famous Fries",
            price: "$1.89",
          },
          {
            id: 4,
            shop: "mcd",
            img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0334_SausageBurrito_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
            name: "Sausage Burrito",
            price: "$1.19",
          },
          {
            id: 5,
            shop: "mcd",
            img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0483_4McNuggets_Stacked_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
            name: "Chicken McNuggets",
            price: "$4.49",
          },
          {
            id: 6,
            shop: "mcd",
            img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202012_0116_SpicyCrispyChicken_PotatoBun_832x472:product-header-desktop?product-header-desktop&wid=830&hei=458&dpr=off",
            name: "Spicy McCrispy",
            price: "$7",
          },
        ],
        kfc: [
          {
            id: 7,
            shop: "kfc",
            img: "https://www.kfc-ukraine.com/admin/files/medium/medium_4270.png",
            name: "Strawberry Lemonade",
            price: "$1.22",
          },
          {
            id: 8,
            shop: "kfc",
            img: "https://www.kfc-ukraine.com/admin/files/4131.jpg",
            name: "Bites Barbeque",
            price: "$2.86",
          },
          {
            id: 9,
            shop: "kfc",
            img: "https://www.kfc-ukraine.com/admin/files/medium/medium_3833.jpg",
            name: "Bucket Fries",
            price: "$2.31",
          },
          {
            id: 10,
            shop: "kfc",
            img: "https://www.kfc-ukraine.com/admin/files/4121.png",
            name: "Cheeseburger Junior",
            price: "$1.50",
          },
          {
            id: 11,
            shop: "kfc",
            img: "https://www.kfc-ukraine.com/admin/files/4184.png",
            name: "Chefburger",
            price: "$2.45",
          },
          {
            id: 12,
            shop: "kfc",
            img: "https://www.kfc-ukraine.com/admin/files/4192.png",
            name: "Zinger",
            price: "$2.50",
          },
        ],
      };

      // db.collection('items').find({},  (err, docs) => {
      //     if(err) {
      //         throw new Error('Cannot get items data')
      //     }

      //     res.status(200).send({ items: docs });
      // });
      res.status(200).send({ items: menu });
    } catch (e) {
      console.error(e);
      res.status(500).send();
    }
  };
};
