import React from 'react';
import { Modal, View, FlatList } from 'react-native';
import { StyleButton } from '@/components';
import { BASE, COLORS } from '@/constants/ui';

const actions = [
  { id: 1, title: 'Рабочий' },
  { id: 2, title: 'Рабочий x2' },
  { id: 0, title: 'Выходной' },
];

interface Props {
  visible: boolean;
  onClose: () => void;
  onSelectStatus: (status: number) => void;
}

export  function ActionModal({ visible, onClose, onSelectStatus }: Props) {
  return (
    <Modal visible={visible} animationType='fade' transparent onRequestClose={onClose}>
      <View style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <View style={{
          backgroundColor: COLORS.BLACK_80,
          borderRadius: 12,
          width: '50%',
        }}>
          <FlatList
            data={actions}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <StyleButton
                label={item.title}
                onPress={() => {
                  onSelectStatus(item.id);
                  onClose();
                }}
                style={{
                  paddingVertical: BASE.PADDING.DEFAULT * 3,
                  paddingHorizontal: BASE.PADDING.DEFAULT * 2,
                }}
              />
            )}
            ItemSeparatorComponent={() => (
              <View style={{ width: '100%', height: 1, backgroundColor: COLORS.BLACK_50 }} />
            )}
          />
          <View style={{ padding: BASE.PADDING.DEFAULT }}>
            <StyleButton onPress={onClose} variant='save' label='Закрыть' />
          </View>
        </View>
      </View>
    </Modal>
  );
}
