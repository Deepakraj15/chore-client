import React from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MessageCircle, Repeat2, UserPlus } from 'lucide-react-native';
import { Box } from './ui/box';
import { HStack } from './ui/hstack';
import { VStack } from './ui/vstack';
import { Avatar } from './ui/avatar';
import { Badge } from './ui/badge';
import { Divider } from './ui/divider'; 

type PostCardProps = {
  postedBy: {
    name: string;
    avatarUrl?: string;
  };
  title: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    label: string;
  };
  mode: 'online' | 'offline';
  tags: string[];
  stats: {
    reshares: number;
    signups: number;
    comments: number;
  };
};

const PostCard = ({
  postedBy,
  title,
  description,
  location,
  mode,
  tags,
  stats,
}: PostCardProps) => {
  return (
    <Box className="bg-white dark:bg-zinc-900 p-4 rounded-lg shadow-soft-1 mb-4">
      {/* Header */}
      <HStack className="items-center space-x-2 mb-2">
        <Avatar size="md" source={{uri:postedBy.avatarUrl}}/>
        <Text className="text-base font-medium text-gray-800 dark:text-white">
          {postedBy.name}
        </Text>
        <Badge
          size="sm"
          variant="solid"
          action={mode === 'online' ? 'success' : 'muted'}
          className="ml-auto"
        >
          {mode.toUpperCase()}
        </Badge>
      </HStack>

      {/* Title & Description */}
      <VStack className="space-y-1 mt-3">
        <Text className="text-lg font-semibold text-primary dark:text-white">
          {title}
        </Text>
        <Text className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </Text>
      </VStack>

      {/* Map */}
      <View className="h-[150px] mt-3 overflow-hidden rounded-md">
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker coordinate={{ latitude: location.lat, longitude: location.lng }} />
        </MapView>
      </View>
      <Text className="text-xs text-gray-500 mt-1">{location.label}</Text>

      {/* Tags */}
      <HStack className="flex-wrap mt-3 space-x-1 space-y-1">
        {tags.map((tag, idx) => (
          <Badge
            key={idx}
            size="sm"
            variant="outline"
            action="info"
            className="mr-2 mb-1"
          >
            #{tag}
          </Badge>
        ))}
      </HStack>

      {/* Divider */}
      <Divider className="my-3" />

      {/* Stats */}
      <HStack className="justify-between items-center mt-2">
        <HStack className="space-x-1 items-center">
          <Repeat2 size={16} color="gray" />
          <Text className="text-xs text-gray-500">{stats.reshares} Reshares</Text>
        </HStack>
        <HStack className="space-x-1 items-center">
          <UserPlus size={16} color="gray" />
          <Text className="text-xs text-gray-500">{stats.signups} Signed Up</Text>
        </HStack>
        <HStack className="space-x-1 items-center">
          <MessageCircle size={16} color="gray" />
          <Text className="text-xs text-gray-500">{stats.comments} Comments</Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default PostCard;
