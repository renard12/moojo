import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import { scaleByHeight, scaleByWidth } from 'shared/utils/normalize';

interface CardProps extends PropsWithChildren {
  onItemPressed: (x: GestureResponderEvent) => void;
}

export const Card: FC<CardProps> = ({ children, onItemPressed }) => {
  return (
    <TouchableOpacity onPress={onItemPressed} style={styles.streakBox}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  streakBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowRadius: 12,
    shadowOpacity: 0.1,
    padding: scaleByWidth(8),
    marginBottom: scaleByHeight(8),
  },
});
