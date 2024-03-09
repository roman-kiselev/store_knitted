import { IMasterClassForCart } from "../masterClass";

export interface ICart {
    id: number;
    totalPriceRu: number;
    totalPriceEng: number;
    idTempUser: number;
    createdAt: Date;
    updatedAt: Date;
    patterns: IMasterClassForCart[];
}

// {
//     "id": 13,
//     "totalPriceRu": 404,
//     "totalPriceEng": 11,
//     "idTempUser": 13,
//     "createdAt": "2024-03-09T15:09:08.000Z",
//     "updatedAt": "2024-03-09T17:06:42.000Z",
//     "patterns": [
//       {
//         "id": 1,
//         "nameRu": "sdfsdf",
//         "nameEng": "sdfsd",
//         "priceRu": 4,
//         "priceEng": 5,
//         "createdAt": "2023-11-26T19:31:10.000Z",
//         "updatedAt": "2023-11-26T19:31:10.000Z",
//         "deletedAt": null,
//         "CartPattern": {
//           "id": 3,
//           "quantity": 1,
//           "cartId": 13,
//           "patternId": 1,
//           "createdAt": "2024-03-09T17:06:42.000Z",
//           "updatedAt": "2024-03-09T17:06:42.000Z"
//         }
//       },
//       {
//         "id": 6,
//         "nameRu": "Дракон 2",
//         "nameEng": "Dragon 2",
//         "priceRu": 400,
//         "priceEng": 6,
//         "createdAt": "2023-12-10T17:47:59.000Z",
//         "updatedAt": "2023-12-10T17:47:59.000Z",
//         "deletedAt": null,
//         "CartPattern": {
//           "id": 1,
//           "quantity": 1,
//           "cartId": 13,
//           "patternId": 6,
//           "createdAt": "2024-03-09T16:48:10.000Z",
//           "updatedAt": "2024-03-09T16:48:10.000Z"
//         }
//       }
//     ]
//   }
