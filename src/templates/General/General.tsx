import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { scaleByWidth } from 'shared/utils/normalize/normalize';

export const General: FC<PropsWithChildren> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaleByWidth(24),
    backgroundColor: 'gray',
  },
  headerContainer: {
    flex: 0.6,
  },
  childrenContainer: {
    flex: 2,
  },
});
