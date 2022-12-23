export class BillOfLandingDto{
  constructor(
          public fleetNumber: string,
          public billOfLandingNumber: string,
          public id: string,
          public productTypeId: string,
          public productType: string,
          public clientId: string,
          public clientName: string,
          public clientIdentificationNumber: string,
          public shipmentPort: string,
          public price: string,
          public estimatedDeliveryTime: string,
          public registeredAt: string,
          public quantity: string,
          public priceWithDiscount: string
          ){}
}