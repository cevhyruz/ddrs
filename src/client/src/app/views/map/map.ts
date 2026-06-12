import { Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.scss',
})
export class Map implements AfterViewInit {

  @ViewChild('map', { static: true })
  mapContainer!: ElementRef<HTMLDivElement>;

  private map!: L.Map;

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  private initializeMap(): void {
    this.map = L.map(this.mapContainer.nativeElement, {
      renderer: L.svg({ padding: 100 })
    })
      .setView(
        [
          13.14744938708695,
          123.7283492088318
        ],
        17
    );

    L.tileLayer(
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        minZoom: 16,
        attribution: 'Barangay 1, EM\'s Barrio, Legazpi City &copy; OpenStreetMap;',
        updateWhenZooming: true,
        updateWhenIdle: false,
        keepBuffer: 3,
    }).addTo(this.map);

    var polygon = L.polygon([
      [13.143108, 123.727169],
      [13.144284, 123.728516],
      [13.145752, 123.730211],
      [13.147052, 123.731809],
      [13.149283, 123.732018],
      [13.150422, 123.732136],
      [13.150542, 123.729910],
      [13.150657, 123.727963],
      [13.149858, 123.727389],
      [13.149680, 123.727180],
      [13.148426, 123.727099],
      [13.148034, 123.726482],
      [13.147397, 123.725865],
      [13.147627, 123.725426],
      [13.146034, 123.723468],
      [13.145271, 123.724412],
      [13.144979, 123.724825],
      [13.144064, 123.725919],
      [13.143422, 123.726718],
      [13.143108, 123.727169]
    ], {
      color: 'blue',
      fillOpacity: 0.06
    }).addTo(this.map);

    // Zoom map to polygon bounds
    // this.map.fitBounds(polygon.getBounds());
    this.map.setMaxBounds(polygon.getBounds());
    this.map.options.maxBoundsViscosity = 1.0;

  this.map.on('move', () => {
    this.map.invalidateSize();
  });

  this.map.options.preferCanvas = true;

this.map.scrollWheelZoom.disable();

this.map.getContainer().addEventListener('wheel', (e: WheelEvent) => {
  if (e.ctrlKey) {
    e.preventDefault();
    this.map.scrollWheelZoom.enable();
  } else {
    this.map.scrollWheelZoom.disable();
  }
});

  }

}
