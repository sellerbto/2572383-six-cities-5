export interface MockOffer {
  id: number;
  type: string;
  name: string;
  price: number;
  insideItems: string[];
  host: MockUser;
  descriptionParagraphs: string[];
  reviews: MockReview[];
}

export interface MockUser {
  firstname: string;
  lastname: string;
  imageSrc: string;
}

export interface MockReview {
  user: MockUser;
  text: string;
  stars: number;
}

export const mockOffers: MockOffer[] = [
  {
    id: 1,
    type: 'House',
    name: 'Big House',
    price: 120,
    insideItems: ['Kitchen', 'TV'],
    host: {
      firstname: 'Vova',
      lastname: 'Mezenin',
      imageSrc: ''
    },
    descriptionParagraphs: [
      'Big House with Kitchen and TV',
      'Come and stay!'
    ],
    reviews: [
      {
        user: {
          firstname: 'Alex',
          lastname: 'Mezenin',
          imageSrc: ''
        },
        text: 'NICE BIG HOUSE!!!!!',
        stars: 1
      }
    ]
  },
  {
    id: 2,
    name: 'Cozy Apartment',
    type: 'Apartment',
    price: 80,
    insideItems: ['Wi-Fi', 'Air Conditioning', 'Coffee Maker'],
    host: {
      firstname: 'Sara',
      lastname: 'Smith',
      imageSrc: ''
    },
    descriptionParagraphs: [
      'Enjoy a cozy stay in our modern apartment.',
      'Perfect for a weekend getaway or a short trip.'
    ],
    reviews: [
      {
        user: {
          firstname: 'John',
          lastname: 'Doe',
          imageSrc: ''
        },
        text: 'Very comfortable and well-located!',
        stars: 5
      },
      {
        user: {
          firstname: 'Emily',
          lastname: 'Johnson',
          imageSrc: ''
        },
        text: 'Loved the amenities and decor.',
        stars: 4
      }
    ]
  },
  {
    id: 3,
    name: 'Beachside Villa',
    type: 'Villa',
    price: 250,
    insideItems: ['Private Pool', 'Outdoor Kitchen', 'Wi-Fi'],
    host: {
      firstname: 'Michael',
      lastname: 'Williams',
      imageSrc: ''
    },
    descriptionParagraphs: [
      'A stunning villa by the beach with a private pool.',
      'Ideal for a luxurious vacation and relaxing getaway.'
    ],
    reviews: [
      {
        user: {
          firstname: 'Sophia',
          lastname: 'Brown',
          imageSrc: ''
        },
        text: 'Amazing views and very peaceful.',
        stars: 5
      }
    ]
  },
  {
    id: 4,
    name: 'Mountain Cabin',
    type: 'Cabin',
    price: 150,
    insideItems: ['Fireplace', 'Hot Tub', 'BBQ Grill'],
    host: {
      firstname: 'David',
      lastname: 'Garcia',
      imageSrc: ''
    },
    descriptionParagraphs: [
      'Experience a rustic cabin in the mountains with all modern amenities.',
      'Perfect for nature lovers and adventurers.'
    ],
    reviews: [
      {
        user: {
          firstname: 'Alice',
          lastname: 'Martinez',
          imageSrc: ''
        },
        text: 'Absolutely loved the fireplace and the scenic views.',
        stars: 5
      },
      {
        user: {
          firstname: 'Tom',
          lastname: 'Clark',
          imageSrc: ''
        },
        text: 'Great place for a relaxing weekend!',
        stars: 4
      }
    ]
  }
];
