export class CreateDeliveryDto {
  constructor(
          public trucksPlate: string,
          public waybillNumber: string,
          public warehouse: string,
          public productTypeId: string,
          public clientId: string,
          public price: string,
          public estimatedDeliveryTime: string,
          public productQuantity: string
          ){}
}