//// PROD 
//var host = 'https://inventory-service.tixuk.io';
//// QA
var host = 'https://inventory-service.qatixuk.io';

var baseUri = '/api/v3/availability/products/';
var markUp = 20;
var currencyISO = 'SEK';

function getPerformaceData(affiliateId, productId, dateString, timeString, quantity, _callback) {
    var priceOverridesList = [];
    var request = new XMLHttpRequest()
    request.open('GET', `${host}${baseUri}${productId}/quantity/${quantity}/seats?date=${dateString}&time=${timeString}`, true)
    request.setRequestHeader('affiliateId', affiliateId);

    request.onload = function() {
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            let areas = data.response.areas;
            areas.map(area => {
                let groups = area.groupings;
                groups.map(group => {
                    if (group) {
                        let value = group.pricing.salePrice.value * (1 + (markUp / 100));
                        let overrideObject = {
                            groupIdentifier: group.groupIdentifier,
                            pricing: {
                                noBookingFee: group.pricing.noBookingFee, 
                                offer: group.pricing.offer,
                                percentage: group.pricing.percentage,
                                salePrice: { 
                                    currency: currencyISO, 
                                    value: value
                                }
                            } 
                        };
                        priceOverridesList.push(overrideObject);                    }
                });
            });
            _callback(priceOverridesList);
        } else {
            console.log('error in API call')
        }
    }

    request.send()
}
