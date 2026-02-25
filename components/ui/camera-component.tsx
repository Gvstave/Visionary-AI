import { useCallback } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { Camera as VisionCamera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

export default function CameraComponent() {
  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back');

  const onRequestPermission = useCallback(async () => {
    await requestPermission();
  }, [requestPermission]);

  if (!hasPermission) {
    return (
      <View className='flex-1 Items-center justify-center gap-12'>
        <Text className='text-center'>Camera permission is required.</Text>
        <Pressable className='bg-backgroundDark px-4 py-5 border-backgroundDark border-px  rounded-sm' onPress={onRequestPermission}>
          <Text className='text-white font-bold'>Allow Camera</Text>
        </Pressable>
      </View>
    );
  }

  if (device == null) {
    return (
      <View className='flex-1 Items-center justify-center gap-12'>
        <ActivityIndicator size="large" />
        <Text>Loading camera...</Text>
      </View>
    );
  }

  return <VisionCamera style={StyleSheet.absoluteFill} device={device} isActive />;
}