import React, { FC } from 'react';
import { Button, Dialog, Portal, Text } from 'react-native-paper';

interface ModalProps {
  visible: boolean;
  hideDialog: () => void;
  onYesPressed: () => void;
}

export const Modal: FC<ModalProps> = ({
  visible,
  hideDialog,
  onYesPressed,
}) => {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Warning</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">
            Are you really want to proceed with claiming the offer?{' '}
          </Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onYesPressed}> Yes</Button>
          <Button onPress={hideDialog}>No</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
