//Not sure if we will need all of these imports but added them since it seems like most of the other screens import them
import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
//I looked it up and seems like this is one way to handle the QR code scan
import { RNCamera } from 'react-native-camera';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Text from '../../Components/Text';
//still need to create the CSS file
import {getStyles} from './defaultCSS';
import { useFontContext } from '../../Contexts/FontContext';
import { useAuth } from '../../Components/Authentication/AuthProvider';
import ProtectedRoute from '../../Components/Authorization/ProtectedRoute';

const QRCodeScanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [result, setResult] = useState(null);
  
    useEffect(() => {
      const getPermission = async () => {
        const permission = await RNCamera.requestPermissions();
        setHasPermission(permission ='granted');
      };
      getPermission();
    }, []);
  
    const handleScan = ({ data }) => {
      setScanned(true);
      setResult(data);
    };
  
    if (hasPermission === null) {
      return <Text>Requesting permission...</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View>
        <RNCamera
          style={{ flex: 1 }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.auto}
          onScan={handleScan}
        >
          {scanned && (
            <Text>
              Scanned result: {result.data}
            </Text>
          )}
        </RNCamera>
      </View>
    );
  };
  
  export default QRCodeScanner;