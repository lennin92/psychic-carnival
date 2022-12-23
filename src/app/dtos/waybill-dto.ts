export class WaybillDto{
  constructor(
          public trucksPlate: string,
          public waybillNumber: string,
          public id: string,
          public productTypeId: string,
          public productType: string,
          public clientId: string,
          public clientName: string,
          public clientIdentificationNumber: string,
          public warehouse: string,
          public price: string,
          public estimatedDeliveryTime: string,
          public registeredAt: string,
          public quantity: string,
          public priceWithDiscount: string
          ){}
}