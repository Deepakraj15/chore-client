import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const GoogleMapComponent: React.FC = () => {
  // Define the location you want to show on the map
  const location = {
    latitude: 37.7749, // Latitude for San Francisco
    longitude: -122.4194, // Longitude for San Francisco
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Google Map with Location</Text>
      <MapView
        style={styles.map}
        initialRegion={location} // Set the initial region to the specified location
        showsUserLocation={true} // Optionally show the user's location
        provider="google" // Use Google Maps as the provider
      >
        <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} title="San Francisco" />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default GoogleMapComponent;
