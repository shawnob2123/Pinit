import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Input } from '@rneui/themed';
import { useModalStore, useDaySelector } from '../../../store/store';
import WeekdayStrip from '../../../components/Weekday/WeekdayStrip';
import DatePicker from 'react-native-date-picker';
import CompoundType from '../../../components/CompoundType/CompoundType';
import Button from '../../../components/Button/Button';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useCompoundTypeStore } from '../../../store/store';


const AddCompoundScreen = () => {

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const selectedDays = useDaySelector((state) => state.selectedDays);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const type = useCompoundTypeStore((state) => state.selected);
 
  const { setFormData: setData } = useModalStore((state) => state);

  const handleDateSelection = (date) => {
    setShowDatePicker(true);

    if (startDate < endDate) {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 110 }}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Add New Cycle</Text>
        <View style={{ paddingTop: 20 }}>
            <CompoundType type={type.value}/>
          <Input
            style={styles.input}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            label='Compound Used'
            labelStyle={styles.label}
            placeholder='Ex. Testosterone Cypionate'
            onChangeText={(text) =>
              setFormData({ ...formData, compoundUsed: text })
            }
          />
          <View style={styles.dosageContainer}>
            <Input
              style={[styles.input, { width: '25%' }]}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              label='Dosage'
              labelStyle={styles.label}
              placeholder='Ex. 250'
              onChangeText={(text) =>
                setFormData({ ...formData, dosage: text })
              }
            />
            <Input
              style={[styles.input, { width: '20%' }]}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              label='Dosage Unit'
              labelStyle={styles.label}
              placeholder='mg, g, mcg, oz'
              onChangeText={(text) =>
                setFormData({ ...formData, dosageUnit: text })
              }
            />
          </View>
          <Text style={[styles.label, { paddingLeft: 10, fontWeight: 'bold' }]}>
            Select Days
          </Text>
          <WeekdayStrip selectedDays={selectedDays} />
          <View
            style={{
              paddingTop: 20,
              width: '50%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Input
              style={styles.input}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              label='Start Date'
              labelStyle={styles.label}
              
              value={startDate.toLocaleDateString()}
              onFocus={() => setShowDatePicker(true)}
              onChangeText={setStartDate}
            />

            {showDatePicker && (
              <DatePicker
                date={startDate}
                mode='date'
                textColor='black'
                modal
                value={startDate}
                onDateChange={handleDateSelection}
                open={showDatePicker}
                onCancel={() => setShowDatePicker(false)}
                onConfirm={(date) => {
                  setShowDatePicker(false);
                  handleDateSelection(date);
                }}
              />
            )}
            <Input
              style={styles.input}
              value={endDate.toLocaleDateString()}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              label='End Date'
              labelStyle={styles.label}
              onFocus={() => setShowDatePicker(true)}
              onChangeText={setEndDate}
            />
          </View>
            {loading ? (
            <Loader
              loading={loading}
            />
          ) : (
              <View style={{paddingHorizontal: 20}}>
                <Button title='Add' onPress={null} />
                </View>
          )}
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddCompoundScreen;
