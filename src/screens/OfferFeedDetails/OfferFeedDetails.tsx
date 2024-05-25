import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useAppSelector } from 'shared/hooks/store';
import { scaleByHeight, scaleByWidth } from 'shared/utils/normalize';
import { Modal } from 'components/Modal';
import { ActivityIndicator, MD2Colors, Button } from 'react-native-paper';
import { useSimulateApiCallMutation } from 'shared/api/gspApi';

export const OfferFeedDetails = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [simulateApiCall, { isLoading }] = useSimulateApiCallMutation();

  const { retailerLogo, termsAndConditions } = useAppSelector(
    state => state.feedReducer.selectedOffer,
  );

  const closeDialog = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const openDialog = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const onClaimPressed = useCallback(() => {
    simulateApiCall();
    closeDialog();
  }, [closeDialog, simulateApiCall]);

  return (
    <>
      {isLoading && (
        <ActivityIndicator
          style={styles.spinner}
          animating={true}
          color={MD2Colors.red800}
        />
      )}
      <View style={styles.container}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={{
            uri: retailerLogo,
          }}
        />
        <View style={styles.description}>
          <Text style={styles.text}>{termsAndConditions}</Text>
          <Button mode="outlined" onPress={openDialog}>
            Claim Offer
          </Button>
        </View>
        <Modal
          onYesPressed={onClaimPressed}
          visible={isOpenModal}
          hideDialog={closeDialog}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: scaleByWidth(24),
  },
  logo: {
    flex: 1,
  },
  description: {
    flex: 1,
  },
  text: {
    marginBottom: scaleByHeight(16),
  },
  spinner: {
    height: '100%',
    width: '100%',
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignContent: 'center',
    position: 'absolute',
  },
});
