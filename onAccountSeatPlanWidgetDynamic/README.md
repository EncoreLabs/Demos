# Demo

This demo shows a simple static render of the seatplan widget with submit button supressed and an event listener added (and logged ot console).

The example has a JS function to call the inventory API and use the response to dynamically override the prices and currency, it also defers the seatplan loading until the prices are overriden

This HTML page can be copied in your local web server if you have one setup or if you have docker installed:

```sh
> # will be avail on 0.0.0.0:8080
> docker build -t some-content-nginx 
> docker run --name some-nginx -d -p 8080:80 some-content-nginx
```

If you are on Mac or Linux-like OS: 

```sh
> # will be avail on 0.0.0.0:8080
> make build-and-run
```

## Event on submit:

For 2 seats selected and on submit button pressed, you get an event raised which, among other generic event info, it has the following - under the details array:

```js
detail: Array(2)
  0:
    attributes: Array(2)
        0: {title: "SideView", description: "Side view", intention: "negative"}
        1: {title: "AisleSeat", description: "Aisle seat", intention: "positive"}
        length: 2
    category:
        price: 10.1
        value: 2
    currency: "SEK"
    faceCurrency: "GBP"
    faceValue: 10.1
    groupName: "STALLS"
    id: "STALLS-E-8"
    listOfAvailableLumps: Array(1)
        0:
            endSeat: 9
            startSeat: 8
        length: 1
    lump:
        seatNumberEnd: 11
        seatNumberStart: 8
    noBookingFee: false
    number: 8
    offer: false
    percentage: 0
    restrictedView: true
    row: "E"
    salePrice: 10.1
    seatIdentifier: "STALLS-E8"
    seatKey: "ENTA~769363~STA~596~E~1~STR~4500~5400~8~11~ENC,AP0,1~83K1565433K2~L~~~4500~17/11/1858~0"
    sideView: false
  1:
    attributes: Array(1)
        0: {title: "SideView", description: "Side view", intention: "negative"}
        length: 1
    category:
        price: 10
        value: 1
    currency: "SEK"
    faceCurrency: "SEK"
    faceValue: 11
    groupName: "STALLS"
    id: "STALLS-E-9"
    listOfAvailableLumps: Array(1)
        0:
            endSeat: 9
            startSeat: 8
        length: 1
    lump:
        seatNumberEnd: 11
        seatNumberStart: 8
    noBookingFee: false
    number: 9
    offer: true
    percentage: 10
    restrictedView: true
    row: "E"
    salePrice: 10
    seatIdentifier: "STALLS-E9"
    seatKey: "ENTA~769363~STA~596~E~1~STR~4500~5400~8~11~ENC,AP0,1~83K1565433K2~L~~~4500~17/11/1858~0"
    sideView: false
  length: 2
```

what needed to perform `addToBasket` is is the seatKey which will be the same for each of the selected seats as it references the selected group


## Venue service widget Storybook

you can use this URL: `https://venue-service.tixuk.io/v2/index.html?path=/story/venue--seat-plan` to view and change the attributes on the fly to test different conbinations you might need for your customisation of the seatplan widget