// Sample Data Based on the requirement following a relational and nested tree structure
export const data = [
  {
    id: 1,
    name: 'Feature 1',
    items: [
      {
        id: 11,
        name: 'Sub-Feature 1_1',
        items: [
          {
            id: 111,
            name: 'Sub-Feature 1_1_1',
            items: [
              {
                id: 1111,
                name: 'Sub-Feature 1_1_1_1',
                value: 50,
              },
              {
                id: 1112,
                name: 'Sub-Feature 1_1_1_2',
                value: 35,
              },
            ],
          },
          {
            id: 112,
            name: 'Sub-Feature 1_1_2',
            value: 35,
          },
        ],
      },
      {
        id: 12,
        name: 'Sub-Feature 1_2',
        value: 30,
      },
    ],
  },
  {
    id: 2,
    name: 'Feature 2',
    items: [
      {
        id: 21,
        name: 'Sub-Feature 2_1',
        value: 15,
      },
      {
        id: 22,
        name: 'Sub-Feature 2_2',
        value: 35,
      },
    ],
  },
  {
    id: 3,
    name: 'Feature 3',
    items: [
      {
        id: 31,
        name: 'Sub-Feature 3_1',
        value: 47,
      },
      {
        id: 32,
        name: 'Sub-Feature 3_2',
        value: 55,
      },
    ],
  },
];
