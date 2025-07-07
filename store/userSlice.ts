import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserItem = {
	id: string;
	title: string;
	value: string;
	placeholder?: string;
	require?: boolean;
};

type UserState = {
	data: UserItem[];
};

const initialState: UserState = {
	data: [
		{ id: '1', title: 'Имя', value: '', placeholder: 'Введите Имя' },
		{ id: '2', title: 'Фамилия', value: '', placeholder: 'Введите Фамилию' },
		{ id: '3', title: 'Оклад 1', value: '', placeholder: 'Оклад на испытательный срок' },
		{ id: '4', title: 'Оклад 2', value: '', placeholder: 'Оклад после испытательного срока' },
		{ id: '5', title: 'Старт', value: '', placeholder: 'Старт работы', require: true },
		{ id: '6', title: 'Почта', value: '', placeholder: 'Ваша почта', require: true },
	],
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		updateField(state, action: PayloadAction<{ id: string; value: string }>) {
			state.data = state.data.map(item =>
				item.id.toString() === action.payload.id.toString()
					? { ...item, value: action.payload.value }
					: item
			);
		},
		resetUser(state) {
			state.data = initialState.data;
		},
	},
});

export const { updateField, resetUser } = userSlice.actions;
export default userSlice.reducer;
