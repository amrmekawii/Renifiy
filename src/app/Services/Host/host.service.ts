import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyAddEditDto } from 'src/app/types/PropertyAddEditDto';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(private myClient: HttpClient) { }

  private readonly hostBookingUrl = "https://localhost:7108/api/HostSection/HostBooking";
  private readonly hostPropertyUrl = "https://localhost:7108/api/HostSection/HostProperty";
  private readonly hostPropertyAddEditUrl = "https://localhost:7108/api/HostProperty";

  private readonly hostEditProperty  = "https://localhost:7108/api/HostProperty/GetUpdate";


  GetBookingByUserId() {
    return this.myClient.get(this.hostBookingUrl);
  }

  GetPropertyByUserId() {
    return this.myClient.get(this.hostPropertyUrl);
  }

  AddProperty(Property: PropertyAddEditDto) {
    this.myClient.post(this.hostPropertyAddEditUrl, Property);
  }

  GetDataToPopulateFormLists() {
    return this.myClient.get(this.hostPropertyAddEditUrl);
  }

    UpdateProperty(Property: PropertyAddEditDto) {
      this.myClient.put(this.hostPropertyAddEditUrl, Property);
    }

  GetDataToPopulateForm(id:any){
    return this.myClient.get(`${this.hostEditProperty}/${id}`);
  }

}
