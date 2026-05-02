// Mock E-Commerce Data for FlowCart

const products = [
    {
        id: 1,
        title: "Men's Premium Breathable Running Shoes Lightweight Sneakers",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
        price: 24.99,
        originalPrice: 89.99,
        rating: 4.8,
        reviews: 1450,
        badge: "Lightning Deal",
        category: "Shoes"
    },
    {
        id: 2,
        title: "Pro Wireless Earbuds Bluetooth 5.3 Noise Cancelling",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=80",
        price: 9.98,
        originalPrice: 39.99,
        rating: 4.6,
        reviews: 832,
        badge: "Choice",
        category: "Electronics"
    },
    {
        id: 3,
        title: "Luxury Goose Down Alternative Comforter Queen Size",
        image: "https://images.unsplash.com/photo-1522771731478-44bf10511285?auto=format&fit=crop&w=400&q=80",
        price: 34.50,
        originalPrice: 120.00,
        rating: 4.9,
        reviews: 210,
        badge: "",
        category: "Home"
    },
    {
        id: 4,
        title: "Men's Chunky Knit Winter Sweater Warm Pullover",
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80",
        price: 18.20,
        originalPrice: 45.00,
        rating: 4.5,
        reviews: 423,
        badge: "Almost Gone",
        category: "Clothing"
    },
    {
        id: 5,
        title: "Smart Watch Blood Pressure Fitness Tracker For Men Women",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
        price: 21.00,
        originalPrice: 65.00,
        rating: 4.7,
        reviews: 1205,
        badge: "Lightning Deal",
        category: "Electronics"
    },
    {
        id: 6,
        title: "Set of 5 Minimalist Ceramic Coffee Mugs 12oz",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=400&q=80",
        price: 14.99,
        originalPrice: 30.00,
        rating: 4.4,
        reviews: 89,
        badge: "",
        category: "Home"
    },
    {
        id: 7,
        title: "Professional Hair Clipper zero gapped cordless trimmer",
        image: "https://images.unsplash.com/photo-1593702288056-baee26ba89b3?auto=format&fit=crop&w=400&q=80",
        price: 15.60,
        originalPrice: 49.99,
        rating: 4.8,
        reviews: 569,
        badge: "Choice",
        category: "Beauty"
    },
    {
        id: 8,
        title: "Large Capacity Travel Duffel Bag Weekend Overnight Bag",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=400&q=80",
        price: 22.90,
        originalPrice: 55.00,
        rating: 4.6,
        reviews: 320,
        badge: "",
        category: "Bags"
    },
    {
        id: 9,
        title: "Minimalist Leather Men's Wallet RFID Blocking card holder",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=400&q=80",
        price: 8.50,
        originalPrice: 25.00,
        rating: 4.9,
        reviews: 890,
        badge: "Lightning Deal",
        category: "Accessories"
    },
    {
        id: 10,
        title: "Women's High Waist Yoga Pants Tummy Control Leggings",
        image: "https://images.unsplash.com/photo-1560946279-ce4ea0754ca8?auto=format&fit=crop&w=400&q=80",
        price: 12.99,
        originalPrice: 35.00,
        rating: 4.7,
        reviews: 2150,
        badge: "",
        category: "Clothing"
    },
    {
        id: 11,
        title: "Adjustable Laptop Stand Ergonomic Aluminum Computer Riser",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=400&q=80",
        price: 19.99,
        originalPrice: 45.00,
        rating: 4.8,
        reviews: 1084,
        badge: "Choice",
        category: "Electronics"
    },
    {
        id: 12,
        title: "Vintage Round Sunglasses For Men Women polarized",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80",
        price: 5.99,
        originalPrice: 19.99,
        rating: 4.5,
        reviews: 945,
        badge: "",
        category: "Accessories"
    },
    {
        id: 13,
        title: "10-Piece Stainless Steel Knife Set with Block",
        image: "https://images.unsplash.com/photo-1593988647087-73b313dcb880?auto=format&fit=crop&w=400&q=80",
        price: 45.00,
        originalPrice: 150.00,
        rating: 4.9,
        reviews: 432,
        badge: "Lightning Deal",
        category: "Home"
    },
    {
        id: 14,
        title: "Mechanical Gaming Keyboard RGB Backlit Wired",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=400&q=80",
        price: 29.50,
        originalPrice: 89.99,
        rating: 4.6,
        reviews: 756,
        badge: "",
        category: "Electronics"
    },
    {
        id: 15,
        title: "Waterproof Hiking Boots For Men Outdoor Trekking Shoes",
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=400&q=80",
        price: 36.80,
        originalPrice: 110.00,
        rating: 4.7,
        reviews: 621,
        badge: "Choice",
        category: "Shoes"
    },
    {
        id: 16,
        title: "Electric Toothbrush Sonic Whitening with 8 Brush Heads",
        image: "https://images.unsplash.com/photo-1517424694468-b7fe95222db2?auto=format&fit=crop&w=400&q=80",
        price: 18.99,
        originalPrice: 59.99,
        rating: 4.8,
        reviews: 1320,
        badge: "",
        category: "Health"
    },
    // Adding More Men's Shoes Mock Data
    {
        id: 17, title: "Men's Breathable Mesh Running Shoes Sport Sneakers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80", price: 29.99, originalPrice: 60.00, rating: 4.6, reviews: 1024, badge: "Choice", category: "Shoes"
    },
    {
        id: 18, title: "Men's Classic Leather Oxfords Dress Shoes", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=400&q=80", price: 45.50, originalPrice: 90.00, rating: 4.8, reviews: 856, badge: "", category: "Shoes"
    },
    {
        id: 19, title: "Outdoor Men's Hiking Boots Waterproof Trekking", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=400&q=80", price: 55.00, originalPrice: 120.00, rating: 4.9, reviews: 2140, badge: "Lightning Deal", category: "Shoes"
    },
    {
        id: 20, title: "Men's Casual Slip-On Loafers Lightweight Shoes", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=400&q=80", price: 32.99, originalPrice: 75.00, rating: 4.7, reviews: 540, badge: "Choice", category: "Shoes"
    },
    {
        id: 21, title: "Men's High-Top Canvas Sneakers Fashion Casual", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=400&q=80", price: 25.50, originalPrice: 50.00, rating: 4.5, reviews: 120, badge: "", category: "Shoes"
    },
    {
        id: 22, title: "Men's Athletic Walking Shoes Comfortable Fitness", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400&q=80", price: 28.00, originalPrice: 65.00, rating: 4.8, reviews: 3340, badge: "Lightning Deal", category: "Shoes"
    },
    {
        id: 23, title: "Winter Men's Snow Boots Plush Lined Warm Shoes", image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=400&q=80", price: 42.00, originalPrice: 85.00, rating: 4.6, reviews: 780, badge: "Almost Gone", category: "Shoes"
    },
    {
        id: 24, title: "Men's Formal Business Brogue Leather Shoes", image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=400&q=80", price: 60.99, originalPrice: 150.00, rating: 4.9, reviews: 450, badge: "Choice", category: "Shoes"
    },
    {
        id: 25, title: "Men's Lightweight Non-Slip Work Shoes Trainers", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80", price: 21.99, originalPrice: 45.00, rating: 4.4, reviews: 120, badge: "", category: "Shoes"
    },
    {
        id: 26, title: "Men's Comfort Suede Chukka Boots Daily Wear", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=400&q=80", price: 35.00, originalPrice: 80.00, rating: 4.7, reviews: 210, badge: "Choice", category: "Shoes"
    },
    {
        id: 27, title: "Men's Air Cushion Basketball Shoes Performance", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=400&q=80", price: 49.99, originalPrice: 110.00, rating: 4.9, reviews: 3100, badge: "Lightning Deal", category: "Shoes"
    },
    {
        id: 28, title: "Men's Summer Sandals Genuine Leather Outdoor", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=400&q=80", price: 27.50, originalPrice: 60.00, rating: 4.6, reviews: 450, badge: "", category: "Shoes"
    },
    {
        id: 29, title: "Men's Fly Woven Breathable Sock Sneakers", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400&q=80", price: 19.99, originalPrice: 50.00, rating: 4.5, reviews: 500, badge: "Choice", category: "Shoes"
    },
    {
        id: 30, title: "Men's Casual Soft Sole Leather Moccasins", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=400&q=80", price: 33.00, originalPrice: 70.00, rating: 4.8, reviews: 760, badge: "", category: "Shoes"
    },
    {
        id: 31, title: "Men's Tactical Desert Boots Military Work Shoes", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=400&q=80", price: 44.50, originalPrice: 100.00, rating: 4.7, reviews: 400, badge: "Lightning Deal", category: "Shoes"
    },
    {
        id: 32, title: "Men's Premium Skateboard Shoes Platform Canvas", image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=400&q=80", price: 26.99, originalPrice: 55.00, rating: 4.6, reviews: 200, badge: "Choice", category: "Shoes"
    },
    {
        id: 33, title: "Men's Breathable Mesh Running Shoes Sport Sneakers V2", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80", price: 29.99, originalPrice: 60.00, rating: 4.6, reviews: 1024, badge: "Choice", category: "Shoes"
    },
    {
        id: 34, title: "Men's Classic Leather Oxfords Dress Shoes V2", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=400&q=80", price: 45.50, originalPrice: 90.00, rating: 4.8, reviews: 856, badge: "", category: "Shoes"
    },
    {
        id: 35, title: "Outdoor Men's Hiking Boots Waterproof Trekking V2", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=400&q=80", price: 55.00, originalPrice: 120.00, rating: 4.9, reviews: 2140, badge: "Lightning Deal", category: "Shoes"
    },
    {
        id: 36, title: "Men's Casual Slip-On Loafers Lightweight Shoes V2", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=400&q=80", price: 32.99, originalPrice: 75.00, rating: 4.7, reviews: 540, badge: "Choice", category: "Shoes"
    },
    {
        id: 37, title: "Men's High-Top Canvas Sneakers Fashion Casual V2", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=400&q=80", price: 25.50, originalPrice: 50.00, rating: 4.5, reviews: 120, badge: "", category: "Shoes"
    },
    {
        id: 38, title: "Men's Athletic Walking Shoes Comfortable Fitness V2", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400&q=80", price: 28.00, originalPrice: 65.00, rating: 4.8, reviews: 3340, badge: "Lightning Deal", category: "Shoes"
    },
    {
        id: 39, title: "Winter Men's Snow Boots Plush Lined Warm Shoes V2", image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=400&q=80", price: 42.00, originalPrice: 85.00, rating: 4.6, reviews: 780, badge: "Almost Gone", category: "Shoes"
    },
    {
        id: 40, title: "Men's Formal Business Brogue Leather Shoes V2", image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=400&q=80", price: 60.99, originalPrice: 150.00, rating: 4.9, reviews: 450, badge: "Choice", category: "Shoes"
    }
];

window.products = products;

