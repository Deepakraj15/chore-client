import React from "react";
import { View } from "react-native";
import { Alert, AlertIcon, AlertText } from "./ui/alert";
import { CheckCircleIcon } from "./ui/icon";
import { TriangleAlert, CircleX, Info, MinusCircle } from "lucide-react-native";

interface AlertState {
  message: string;
  type: "error" | "warning" | "success" | "info" | "muted";
}

const alertConfig = {
  success: {
    icon: CheckCircleIcon,
    iconClass: "text-accent-green dark:text-accent-green",
    textClass: "text-accent-green dark:text-accent-green",
    bgClass: "bg-background-light dark:bg-background-dark",
  },
  warning: {
    icon: TriangleAlert,
    iconClass: "text-accent-yellow dark:text-accent-yellow",
    textClass: "text-accent-yellow dark:text-accent-yellow",
    bgClass: "bg-background-light dark:bg-background-dark",
  },
  error: {
    icon: CircleX,
    iconClass: "text-accent-red dark:text-accent-red",
    textClass: "text-accent-red dark:text-accent-red",
    bgClass: "bg-background-light dark:bg-background-dark",
  },
  info: {
    icon: Info,
    iconClass: "text-accent-blue dark:text-accent-blue",
    textClass: "text-accent-blue dark:text-accent-blue",
    bgClass: "bg-background-light dark:bg-background-dark",
  },
  muted: {
    icon: MinusCircle,
    iconClass: "text-text-muted dark:text-text-muted",
    textClass: "text-text-muted dark:text-text-muted",
    bgClass: "bg-background-light dark:bg-background-dark",
  },
} as const;

const AlertComponent = ({ message, type }: AlertState) => {
  const { icon: Icon, iconClass, textClass, bgClass } = alertConfig[type];

  return (
    <View className="absolute inset-0 z-50 justify-center items-center pointer-events-none">
      <Alert
        action={type}
        className={`flex-row items-center space-x-2 px-4 py-3 rounded-lg shadow-hard-2 ${bgClass}`}
      >
        <AlertIcon as={Icon} className={iconClass} />
        <AlertText className={`font-medium ${textClass}`}>{message}</AlertText>
      </Alert>
    </View>
  );
};

export default AlertComponent;
