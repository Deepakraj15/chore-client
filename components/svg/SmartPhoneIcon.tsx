import { Icon, createIcon } from "@/components/ui/icon";
import { Path, Rect, Circle } from "react-native-svg";

const SmartphoneIconComponent = createIcon({
  viewBox: "0 0 24 24", 
  path: (
    <>
      <Rect width="14" height="20" x="5" y="2" rx="2" ry="2" fill="none" stroke="black" strokeWidth="1" />
      
      <Rect width="10" height="16" x="7" y="4" rx="1" ry="1" fill="none" stroke="black" strokeWidth="1" />
      
      <Circle cx="12" cy="18" r="1" fill="black" />
    </>
  ),
});

const SmartphoneIcon = (props: any) => {
  return <Icon as={SmartphoneIconComponent} {...props} stroke="black" />;
};

export default SmartphoneIcon;
