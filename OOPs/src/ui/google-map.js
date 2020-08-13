import { BaseElement, BaseElement } from "./base-element.js";

export class GoogleMap extends BaseElement {
  constructor(centerOfMap, data) {
    super();
    this.centerOfMap = centerOfMap;
    this.data = data;
  }

  createElement() 
  {
    super.createElement();

    setTimeout(() =>
     {
      var map = new window.Google.maps.Map(document.getElementById('map'),
      {
      zoom = 13,
      center: this.centerOfMap
      });
     
    });

     
    for (let vehicle of this.data)
    {
        let [let,long]=vehicle.letLong.split(' ');
        console.log('let:' +lat);
        let mylatLng=new window.Google.maps.latLng(lat,long);
        
        var marker=new window.Google.maps.marker
        ({
            position:mylatLng,
            map=map
        });
        marker.setMap(map);
    }
}
}
 