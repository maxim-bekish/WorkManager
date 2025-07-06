import StyleText from '@/components/StyleText';
import { BASE, COLORS } from '@/constants/ui';
import { StyleSheet, View } from 'react-native';

type HeaderProps = {
	avatar: string;
};

const Header: React.FC<HeaderProps> = ({ avatar }) => {
	return (
		<>
			<View style={styles.container}>
				<StyleText variant='2xl'>Кабинет</StyleText>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: BASE.PADDING.DEFAULT * 6,
		paddingHorizontal: BASE.PADDING.DEFAULT * 2,
		backgroundColor: COLORS.BLACK_90,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.WHITE_30,
	},
});
export default Header;
