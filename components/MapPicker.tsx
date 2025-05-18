import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator, useColorScheme } from "react-native";
import MapView, { Marker, MapPressEvent, Region } from "react-native-maps";
import * as Location from "expo-location";

type MapPickerProps = {
  onLocationSelect: (lat: number, lng: number) => void;
};

const MapPicker: React.FC<MapPickerProps> = ({ onLocationSelect }) => {
  const [initialRegion, setInitialRegion] = useState<Region | undefined>(undefined);
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCurrentLocation = async () => {
      try {
        const { status: permissionStatus } = await Location.requestForegroundPermissionsAsync();

        if (permissionStatus !== "granted") {
          alert("Location permission denied. Please enable location services.");
          return;
        }

        const location = await Location.getCurrentPositionAsync({});
        console.log("Location fetched:", location.coords);
        
        if (location.coords) {
          const region: Region = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          };

          setInitialRegion(region);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching location:", error);
        setLoading(false);
      }
    };

    getCurrentLocation();
  }, []);

  const handleMapPress = (event: MapPressEvent) => {
    setSelectedLocation(event.nativeEvent.coordinate);
  };

  const handleConfirm = () => {
    if (selectedLocation) {
      onLocationSelect(selectedLocation.latitude, selectedLocation.longitude);
    }
  };

  if (loading) {
    return (
      <View className={"flex-1 justify-center items-center  dark:bg-background-light bg-background-light"}>
        <ActivityIndicator size="large" />
        <Text className={"mt-4 text-text-muted  dark:text-text-inverted text-text-base"}>
          Loading map...
        </Text>
      </View>
    );
  }

  if (!initialRegion) {
    console.log(initialRegion);
    return (
      <View className={"flex-1 justify-center items-center  dark:bg-background-dark bg-background-light"}>
        <Text className="text-error text-lg">Failed to load map. Please try again.</Text>
      </View>
    );
  }

  return (
    <View className={"w-full h-full flex-1 dark:bg-background-light bg-background-light"}>
      <MapView
        className="w-full h-full"
        region={initialRegion}
        onPress={handleMapPress}
        showsUserLocation
        provider="google"
      >
        {selectedLocation && <Marker coordinate={selectedLocation} />} 
      </MapView>

      {selectedLocation && (
        <View className={"absolute bottom-6 left-4 right-4 p-4 rounded-lg shadow-soft-3  dark:bg-accent-muted bg-white"}>
          <Text className={"text-sm  dark:text-text-inverted text-text-base"}>
            Lat: {selectedLocation.latitude.toFixed(5)} | Lng: {selectedLocation.longitude.toFixed(5)}
          </Text>
          <TouchableOpacity
            onPress={handleConfirm}
            className="mt-3 py-2 px-4 rounded bg-primary"
          >
            <Text className="text-white text-center font-semibold">Confirm Location</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default MapPicker;
