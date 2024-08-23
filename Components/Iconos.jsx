import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export function CircleInfo(props) {
  return <Entypo name="info-with-circle" size={24} color="white" {...props} />;
}

export default function HomeIcon(props) {
  return <FontAwesome name="home" size={24} color="white" {...props} />;
}

export function InfoIcon(props) {
  return <FontAwesome name="info" size={24} color="black" {...props} />;
}
