import React from 'react';
import {StyleSheet} from 'react-native';
import Navigation from '@navigation';
import {Provider} from 'react-redux';
import {persistor, store} from '@store/store';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={false}>
        <GestureHandlerRootView style={styles.flexOne}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});
