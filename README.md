# MELI_Challenge

# Requirements
Node >= v21

# Setup
You should create .env like .env.example. If the .env is empty those are the defaults values:
- Server PORT:  3000
- Server APIURL: https://api.mercadolibre.com
- Client API_URL: http://localhost:3000/api

## Server:
- cd server
- npm install
- npm run dev

## Client:
- cd client
- npm install
- npm run dev
(Client run in PORT: 5173)

## Run test in Client
- cd client
- npm run test

## Server Endpoint documentation
- Search items: `/api/items?q=​:query`

Response example:
```
{
    "message": "Success",
    "data": {
        "author": {
            "name": "SANTIAGO",
            "lastname": "MINTEGUI"
        },
        "categories": [
            "Autos, Motos y Otros",
            "Autos y Camionetas"
        ],
        "items": [
            {
                "id": "MLA1418017461",
                "title": "Fiat Toro Freedom S-design 1.8l At6 4x2",
                "price": {
                    "currency": "ARS",
                    "amount": "27700038",
                    "decimals": "00"
                },
                "picture": "http://http2.mlstatic.com/resources/frontend/statics/processing-image/1.0.0/I-ES.jpg",
                "condition": "used",
                "free_shipping": false,
                "location": "Capital Federal"
            },
            {
                "id": "MLA1417991797",
                "title": "Fiat Toro Freedom S-design 1.8l At6 4x2",
                "price": {
                    "currency": "ARS",
                    "amount": "27700037",
                    "decimals": "00"
                },
                "picture": "http://http2.mlstatic.com/resources/frontend/statics/processing-image/1.0.0/I-ES.jpg",
                "condition": "used",
                "free_shipping": false,
                "location": "Capital Federal"
            },
            {
                "id": "MLA1417978497",
                "title": "Fiat Toro Freedom S-design 1.8l At6 4x2",
                "price": {
                    "currency": "ARS",
                    "amount": "27700036",
                    "decimals": "00"
                },
                "picture": "http://http2.mlstatic.com/resources/frontend/statics/processing-image/1.0.0/I-ES.jpg",
                "condition": "used",
                "free_shipping": false,
                "location": "Capital Federal"
            },
            {
                "id": "MLA1417965833",
                "title": "Fiat Toro Freedom S-design 1.8l At6 4x2",
                "price": {
                    "currency": "ARS",
                    "amount": "27700035",
                    "decimals": "00"
                },
                "picture": "http://http2.mlstatic.com/resources/frontend/statics/processing-image/1.0.0/I-ES.jpg",
                "condition": "used",
                "free_shipping": false,
                "location": "Capital Federal"
            }
        ]
    }
}
```

- Get item by Id: `/api/items/​:id`
Response example:
```
{
    "message": "Success",
    "data": {
        "author": {
            "name": "SANTIAGO",
            "lastname": "MINTEGUI"
        },
        "item": {
            "id": "MLA1418017461",
            "title": "Fiat Toro Freedom S-design 1.8l At6 4x2",
            "price": {
                "currency": "ARS",
                "amount": "27700038",
                "decimals": "00"
            },
            "picture": "http://http2.mlstatic.com/resources/frontend/statics/processing-image/1.0.0/I-ES.jpg",
            "condition": "used",
            "free_shipping": false,
            "location": "Capital Federal",
            "sold_quantity": 1,
            "description": "*ENTREGA INMEDIATA EN 10 DÍAS COMO MÁXIMO\n*STOCK FÍSICO CON UNIDADES DISPONIBLES.\n*MEJOR PRECIO DE CONTADO.\n*NO ES PLAN DE AHORRO.\n*VENTAS A TODO EL PAÍS DE MANERA SENCILLA.\n*TODA LA LINEA FIAT , CONCESIONARIO OFICIAL.\n*CRÉDITOS CON CUOTA FIJA Y TASA PREFERENCIAL\n*TOMAMOS TU USADO EN PARTE DE PAGO AL MEJOR PRECIO\n\n*EL PRECIO PUBLICADO CORRESPONDE AL MES EN CURSO Y OPERACIONES DE CONTADO. CONSULTAR PRECIO FINANCIADO O CON TOMA DE USADO\n*NO INCLUYE GASTOS.",
            "category_id": "MLA1744"
        },
        "categories": [
            "Autos, Motos y Otros",
            "Autos y Camionetas"
        ]
    }
}
```