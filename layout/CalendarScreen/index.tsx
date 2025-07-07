import React, { useState } from 'react';
import { View } from 'react-native';
import { Calendar, LocaleConfig, DateData } from 'react-native-calendars';
import { COLORS } from '@/constants/ui';
import { CalendarHeader } from './CalendarHeader';
import { CalendarDay } from './CalendarDay';
import { ActionModal } from './ActionModal';
import RowItem from '../RowItem';

LocaleConfig.locales['ru'] = {
	monthNames: [
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь',
		'Июль',
		'Август',
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь',
	],
	monthNamesShort: [
		'Янв',
		'Фев',
		'Мар',
		'Апр',
		'Май',
		'Июн',
		'Июл',
		'Авг',
		'Сен',
		'Окт',
		'Ноя',
		'Дек',
	],
	dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
	dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	today: 'Сегодня',
};
LocaleConfig.defaultLocale = 'ru';

const today = new Date().toISOString().split('T')[0];

export default function CalendarScreen() {
	const [currentDate, setCurrentDate] = useState(today);
	const [selectedDate, setSelectedDate] = useState<string | null>(null);
	const [isModalVisible, setModalVisible] = useState(false);
	const [statuses, setStatuses] = useState<Record<string, number>>({});

	// Для Calendar
	const handleCalendarDayPress = (day: DateData) => {
		handleDayPress(day.dateString); // вызываем функцию, которая принимает string
	};

	// Для CalendarDay
	const handleDayPress = (dateString: string) => {
		setSelectedDate(dateString);
		setModalVisible(true);
	};

	const handleStatusSelect = (status: number) => {
		if (selectedDate) {
			setStatuses(prev => ({ ...prev, [selectedDate]: status }));
		}
	};

	const formatDate = (date: Date): string => date.toISOString().split('T')[0];

	const handleNextMonth = () => {
		const [year, month] = currentDate.split('-').map(Number);
		const date = new Date(year, month - 1, 1);
		date.setMonth(date.getMonth() + 1);
		setCurrentDate(formatDate(date));
	};

	const handlePrevMonth = () => {
		const [year, month] = currentDate.split('-').map(Number);
		const date = new Date(year, month - 1, 1);
		date.setMonth(date.getMonth() - 1);
		setCurrentDate(formatDate(date));
	};

	return (
		<View style={{ flex: 1, backgroundColor: COLORS.BLACK_100, paddingHorizontal: 16 }}>
			<View>
				<Calendar
					current={currentDate}
					firstDay={1}
					onDayPress={handleCalendarDayPress}
					hideArrows
					enableSwipeMonths
					renderHeader={date => {
						return (
							<CalendarHeader
								date={new Date(date.getFullYear(), date.getMonth(), 1)}
								onPrev={handlePrevMonth}
								onNext={handleNextMonth}
							/>
						);
					}}
					dayComponent={({ date, state }) => {
						if (!date) return null;
						return (
							<CalendarDay
								date={date}
								state={state}
								selectedDate={selectedDate}
								onPress={handleDayPress}
								statuses={statuses}
							/>
						);
					}}
					theme={{
						backgroundColor: COLORS.BLACK_100,
						calendarBackground: COLORS.BLACK_100,
						dayTextColor: COLORS.WHITE_100,
						monthTextColor: COLORS.WHITE_100,
						todayTextColor: COLORS.BLACK_100,
						arrowColor: COLORS.WHITE_100,
						textDayFontSize: 16,
						textMonthFontSize: 18,
						textDayHeaderFontSize: 14,
					}}
				/>

				<ActionModal
					visible={isModalVisible}
					onClose={() => setModalVisible(false)}
					onSelectStatus={handleStatusSelect}
				/>
			</View>
			<RowItem readonly id='32' title='День:' value='4 643 руб.' />
		</View>
	);
}
