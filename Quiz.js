import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";

const Question = ({ image, name, option1, option2, option3, onAnswerChange }) => {
	const [answer, setAnswer] = useState("");

	return (
		<View style={styles.questionContainer}>
			<Image source={image} style={styles.image} accessibilityLabel={name} />
			<Text style={styles.textRow}>What type of pasta is this?</Text>
			<Picker
				selectedValue={answer}
				onValueChange={(value) => {
					setAnswer(value);
					onAnswerChange(name, value);
				}}>
				<Picker.Item label="Select an option..." value="" />
				<Picker.Item label={option1} value={option1} />
				<Picker.Item label={option2} value={option2} />
				<Picker.Item label={option3} value={option3} />
			</Picker>
		</View>
	);
};

export default function AllQuestion() {
	const [answers, setAnswers] = useState({});

	const handleAnswerChange = (questionName, selectedAnswer) => {
		setAnswers(prev => ({ ...prev, [questionName]: selectedAnswer }));
	};

	const handleSubmit = () => {
		let score = 0;
		if (answers['Farfalle'] === 'Farfalle') score++;
		if (answers['Mafaldine'] === 'Mafaldine') score++;
		if (answers['Fettuccine'] === 'Fettuccine') score++;

		Alert.alert("Result", "You have " + score + " correct answer(s)!");
	};

	return (
		<View style={styles.container}>
			<Question
				image={require('./img/Farfalle.jpg')}
				name={'Farfalle'}
				option1={'Farfalle'}
				option2={'Fettuccine'}
				option3={'Mafaldine'}
				onAnswerChange={handleAnswerChange}
			/>
			<Question
				image={require('./img/Mafaldine.jpg')}
				name={'Mafaldine'}
				option1={'Farfalle'}
				option2={'Fettuccine'}
				option3={'Mafaldine'}
				onAnswerChange={handleAnswerChange}
			/>
			<Question
				image={require('./img/Fettuccine.jpg')}
				name={'Fettuccine'}
				option1={'Farfalle'}
				option2={'Fettuccine'}
				option3={'Mafaldine'}
				onAnswerChange={handleAnswerChange}
			/>
			<Button title="SUBMIT ANSWERS" onPress={handleSubmit} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		flexDirection: 'column',
		flex: 1,
		alignItems: 'center',
		borderBottomWidth: 1,
	},
	questionContainer: {
		marginBottom: 20,
		flex: 1,
		borderBottomWidth: 1,
	},
	image: {
		width: 100,
		height: 100,
		alignSelf: 'center',
	},
	textRow: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 10,
	},
});