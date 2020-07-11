import React, {Component} from 'react';
import {Button, View, TextInput, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

class App extends Component {
  state = {
    isDatePickerVisible: false,
    value: '',
  };

  showDatePicker = () => {
    this.setState({
      isDatePickerVisible: true,
    });
  };

  hideDatePicker = () => {
    this.setState({
      isDatePickerVisible: false,
    });
  };

  handleConfirm = (date) => {
    const consoleData = moment(date).format('YYYY-MM-DD');
    this.setState({
      value: consoleData.toString(),
    });
    this.hideDatePicker();
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => console.log('sumendra')}>
          <TextInput
            pointerEvents="none"
            placeholder="enter"
            value={this.state.value}
          />
        </TouchableOpacity>
        <Button title="Show Date Picker" onPress={this.showDatePicker} />
        <DateTimePickerModal
          isVisible={this.state.isDatePickerVisible}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
        />
      </View>
    );
  }
}

export default App;
