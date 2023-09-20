import { Text } from "react-native";

const MainText = (props) => {
    return (
       <Text style={{fontSize:25,fontWeight:700,color:"gray"}}>
{props.text}
       </Text>
    );
}

export default MainText;
