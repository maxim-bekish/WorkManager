import { StyleIcon, StyleText } from '@/components';
import { BASE, COLORS } from '@/constants/ui';
import { useState } from 'react';

import { StyleSheet, View } from 'react-native';
type HeaderProps = {
	title?: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.content}>
					<StyleText variant='2xl'>{title}</StyleText>
					<View style={styles.avatar}>
						<StyleIcon color={COLORS.BLACK_100} name='User' />
					</View>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: BASE.PADDING.DEFAULT * 6,
		paddingHorizontal: BASE.PADDING.DEFAULT * 2,
		backgroundColor: COLORS.BLACK_90,
		borderBottomColor: COLORS.WHITE_30,
		borderBottomWidth: 1,
   
	},
	content: {
		paddingBlock: BASE.PADDING.DEFAULT,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	avatar: {
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: BASE.ROUND.DEFAULT,
		backgroundColor: COLORS.WHITE_100,
	},
});
export default Header;
