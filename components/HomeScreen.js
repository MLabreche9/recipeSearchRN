import { useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Pressable,
	Keyboard,
	ActivityIndicator,
	FlatList,
	Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
	const [recipes, setRecipes] = useState();
	const [searchQuery, setSearchQuery] = useState('');
	const [numberOfRecipes, setNumberOfRecipes] = useState('1');
	const [loading, setLoading] = useState(false);

	const APP_ID = '9c48b27b';
	const APP_KEY = `76a8118cd0a522714f9fa900a50095ba`;
	const apiURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&from0&to=${numberOfRecipes}&calories=591-722&health=alcohol-free`;

	async function apiCall() {
		setLoading(true);
		let response = await fetch(apiURL);
		let respJson = await response.json();
		setRecipes(respJson.hits);
		setLoading(false);
		Keyboard.dismiss();
		setSearchQuery('');
	}
	useEffect(() => {
		setLoading(true);
		apiCall();
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.homeText}>What recipe would you like to search?</Text>
			<View style={styles.twoContainer}>
				<TextInput
					placeholder='Search Recipe'
					style={styles.inputField}
					onChangeText={(text) => setSearchQuery(text)}
				/>
				<TextInput
					onChangeText={(text) => setNumberOfRecipes(text)}
					style={[
						styles.inputField,
						{
							width: '20%',
							fontSize: 18,
							marginLeft: 15,
							color: '#008080',
							fontWeight: 'bold'
						}
					]}
					value={numberOfRecipes}
					keyboardType='number-pad'
				/>
			</View>
			<Pressable onPress={apiCall} style={styles.button} title='submit'>
				<Text style={styles.buttonText}>Search</Text>
			</Pressable>

			<SafeAreaView style={{ flex: 1 }}>
				{loading ? (
					<ActivityIndicator size='large' color='#008080' />
				) : (
					<FlatList
						style={styles.recipes}
						data={recipes}
						renderItem={({ item }) => (
							<View style={styles.recipe}>
								<Image
									style={styles.image}
									source={{ uri: `${item.recipe.image}` }}
								/>
								<View style={{ padding: 20, flexDirection: 'row' }}>
									<Text style={styles.label}>{item.recipe.label}</Text>
									<Pressable
										onPress={() => {
											navigation.navigate('Details', { recipe: item.recipe });
										}}
									>
										<Text
											style={{ marginLeft: 50, fontSize: 20, color: '#008080' }}
										>
											Details
										</Text>
									</Pressable>
								</View>
							</View>
						)}
						keyExtractor={(item, index) => index.toString()}
					/>
				)}
			</SafeAreaView>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20
	},
	homeText: {
		fontSize: 23,
		fontWeight: '800',
		width: '90%',
		color: '#008080'
	},
	twoContainer: {
		flexDirection: 'row'
	},
	inputField: {
		height: '120%',
		width: '65%',
		backgroundColor: 'white',
		borderRadius: 20,
		marginTop: 10,
		paddingLeft: 15
	},
	buttons: {
		flexDirection: 'row'
	},
	button: {
		backgroundColor: '#008080',
		width: '90%',
		alignItems: 'center',
		margin: 15,
		height: 35,
		borderRadius: 15,
		justifyContent: 'center',
		marginTop: 25
	},
	buttonText: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold'
	},
	image: {
		width: '100%',
		height: 200,
		borderRadius: 20
	},
	label: {
		fontSize: 15,
		width: '60%',
		color: '#008080',
		fontWeight: '700'
	},
	recipe: {
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 5,
		borderRadius: 20,
		backgroundColor: 'white',
		margin: 10,
		marginBottom: 40
	}
});
