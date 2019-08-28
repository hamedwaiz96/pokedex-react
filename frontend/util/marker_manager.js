export default class MarkerManager {
    constructor(map, handleClick, image){
        this.map = map;
        this.handleClick = handleClick;
        this.image = image;
        this.markers ={};
    }

    updateMarkers(locations){
        const locsObj = {};
        locations.forEach(loc => locsObj[loc.id] = loc)

        locations
        .filter(loc => !this.markers[loc.id])
        .forEach(newLoc => this.createMarkerFromLoc(newLoc, this.handleClick))

        Object.keys(this.markers)
            .filter(locId => !locsObj[locId])
            .forEach(locId => this.removeMarker(this.markers[locId]))
    }

    createMarkerFromLoc(loc){
        var icon = {
            url: this.image, 
            scaledSize: new google.maps.Size(50, 50),
        }
        const position = new google.maps.LatLng(loc.lat, loc.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            icon,
            locId: loc.id
        });
        marker.addListener('click', () => this.handleClick(loc));
        this.markers[marker.locId] = marker;
    }

    removeMarker(marker){
        this.markers[marker.locId].setMap(null);
        delete this.markers[marker.locId];
    }
}