import { v4 as Id } from 'uuid';

const products = [
    {
        id: Id(),
        name: 'Hermes Birkin',
        price: 16.0,
        description:
            'HERMÈS handbag "BIRKIN 35". Coll. 2021. togo leather in Rouge Sellier (dark brown) with gold-plated hardware. Classic model with flap closure and double handles',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUVWujrGnJxERltrzxvP3pSdZwNMSRV8QEQ&s'
    },
    {
        id: Id(),
        name: 'Hermes Kelly',
        price: 18.0,
        description:
            'HERMÈS bag " KELLY II SELLIER 32", coll.: 2022. Epsom leather in the colour noir (black) with gold-plated hardware, strap fastening on the front and a handle. Interior with three compartments, one with zip.',
        img: 'https://assets.hermes.com/is/image/hermesedito/P_11_KELLY_PRODUIT_5'
    },
    {
        id: Id(),
        name: 'Hermes Constance',
        price: 13.0,
        description:
            'Hermès "Constance 18" Crossbody Bag is an exquisite piece of craftsmanship. Made from epsom leather and featuring silver hardware, it is both stylish and practical. It comes with the original Hermès branded box and dust bag to keep this timeless piece safe. A perfect accessory for any occasion, this bag is sure to make a statement.',
        img: 'https://www.ifchic.com/p/5/6/2/0/9/7/562097-thickbox.webp?w=1920'
    }
    // {
    //     id: Id(),
    //     name: 'Hermes Birkin',
    //     price: 16.000,
    //     description: 'HERMÈS handbag "BIRKIN 35". Coll. 2021. togo leather in Rouge Sellier (dark brown) with gold-plated hardware. Classic model with flap closure and double handles',
    //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUVWujrGnJxERltrzxvP3pSdZwNMSRV8QEQ&s'
    // },
    // {
    //     id: Id(),
    //     name: 'Hermes Birkin',
    //     price: 16.000,
    //     description: 'HERMÈS handbag "BIRKIN 35". Coll. 2021. togo leather in Rouge Sellier (dark brown) with gold-plated hardware. Classic model with flap closure and double handles',
    //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUVWujrGnJxERltrzxvP3pSdZwNMSRV8QEQ&s'
    // }
];

class Shop {
    static getAll() {
        return products;
    }
    static getById(id) {
        return products.find((product) => product.id === id);
    }
    static add(product) {
        const newProduct = {
            id: Id(),
            ...product
        };
        products.push(newProduct);
        return newProduct;
    }
}

export default Shop;
