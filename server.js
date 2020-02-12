const express = require('express');
const app = express();

app.use(express.static( __dirname + '/public'));

app.get('/data', function (req, res) {

    let resp = [
        {
            "_id": "5e4450d3b8a0d75de2e7767d",
            "index": 0,
            "guid": "6dbc0c12-29c9-4c41-930d-19f3d0678f5c",
            "isActive": false,
            "balance": "$1,597.20",
            "picture": "http://placehold.it/32x32",
            "age": 28,
            "eyeColor": "green",
            "name": "Kent Hanson",
            "gender": "male",
            "company": "OULU",
            "email": "kenthanson@oulu.com",
            "phone": "+1 (849) 558-2309",
            "address": "207 Junius Street, Grazierville, Illinois, 5197",
            "about": "Aute reprehenderit cillum dolore deserunt officia anim anim. Ad fugiat dolor deserunt magna. Nulla amet aliqua aliquip commodo ut fugiat eu adipisicing sunt sunt sint sit deserunt reprehenderit. Proident sit eiusmod veniam eiusmod elit pariatur irure ut sint do aliqua sint.\r\n",
            "registered": "2016-05-22T11:28:28 +04:00",
            "latitude": 84.471738,
            "longitude": -57.048965,
            "tags": [
                "minim",
                "reprehenderit",
                "dolore",
                "fugiat",
                "voluptate",
                "labore",
                "sint"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Zimmerman Hayden"
                },
                {
                    "id": 1,
                    "name": "Cora Short"
                },
                {
                    "id": 2,
                    "name": "Stokes Walker"
                }
            ],
            "greeting": "Hello, Kent Hanson! You have 2 unread messages.",
            "favoriteFruit": "apple"
        },
        {
            "_id": "5e4450d36d7e9d69f2dea632",
            "index": 1,
            "guid": "d0f3c3a5-7684-4fab-9282-bb49d34a5924",
            "isActive": true,
            "balance": "$1,621.02",
            "picture": "http://placehold.it/32x32",
            "age": 32,
            "eyeColor": "green",
            "name": "Morrison Slater",
            "gender": "male",
            "company": "ACIUM",
            "email": "morrisonslater@acium.com",
            "phone": "+1 (848) 499-2518",
            "address": "362 Clarendon Road, Soham, Idaho, 3783",
            "about": "Velit et aliqua nostrud cillum nulla aliqua qui do officia. Irure duis est et laboris aliquip. Ipsum et ad elit qui sint est sit.\r\n",
            "registered": "2015-02-05T05:58:31 +03:00",
            "latitude": -22.339333,
            "longitude": -148.709979,
            "tags": [
                "ex",
                "adipisicing",
                "ea",
                "cupidatat",
                "occaecat",
                "cillum",
                "commodo"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Ramos Hyde"
                },
                {
                    "id": 1,
                    "name": "Melissa Clark"
                },
                {
                    "id": 2,
                    "name": "Camacho Kerr"
                }
            ],
            "greeting": "Hello, Morrison Slater! You have 4 unread messages.",
            "favoriteFruit": "apple"
        },
        {
            "_id": "5e4450d37346ada6b76d5116",
            "index": 2,
            "guid": "8763d831-1836-4ab2-94d0-7643ee037982",
            "isActive": true,
            "balance": "$1,789.75",
            "picture": "http://placehold.it/32x32",
            "age": 34,
            "eyeColor": "green",
            "name": "Mccarty Hartman",
            "gender": "male",
            "company": "QOT",
            "email": "mccartyhartman@qot.com",
            "phone": "+1 (887) 567-3401",
            "address": "316 Oriental Court, Belvoir, Arkansas, 9458",
            "about": "Consectetur laboris fugiat pariatur esse enim laborum culpa qui irure. Aliqua eu aute aliqua culpa ipsum aliqua occaecat irure reprehenderit nostrud irure. Aute magna pariatur duis est veniam ullamco in aliquip occaecat ullamco ullamco Lorem. Voluptate eiusmod reprehenderit dolor aute. Cillum eiusmod labore excepteur sint cillum. Laborum occaecat magna ullamco sit dolor quis. Magna dolor esse adipisicing tempor anim aute proident consequat dolor cupidatat nisi dolor.\r\n",
            "registered": "2016-09-13T07:13:20 +03:00",
            "latitude": 85.053766,
            "longitude": 144.2345,
            "tags": [
                "dolor",
                "labore",
                "consectetur",
                "esse",
                "nulla",
                "exercitation",
                "velit"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Liza Summers"
                },
                {
                    "id": 1,
                    "name": "Roth Delgado"
                },
                {
                    "id": 2,
                    "name": "Clarice Savage"
                }
            ],
            "greeting": "Hello, Mccarty Hartman! You have 4 unread messages.",
            "favoriteFruit": "apple"
        },
        {
            "_id": "5e4450d3c778f950d944fd8c",
            "index": 3,
            "guid": "679a25cd-4987-4445-9208-24e4a96cc201",
            "isActive": true,
            "balance": "$3,619.16",
            "picture": "http://placehold.it/32x32",
            "age": 22,
            "eyeColor": "brown",
            "name": "Anderson Hardin",
            "gender": "male",
            "company": "SKYBOLD",
            "email": "andersonhardin@skybold.com",
            "phone": "+1 (996) 496-2260",
            "address": "193 Christopher Avenue, Woodlake, Rhode Island, 3209",
            "about": "In occaecat veniam non occaecat mollit incididunt cillum nostrud in pariatur. Officia ad est excepteur excepteur cillum quis aute sit proident dolore esse sunt voluptate. Magna incididunt pariatur tempor nisi.\r\n",
            "registered": "2015-12-15T06:32:29 +03:00",
            "latitude": 34.905974,
            "longitude": -8.276714,
            "tags": [
                "aliqua",
                "deserunt",
                "sunt",
                "cupidatat",
                "et",
                "amet",
                "dolor"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Justice Hendrix"
                },
                {
                    "id": 1,
                    "name": "Chaney Butler"
                },
                {
                    "id": 2,
                    "name": "Loretta Williams"
                }
            ],
            "greeting": "Hello, Anderson Hardin! You have 2 unread messages.",
            "favoriteFruit": "apple"
        },
        {
            "_id": "5e4450d36c323ed90c6a058a",
            "index": 4,
            "guid": "3b108a80-c3e9-41db-8f05-b27badf4b1e4",
            "isActive": true,
            "balance": "$2,487.45",
            "picture": "http://placehold.it/32x32",
            "age": 25,
            "eyeColor": "blue",
            "name": "Shelia Powell",
            "gender": "female",
            "company": "MICRONAUT",
            "email": "sheliapowell@micronaut.com",
            "phone": "+1 (907) 416-2610",
            "address": "542 Denton Place, Waterford, Washington, 8330",
            "about": "Do ut consequat consectetur deserunt do nisi duis laboris sint ut duis laborum consequat enim. Eu mollit id cillum ut do occaecat veniam. Ad officia in do commodo consectetur.\r\n",
            "registered": "2018-10-07T03:00:33 +03:00",
            "latitude": 74.536015,
            "longitude": -158.533912,
            "tags": [
                "aliqua",
                "sit",
                "in",
                "aute",
                "sit",
                "dolor",
                "do"
            ],
            "friends": [
                {
                    "id": 0,
                    "name": "Donovan Bird"
                },
                {
                    "id": 1,
                    "name": "Christie Bray"
                },
                {
                    "id": 2,
                    "name": "Rutledge Bowman"
                }
            ],
            "greeting": "Hello, Shelia Powell! You have 3 unread messages.",
            "favoriteFruit": "banana"
        }
    ];

    res.send(resp)
});

app.listen(8080, () => {
    console.log('Escuchando puerto 8080')
});