import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
} from 'react-native';
import AllQuestion from './Quiz'
import {FontAwesome6} from "@expo/vector-icons";


/*
// Exercise  1
const InputBox = ({label, onChangeText})=>{
	return(
		<View>
			<Text>{label}</Text>
			<TextInput style={{borderWidth: 1}} onChangeText={onChangeText}/>
		</View>
	);
}

const MyApp = () => {
	const [type, setType] = useState("Guest");
	const [name, setName] = useState("");
	return(
		<View>
			<Text>UserType:</Text>
			<Picker onValueChange={(value) => setType(value)}>
				<Picker.Item label="Guest" value="Guest"/>
				<Picker.Item label="Admin" value="Admin"/>
			</Picker>
			<InputBox label={"User Name:"} onChangeText={(text) => setName(text)}/>
			<Text>Password:</Text>
			<TextInput style={{borderWidth: 1}}/>
			<TouchableOpacity onPress={() => {
					const msg = 'Welcome ' + type + ' ' + name;
					ToastAndroid.show(msg, ToastAndroid.SHORT);
				}
			}>
				<Text>LOG IN</Text>
			</TouchableOpacity>
		</View>
	);
}
*/

const Header = ()=>{
	return(
		<View style={styles.header}>
			<FontAwesome6 name={'utensils'} style={styles.icon}/>
			<Text style={styles.headerText}>Pasta Quiz</Text>
		</View>
	);
}


export default function App() {
	return (
		<ScrollView style={styles.container}>
			<StatusBar style="auto" />
			<Header />
			<AllQuestion />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	header: {
		marginTop: 25,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderStyle: 'dashed',
	},
	icon: {
		marginRight: 8,
		fontSize: 20,
	},
	headerText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#222',
	},

	container: {
		flex: 1,
		backgroundColor: 'orange',
	},
});
