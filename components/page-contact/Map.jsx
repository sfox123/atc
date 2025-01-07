import React from 'react';

function Map() {
  return (
    <div className="google-map">
      <iframe
        id="gmap_canvas"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5924838000587!2d79.86390397395954!3d6.939209618195078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259025ebc661b%3A0x8bfda43567086867!2sAsia%20Trade%20Centre%20(Aluminium%20suppliers)!5e0!3m2!1sen!2slk!4v1736222125101!5m2!1sen!2slk"
      ></iframe>
    </div>
  );
}

export default Map;
