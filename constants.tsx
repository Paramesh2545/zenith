
import type { Product, Testimonial, FaqItem, BlogPost } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Cosmic Wanderer Tee',
    price: 29.99,
    description: 'Embrace the journey with our Cosmic Wanderer tee. Made from 100% premium organic cotton, this shirt is as comfortable as it is inspiring. The unique graphic is a reminder to always look up.',
    images: ['https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/j/16/d1339acc-81bb-4351-9115-9c05d66ceab5.jpg', 'https://picsum.photos/id/102/800/800', 'https://picsum.photos/id/103/800/800'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Navy', 'White'],
    category: 'Graphic Tees',
    details: ['100% Organic Ringspun Cotton', 'Modern, slightly fitted cut', 'Ethically sourced and produced', 'High-quality DTG print'],
    care: ['Machine wash cold, inside-out', 'Tumble dry low or hang dry', 'Do not iron directly on print'],
  },
  {
    id: '2',
    name: 'Minimalist Wave Tee',
    price: 24.99,
    description: 'Simple, clean, and elegant. The Minimalist Wave tee features a subtle embroidered wave design, perfect for those who appreciate understated style. A versatile piece for any wardrobe.',
    images: ['https://picsum.photos/id/201/800/800', 'https://picsum.photos/id/202/800/800', 'https://picsum.photos/id/203/800/800'],
    sizes: ['S', 'M', 'L'],
    colors: ['Heather Grey', 'Black', 'Olive'],
    category: 'Minimalist',
    details: ['90% Cotton, 10% Polyester blend', 'Classic relaxed fit', 'Durable embroidered detail', 'Pre-shrunk fabric'],
    care: ['Machine wash warm', 'Tumble dry medium', 'Cool iron if necessary'],
  },
  {
    id: '3',
    name: 'Urban Explorer Tee',
    price: 32.50,
    description: 'Designed for the city adventurer. The Urban Explorer tee is crafted from a durable, heavyweight cotton that stands up to the daily grind while keeping you comfortable.',
    images: ['https://picsum.photos/id/301/800/800', 'https://picsum.photos/id/302/800/800', 'https://picsum.photos/id/303/800/800'],
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Military Green', 'Khaki'],
    category: 'Streetwear',
    details: ['100% Heavyweight Cotton', 'Slightly oversized, boxy fit', 'Reinforced collar and seams', 'Screen-printed chest logo'],
    care: ['Wash with similar colors', 'Do not bleach', 'Iron on reverse'],
  },
  {
    id: '4',
    name: 'Retro Sunset Tee',
    price: 28.00,
    description: 'Throw it back with our Retro Sunset tee. Featuring a vintage-inspired color palette and a soft, worn-in feel from the very first wear. It\'s an instant classic.',
    images: ['https://picsum.photos/id/401/800/800', 'https://picsum.photos/id/402/800/800', 'https://picsum.photos/id/403/800/800'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Washed Blue', 'Faded Red'],
    category: 'Vintage',
    details: ['50/50 Cotton/Polyester blend', 'Vintage soft-hand print feel', 'Standard unisex fit', 'Garment-dyed for unique color'],
    care: ['Machine wash cold', 'Tumble dry low', 'Avoid high heat'],
  },
    {
    id: '5',
    name: 'Zenith Pocket Tee',
    price: 22.99,
    description: 'The perfect everyday essential. Our Zenith Pocket Tee is made from exceptionally soft pima cotton and features a clean, simple design with a functional chest pocket.',
    images: ['https://picsum.photos/id/501/800/800', 'https://picsum.photos/id/502/800/800', 'https://picsum.photos/id/503/800/800'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Heather Grey', 'Navy'],
    category: 'Basics',
    details: ['100% Pima Cotton', 'Classic fit for all-day comfort', 'Tagless neck label', 'Durable pocket stitching'],
    care: ['Machine wash warm with like colors', 'Tumble dry medium', 'Do not iron'],
  },
  {
    id: '6',
    name: 'Mountain Outline Tee',
    price: 29.99,
    description: 'For the love of the great outdoors. This tee showcases a clean, single-line graphic of a mountain range, printed on a soft, breathable tri-blend fabric.',
    images: ['https://picsum.photos/id/601/800/800', 'https://picsum.photos/id/602/800/800', 'https://picsum.photos/id/603/800/800'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Forest Green', 'Storm Blue', 'Charcoal'],
    category: 'Graphic Tees',
    details: ['50% Polyester, 25% Cotton, 25% Rayon', 'Athletic fit', 'Incredibly soft and lightweight', 'Water-based ink print'],
    care: ['Machine wash cold', 'Hang dry for best results', 'Do not bleach'],
  },
  {
    id: '7',
    name: 'Sustainable Earth Tee',
    price: 35.00,
    description: 'Wear your values. Our Sustainable Earth Tee is made from a blend of recycled cotton and recycled polyester, saving water and reducing waste. A comfortable shirt that feels good to wear in every sense.',
    images: ['https://picsum.photos/id/701/800/800', 'https://picsum.photos/id/702/800/800', 'https://picsum.photos/id/703/800/800'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Natural', 'River Blue', 'Clay'],
    category: 'Sustainable',
    details: ['60% Recycled Cotton, 40% Recycled Polyester', 'Eco-friendly manufacturing process', 'Modern fit', 'Subtle embroidered globe logo'],
    care: ['Wash cold, save energy', 'Tumble dry low or line dry', 'Iron on low heat'],
  },
  {
    id: '8',
    name: 'Origami Crane Tee',
    price: 27.50,
    description: 'A symbol of peace and hope, the origami crane is beautifully rendered in a geometric design on this ultra-soft tee. A thoughtful design for a mindful wardrobe.',
    images: ['https://picsum.photos/id/801/800/800', 'https://picsum.photos/id/802/800/800', 'https://picsum.photos/id/803/800/800'],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['White', 'Light Pink', 'Sky Blue'],
    category: 'Minimalist',
    details: ['100% Airlume combed and ring-spun cotton', 'Slimmer, feminine fit available', 'Side-seamed construction', 'High-definition print'],
    care: ['Machine wash warm, inside out', 'Tumble dry low', 'Medium iron, avoiding print'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "The quality of these shirts is insane! So soft and the print hasn't faded at all after multiple washes. My new favorite brand.",
    author: 'Alex Johnson',
    location: 'Denver, CO',
  },
  {
    quote: "I love the minimalist designs. They're stylish without being loud. Plus, the customer service was super helpful with a sizing question I had.",
    author: 'Maria Garcia',
    location: 'Austin, TX',
  },
  {
    quote: 'Finally, a brand that gets it right. Great fit, comfortable materials, and designs I actually want to wear. I\'ve already bought three!',
    author: 'David Chen',
    location: 'Seattle, WA',
  },
];

export const FAQS: FaqItem[] = [
    {
        question: 'What are your shipping options and times?',
        answer: 'We offer standard and express shipping. Standard shipping typically takes 3-5 business days, while express shipping takes 1-2 business days. Orders are processed within 24 hours.'
    },
    {
        question: 'What is your return policy?',
        answer: 'We accept returns within 30 days of purchase for a full refund or exchange. Items must be in their original, unworn, and unwashed condition with all tags attached. Please visit our Returns page to initiate a return.'
    },
    {
        question: 'How do I know which size to choose?',
        answer: 'Each product page includes a detailed size guide with measurements. We recommend comparing these measurements to a t-shirt you already own and love the fit of. If you are between sizes, we generally suggest sizing up for a more relaxed fit.'
    },
    {
        question: 'How should I care for my t-shirts?',
        answer: 'To ensure the longevity of your t-shirt and its print, we recommend washing it inside-out with cold water and like colors. Tumble dry on low or hang dry. Avoid ironing directly on the graphic.'
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.'
    },
    {
        question: 'How can I track my order?',
        answer: 'Once your order has shipped, you will receive a confirmation email with a tracking number and a link to view the status of your delivery.'
    }
];


export const BLOG_POSTS: BlogPost[] = [
    {
        id: '1',
        title: 'The Art of the Perfect Tee: Finding Your Fit',
        excerpt: 'A t-shirt isn\'t just a t-shirt. It\'s a statement. But before the statement, comes the fit. Learn how to choose the right size and cut for your body type...',
        imageUrl: 'https://picsum.photos/id/111/600/400',
        date: 'October 26, 2023',
        author: 'Jane Doe',
    },
    {
        id: '2',
        title: 'Behind the Design: The Cosmic Wanderer',
        excerpt: 'Every design has a story. Dive into the inspiration behind one of our best-selling tees, from initial sketch to the final product...',
        imageUrl: 'https://picsum.photos/id/121/600/400',
        date: 'October 15, 2023',
        author: 'John Smith',
    },
    {
        id: '3',
        title: '5 Ways to Style a Simple Black Tee',
        excerpt: 'The black t-shirt is a wardrobe staple for a reason. It\'s versatile, timeless, and effortlessly cool. Here are five ways to style it for any occasion...',
        imageUrl: 'https://picsum.photos/id/131/600/400',
        date: 'September 28, 2023',
        author: 'Emily White',
    }
];


export const PRIVACY_POLICY = `
Last updated: October 27, 2023
Zenith Threads ("us", "we", or "our") operates the Zenith Threads website (the "Service").
This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.

**Information Collection And Use**
We collect several different types of information for various purposes to provide and improve our Service to you.

**Types of Data Collected**
Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
- Email address
- First name and last name
- Cookies and Usage Data

**Use of Data**
Zenith Threads uses the collected data for various purposes:
- To provide and maintain the Service
- To notify you about changes to our Service
- To allow you to participate in interactive features of our Service when you choose to do so
- To provide customer care and support
- To provide analysis or valuable information so that we can improve the Service
- To monitor the usage of the Service
- To detect, prevent and address technical issues
`;

export const TERMS_OF_SERVICE = `
Last updated: October 27, 2023
Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Zenith Threads website (the "Service") operated by Zenith Threads ("us", "we", or "our").
Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.

**Accounts**
When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.

**Intellectual Property**
The Service and its original content, features and functionality are and will remain the exclusive property of Zenith Threads and its licensors.

**Links To Other Web Sites**
Our Service may contain links to third-party web sites or services that are not owned or controlled by Zenith Threads.
Zenith Threads has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Zenith Threads shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.

**Termination**
We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
`;
