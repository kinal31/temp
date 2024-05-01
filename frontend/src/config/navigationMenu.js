export const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        featured: [
          {
            name: 'New Arrivals',
            imageSrc: 'https://cdn.pixabay.com/photo/2023/01/19/16/43/woman-7729639_1280.jpg',
            imageAlt: 'Lehnga Choli.',
          },
          {
            name: 'Basic Dress',
            imageSrc: 'https://rukminim1.flixcart.com/image/612/612/xif0q/dress/h/l/3/xxl-6101-sheetal-associates-original-imagmnemtrdhgrnc.jpeg?q=70',
            imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Tops', id:"top", href: `{women/clothing/tops}` },
              { name: 'Dresses', id:"women_dress", href: '#' },
              { name: 'Women Jeans', id: 'women_jeans' },
              { name: 'Lengha Choli', id: 'lengha_choli' },
              { name: 'Gouns', id: 'gouns' },
              { name: 'Sarees', id: 'saree' },
              { name: 'Kurtas', id: 'kurtas' },
            ],
          },
         
        ],
      },
      {
        id: 'men',
        name: 'Men',
        featured: [
          {
            name: 'New Arrivals',
            id: '#',
            imageSrc: 'https://assets.ajio.com/medias/sys_master/root/20220729/jadt/62e3ed78aeb26921afac2bf0/-473Wx593H-462029786-blue-MODEL.jpg',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
          {
            name: 'Basic Jeans',
            id: '#',
            imageSrc: 'https://rukminim1.flixcart.com/image/612/612/xif0q/jean/d/s/c/36-mj-bk-pl-48-comfits-original-imagqbrnyjfzhs8v.jpeg?q=70',
            imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
          },
        ],
        sections: [
          {
            id: 'clothing',
            name: 'Clothing',
            items: [
              { name: 'Mens Kurtas', id: 'mens_kurta' },
              { name: 'Shirt', id: 'shirt' },
              { name: 'Men Jeans', id: 'men_jeans' },
              { name: 'Jackets', id: 'jacket' },
              { name: 'Activewear', id: 'activewear' },
              {name: 'T-shirt', id: 'tshirt'}
              
            ],
          },
          
        ],
      },
    ],
    // pages: [
    //   { name: 'Company', id: '/' },
    //   { name: 'Stores', id: '/' },
    // ],
  }