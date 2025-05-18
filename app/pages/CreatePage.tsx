import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { VStack } from "@/components/ui/vstack";
import { Input, InputField } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Ipost } from "@/utils/Interfaces";
import { Divider } from "@/components/ui/divider";
import { HStack } from "@/components/ui/hstack";
import MapPicker from "@/components/MapPicker";
import GoogleMapComponent from "@/components/GoogleMapComponent";
import { getData } from "@/utils/AsyncStorageHelper";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [locationLabel, setLocationLabel] = useState("");
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  const [mode, setMode] = useState<"online" | "offline">("online");
  const [tags, setTags] = useState<string>("");
  const [openMap, setOpenMap] = useState(false);

  const handleSubmit = () => {
    if (lat === null || lng === null) {
      alert("Please pick a location");
      return;
    }

    const post: Ipost = {
      postedBy: getData("username"),
      title,
      description,
      location: {
        lat,
        lng,
        label: locationLabel,
      },
      mode,
      tags: tags.split(",").map((t) => t.trim()),
      stats: {
        reshares: 0,
        signups: 0,
        comments: 0,
      },
    };

    console.log("Post created:", post);
    // API call or navigation here
  };

  return (
    <ScrollView className="flex-1 bg-background-light dark:bg-background-dark px-4 py-6">
      {openMap ? (
        <MapPicker
          onLocationSelect={(latitude, longitude) => {
            setLat(latitude);
            setLng(longitude);
            setOpenMap(false);
          }}
        />
        // <GoogleMapComponent/>
      ) : (
        <>
          <Heading size={"lg"} className="text-primary dark:text-white mb-4">
            Create New Post
          </Heading>

          <VStack space="md">
            <Input className="min-w-[250px] border border-secondary dark:border-secondary bg-surface-light dark:bg-surface-dark h-[40px] px-3 py-3 font-bold">
              <InputField
                placeholder="Title"
                className="text-text-base dark:text-text-inverted placeholder:text-text-muted dark:placeholder:text-text-inverted"
                value={title}
                onChangeText={setTitle}
              />
            </Input>

            <Input className="min-w-[250px] border border-secondary dark:border-secondary bg-surface-light dark:bg-surface-dark h-[40px] px-3 py-3 font-bold">
              <InputField
                placeholder="Description"
                className="text-text-base dark:text-text-inverted placeholder:text-text-muted dark:placeholder:text-text-inverted"
                value={description}
                onChangeText={setDescription}
                multiline
              />
            </Input>

            <TouchableOpacity onPress={() => setOpenMap(true)}>
              <Text className="text-blue-600 underline">
                {lat && lng
                  ? `📍 Location: (${lat.toFixed(5)}, ${lng.toFixed(5)})`
                  : "📍 Pick Location on Map"}
              </Text>
            </TouchableOpacity>

            <Input className="min-w-[250px] border border-secondary dark:border-secondary bg-surface-light dark:bg-surface-dark h-[40px] px-3 py-3 font-bold">
              <InputField
                placeholder="Location Label (City, Venue...)"
                value={locationLabel}
                onChangeText={setLocationLabel}
                className="text-text-base dark:text-text-inverted placeholder:text-text-muted dark:placeholder:text-text-inverted"
              />
            </Input>

            <HStack>
              <Text className="text-sm text-gray-800 dark:text-white">
                Mode: {mode}
              </Text>
              <Switch
                value={mode === "online"}
                onToggle={() =>
                  setMode((prev) => (prev === "online" ? "offline" : "online"))
                }
              />
            </HStack>

            <Input className="min-w-[250px] border border-secondary dark:border-secondary bg-surface-light dark:bg-surface-dark h-[40px] px-3 py-3 font-bold">
              <InputField
                placeholder="Tags (comma-separated)"
                value={tags}
                onChangeText={setTags}
                className="text-text-base dark:text-text-inverted placeholder:text-text-muted dark:placeholder:text-text-inverted"
              />
            </Input>

            <Divider />

            <Button onPress={handleSubmit} className="mt-4 bg-primary">
              <Text className="text-text-base dark:text-text-inverted ">
                Create Post
              </Text>
            </Button>
          </VStack>
        </>
      )}
    </ScrollView>
  );
};

export default CreatePage;
