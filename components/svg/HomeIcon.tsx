import { Icon, createIcon } from "@/components/ui/icon";
import { Path } from "react-native-svg";

const HomeIconComponent = createIcon({
  viewBox: "0 0 24 24",
  path: (
    <>
      <Path d="M12 2L2 12h3v8h5v-6h6v6h5v-8h3L12 2z" fill="none"strokeWidth="1.5" />
    </>
  ),
});

const HomeIcon = (props: any) => {
  return <Icon as={HomeIconComponent} {...props} />;
};

export default HomeIcon;
