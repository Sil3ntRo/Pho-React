export function formatPrice(price) {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}


export const MenuItems = [
    {
        name: 'Bang Bang Shrimp',
        img: '/images/bangbangshrimp.jpg',
        section: 'Appetizers',
        price: 5.95
    },
    {
        name: 'Beef Skewers',
        img: '/images/beef-skewers.jpg',
        section: 'Appetizers',
        price: 5.00
    },
    {
        name: 'Spring Rolls',
        img: '/images/Spring-roll.jpg',
        section: 'Appetizers',
        price: 3.00
    },
    {
        name: 'Shaken House Fries',
        img: '/images/Shaken-fries.jpeg',
        section: 'Appetizers',
        price: 3.00
    },
    {
        name: 'Banh Mi',
        img: '/images/bahn-mi.jpg',
        section: 'Banh Mi',
        price: 7.00
    },
    {
        name: 'Beef Noodle Soup - Pho',
        img:  '/images/beef-pho.jpg',
        section: 'Pho Rice Noodle Soups',
        price: 8.00
    },
    {
        name: 'Beef Combo Noodle Soup',
        img: '/images/beef-combo-pho.jpg',
        section: 'Pho Rice Noodle Soups',
        price: 8.50
    },
    {
        name: 'Chicken Pho',
        img: '/images/Chicken-pho.jpg',
        section: 'Pho Rice Noodle Soups',
        price: 8.00
    },
    {
        name: 'Vegan Pho',
        img: '/images/vegan-pho.jpg',
        section: 'Pho Rice Noodle Soups',
        price: 7.50

    },
    {
        name: 'Seafood Pho',
        img: '/images/Seafood-pho.jpg',
        section: 'Pho Rice Noodle Soups',
        price: 10.50
    },
    {
        name: 'Spicy Beef Lemongrass Soup',
        img: '/images/Spicy-beef-lemongrass-noodle-soup.jpg',
        section: 'Noodle Soup Varieties',
        price: 9.00
    },
    {
        name: 'Rice Vermicelli Bowl',
        img: '/images/rice-vermicelli-bowl.jpg',
        section: 'Rice Vermicelli',
        price: 8.50
    },
    {
        name: 'Fried Rice',
        img: '/images/fried-rice.jpg',
        section: 'Fried Rice',
        price: 6.50
    },
    {
        name: 'Limeade',
        img: '/images/limeade.jpeg',
        section: 'Beverages',
        price: 2.50
    },
    {
        name: 'Lemonade',
        img: '/images/lemonade.jpeg',
        section: 'Beverages',
        price: 2.50
    },
    {
        name: 'Che Ba Mau',
        img: '/images/Che-Ba-Mau.jpg',
        section: 'Beverages',
        price: 4.00
    },
    {
        name: 'Thai Iced Tea',
        img: '/images/Thai-Iced-Tea.jpg',
        section: 'Beverages',
        price: 4.00
    }
]

export const foods = MenuItems.reduce((res, food) => {
    if(!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});