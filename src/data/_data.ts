export const images = [
    {
      id: '01',
      src: 'https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '02',
      src: 'https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1777&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '03',
      src: 'https://images.unsplash.com/photo-1568010434570-74e9ba7126bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '04',
      src: 'https://images.unsplash.com/photo-1569411032431-07598b0012c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '05',
      src: 'https://images.unsplash.com/photo-1565440962783-f87efdea99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '06',
      src: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80',
      alt: 'Awesome watch',
    },
  ]
  
  export const products = [
    {
      id: '1',
      name: 'Bamboo Tan',
      currency: 'USD',
      price: 199,
      flag: 'new',
      imageUrl:
        'https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4,
      ratingCount: 1,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
    },
    {
      id: '2',
      name: 'Iconic Turquoise',
      currency: 'USD',
      price: 199,
      salePrice: 179.99,
      flag: 'on-sale',
      imageUrl:
        'https://images.unsplash.com/photo-1509941943102-10c232535736?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4,
      ratingCount: 12,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
    },
    {
      id: '3',
      name: 'Marble Leather',
      currency: 'USD',
      price: 199,
      imageUrl:
        'https://images.unsplash.com/photo-1564594985645-4427056e22e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      rating: 4,
      ratingCount: 12,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
    },
    {
      id: '4',
      name: 'Silve wolf',
      currency: 'GBP',
      price: 199,
      imageUrl:
        'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=680&q=80',
      rating: 5,
      ratingCount: 1,
      description:
        'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
      images,
    },
  ]
  
  export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
  >
    ? ElementType
    : never
  
  export type Product = ElementType<typeof products>
  export type ProductImage = ElementType<typeof images>


  export const links = [
    {
      title: 'Company',
      links: [
        { label: 'Why Envelope', href: '#' },
        { label: 'Our story', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'FAQs', href: '#' },
      ],
    },
    {
      title: 'Product',
      links: [
        { label: 'How it works', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Use Cases', href: '#' },
        { label: 'Integrations', href: '#' },
        { label: 'SAML SSO', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Partnerships', href: '#' },
        { label: 'Case studies', href: '#' },
        { label: 'Media Assets', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Offer terms', href: '#' },
        { label: 'License', href: '#' },
      ],
    },
  ]

  export const categories = [
    {
      name: 'Furniture',
      imageUrl:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      url: '#',
    },
    {
      name: 'Outdoor',
      imageUrl:
        'https://images.unsplash.com/photo-1613317447829-eea2ed59640f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      url: '#',
    },
    {
      name: 'Beddings',
      imageUrl:
        'https://images.unsplash.com/photo-1616627561950-9f746e330187?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
      url: '#',
    },
    {
      name: 'Lighting',
      imageUrl:
        'https://images.unsplash.com/photo-1606170033648-5d55a3edf314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80',
      url: '#',
    },
    {
      name: 'Cookware',
      imageUrl:
        'https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      url: '#',
    },
    {
      name: 'Rugs',
      imageUrl:
        'https://images.unsplash.com/photo-1600166898405-da9535204843?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
      url: '#',
    },
    {
      name: 'Baby',
      imageUrl:
        'https://images.unsplash.com/photo-1574175679797-9fc9eade1450?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhYnklMjB0b3lzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      url: '#',
    },
    {
      name: 'Flooring',
      imageUrl:
        'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      url: '#',
    },
  ]
  
  
  export type Category = ElementType<typeof categories>