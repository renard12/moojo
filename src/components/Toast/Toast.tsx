import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import ToastMessage, {
  ToastConfig,
  ToastConfigParams,
} from 'react-native-toast-message';

import { scaleByHeight, scaleByWidth } from 'shared/utils/normalize';

type ToastVariantProps = Pick<ToastConfigParams<any>, 'text1' | 'hide'>;

const BaseToast = ({
  text1,
  backgroundColor = '#0d191c',
}: ToastVariantProps & { backgroundColor?: string }) => (
  <View style={[styles.container, { backgroundColor }]}>
    <Text style={styles.text}>{text1}</Text>
  </View>
);

const ErrorToast = ({ text1, hide }: ToastVariantProps) => (
  <BaseToast text1={text1} hide={hide} backgroundColor="red" />
);

const DefaultToast = ({ text1, hide }: ToastVariantProps) => (
  <BaseToast text1={text1} hide={hide} backgroundColor="grey" />
);

const toastConfig: ToastConfig = {
  success: DefaultToast,
  error: ErrorToast,
};

type ToastProps = { position?: 'top' | 'bottom' };

export const Toast = ({ position = 'bottom' }: ToastProps) => (
  <ToastMessage
    position={position}
    config={toastConfig}
    visibilityTime={2000}
    bottomOffset={scaleByHeight(16)}
    keyboardOffset={scaleByHeight(16)}
  />
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: Platform.OS === 'ios' ? 8 : 4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scaleByWidth(16),
    paddingVertical: scaleByHeight(16),
    marginHorizontal: scaleByWidth(16),
  },
  text: {
    flex: 1,
    paddingRight: scaleByWidth(16),
  },
});
