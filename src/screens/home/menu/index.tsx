import { Text, View } from 'react-native';
import React, { useState } from 'react';
import { Container, SafeAreaContainer } from '../../../libraries/components/views';
import { TabHeaders } from '../../../libraries/components/headers';
import Popover, { PopoverPlacement } from 'react-native-popover-view';
import { ButtonL } from '../../../libraries/components/buttons';
import { useNavigation } from '@react-navigation/native';

const Menu: React.FC = () => {
  const [showPopover, setShowPopover] = useState(false);
  const navigation = useNavigation();
  const handlePress = () => {
    setShowPopover(true);
  };
  return (
    <SafeAreaContainer>
      <TabHeaders
        name="Menu"
        leftIconActive
        leftIcon="dots-vertical-circle-outline"
        leftIconPress={handlePress}
        MIcon
      />
      <Container>
        <Text>Others</Text>
        <Popover
          isVisible={showPopover}
          onRequestClose={() => setShowPopover(false)}
          placement={PopoverPlacement.TOP}
          // eslint-disable-next-line react-native/no-inline-styles
          popoverStyle={{
            width: 250,
            height: 150,
            justifyContent: 'center',
            alignItems:'center',
          }}
        >
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '100%',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ButtonL
              onPress={async () => {
                navigation.navigate('Logout' as never);
                setShowPopover(false);
              }}
              name="Log out"
            />
          </View>
        </Popover>
      </Container>
    </SafeAreaContainer>

  );
};

export default Menu;
