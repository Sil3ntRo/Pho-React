export const MenuItems = [
    {
        name: 'Beef Noodle Soup - Pho',
        img:  '/images/beef-pho.jpg',
        section: 'Pho Rice Noodle Soups'
    },
    {
        name: 'Beef Combo Noodle Soup',
        img: '/images/beef-combo-pho.jpg',
        section: 'Pho Rice Noodle Soups'
    },
    {
        name: 'Chicken Pho',
        img: '/images/Chicken-pho.jpg',
        section: 'Pho Rice Noodle Soups'
    },
    {
        name: 'Vegan Pho',
        img: '/images/vegan-pho.jpg',
        section: 'Pho Rice Noodle Soups'

    },
    {
        name: 'Seafood Pho',
        img: '/images/Seafood-pho.jpg',
        section: 'Pho Rice Noodle Soups'
    },
    {
        name: 'Spicy Beef Lemongrass Soup',
        img: '/images/Spicy-beef-lemongrass-noodle-soup.jpg',
        section: 'Noodle Soup Varieties'
    },
    {
        name: 'Rice Vermicelli Bowl',
        img: '/images/rice-vermicelli-bowl.jpg',
        section: 'Rice Vermicelli'
    },
    {
        name: 'Fried Rice',
        img: '/images/fried-rice.jpg',
        section: 'Fried Rice'
    },
    {
        name: 'Bang Bang Shrimp',
        img: '/images/bangbangshrimp.jpg',
        section: 'Appetizers'
    },
    {
        name: 'Beef Skewers',
        img: '/images/beef-skewers.jpg',
        section: 'Appetizers'
    },
]

export const foods = MenuItems.reduce((res, food) => {
    if(!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});