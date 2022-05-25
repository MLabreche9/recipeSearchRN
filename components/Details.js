import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Details = ({ route }) => {
	const { recipe } = route.params;

	return (
		<ScrollView>
			<View style={styles.details}>
				<View style={styles.item}>
					<Text style={{ fontSize: 22, color: '#008080', fontWeight: '800' }}>
						Ingredients:
					</Text>
					<Text style={styles.ingredients}>{`${recipe.ingredients.map(
						(item) => item['food']
					)}`}</Text>
				</View>
				<View style={styles.item}>
					<Text style={{ fontSize: 22, color: '#008080', fontWeight: '800' }}>
						Food Category:
					</Text>
					<Text style={styles.ingredients}>{`${recipe.ingredients.map(
						(item) => item['foodCategory']
					)}`}</Text>
				</View>
				<View style={styles.item}>
					<Text style={{ fontSize: 22, color: '#008080', fontWeight: '800' }}>
						Calories:
					</Text>
					<Text style={styles.ingredients}>{`${recipe.calories}`}</Text>
				</View>
				<View style={styles.item}>
					<Text style={{ fontSize: 22, color: '#008080', fontWeight: '800' }}>
						Label:
					</Text>
					<Text style={styles.ingredients}>{`${recipe.label}`}</Text>
				</View>
				<View style={styles.item}>
					<Text style={{ fontSize: 22, color: '#008080', fontWeight: '800' }}>
						Meal Type:
					</Text>
					<Text style={styles.ingredients}>{`${recipe.mealType}`}</Text>
				</View>
				<View style={styles.item}>
					<Text style={{ fontSize: 22, color: '#008080', fontWeight: '800' }}>
						Description:
					</Text>
					<Text style={styles.ingredients}>{`${recipe.ingredientLines}`}</Text>
				</View>
				<View style={styles.item}>
					<Text style={{ fontSize: 22, color: '#008080', fontWeight: '800' }}>
						Diet Label:
					</Text>
					<Text style={styles.ingredients}>{`${recipe.dietlabels}`}</Text>
				</View>
				<View style={styles.item}>
					<Text style={{ fontSize: 22, color: '#008080', fontWeight: '800' }}>
						Cuisine Type:
					</Text>
					<Text style={styles.ingredients}>{`${recipe.cuisineType}`}</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default Details;

const styles = StyleSheet.create({
	details: {
		marginBottom: 30,
		padding: 5
	},
	ingredients: {
		fontSize: 20,
		color: '#008080'
	},
	item: {
		shadowColor: 'black',
		shadowOpacity: 0.26,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		elevation: 5,
		borderRadius: 20,
		backgroundColor: 'white',
		margin: 10,
		padding: 10,
		flexDirection: 'row',
		flexWrap: 'wrap'
	}
});
