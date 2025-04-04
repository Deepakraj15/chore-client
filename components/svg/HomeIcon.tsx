import { Icon, createIcon } from "@/components/ui/icon";
import { Path } from "react-native-svg";
	
const HomeIconComponent = createIcon({
  
    viewBox: '0 0 32 32',
    path: (
        <>
            <Path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12
            2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 
            13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z" fill="currentColor"></Path>
        </>
    ),
});

const HomeIcon = (props:any) => {
    return (
        <Icon as={HomeIconComponent} {...props} />
    );
};

export default HomeIcon;