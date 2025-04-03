import { Icon, createIcon } from "@/components/ui/icon";
import { Path } from "react-native-svg";

const ProfileIconComponent = createIcon({
    viewBox: "0 0 32 32",
    path: (
        <>
        <Path d="M16 2C12.686 2 10 4.686 10 8C10 11.314 12.686 14 16 14C19.314 14 22 11.314 22 8C22 4.686 19.314 2 16 2zM16 16C10.486 16 6 20.486 6 26C6 27.104 6.896 28 8 28H24C25.104 28 26 27.104 26 26C26 20.486 21.514 16 16 16z"         
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round" />
        </>
    ),
});

const ProfileIcon = (props: any) => {
    return <Icon as={ProfileIconComponent} {...props} />;
};

export default ProfileIcon;
