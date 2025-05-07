import { ActivityIndicator, View } from 'react-native';

const Loader = () => (
  <View className="absolute top-0 left-0 right-0 botto-0 justify-center items-center bg-white/50 z-50">
    <ActivityIndicator size="large" color="#007AFF" />
  </View>
);

export default Loader;
