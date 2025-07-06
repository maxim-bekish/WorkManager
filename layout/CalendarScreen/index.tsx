import { Calendar } from 'react-native-calendars';
import { View } from 'react-native';

export default function CalendarScreen() {
	return (
		<View style={{ flex: 1 }}>
			<Calendar
				// начальная выбранная дата
				current={new Date().toISOString().split('T')[0]}
				// функция при выборе даты
				onDayPress={day => {
					console.log('selected day', day);
				}}
				// стилизация
				theme={{
					backgroundColor: '#000',
					calendarBackground: '#000',
					dayTextColor: '#fff',
					monthTextColor: '#fff',
					selectedDayBackgroundColor: '#1e90ff',
					todayTextColor: '#1e90ff',
				}}
			/>
		</View>
	);
}
