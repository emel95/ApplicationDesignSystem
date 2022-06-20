//  export default from '../storybook';
import {Input, RadioButton} from '../src/components';
import React, {useState} from 'react';
import {View} from 'react-native';
import styles from '../src/components/RadioButton/style';

const App = () => {
  const [user, setUser] = useState('');
  const data = [
    {value: '1', title: 'data 1'},
    {value: '2', title: 'data 2'},
  ];
  return (
    <View>
      <Input
        testID="text-input"
        value={user}
        onChangeText={setUser}
        placeholder={'type here'}
      />
      <RadioButton
        testID="radio-button"
        data={data}
        onPress={value => {
          console.log(data[value - 1].title);
        }}
        selectedStyle={styles.smallSelected}
        unselectedStyle={styles.bigUnselected}
      />
    </View>
  );
};
export default App;
