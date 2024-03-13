import React, { Component, useState, useEffect } from 'react';
import logo from '/Users/cansuozdizlekli/AwesomeProject/assets/icon.png';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function withSplashScreen(WrappedComponent) {
  return function SplashScreenWrapper(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000); // 3 saniye sonra ana bileşeni yükle

      return () => clearTimeout(timer); // Timer'ı temizle
    }, []);

    if (loading) {
      // Splash ekranını göster
      return (
        <View style={{ flex: 1, justifyContent: 'center', width: '100%', height: '100%' }}>
          <View style={{ marginTop: 190 }}>
            <Image source={require('/Users/cansuozdizlekli/AwesomeProject/assets/splash-icon.png')} style={{ width: '100%', height: '70%' }} />
          </View>
          <View style={{ marginBottom: 90 }}>
            <Text style={{
              color: '#9DC0BF', fontSize: 35, textAlign: 'center', fontWeight: '600', textShadowColor: 'rgba(0, 0, 0, 0.3)',
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 3,
            }}>Lotus Meditation</Text>
          </View>
        </View>
      );
    } else {
      // Ana bileşeni yükle
      return <WrappedComponent {...props} />;
    }
  };
}

// export default function withSplashScreen(WrappedComponent) {

//   return class extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         loading: true,
//       };
//     }


//     render() {
//       return (
//         <View style={{ flex: 1, justifyContent: 'center', width: '100%', height: '100%' }}>
//           <View style={{ marginTop: 190 }}>
//             <Image source={require('/Users/cansuozdizlekli/AwesomeProject/assets/splash-icon.png')} style={{ width: '100%', height: '70%' }} />
//           </View>
//           <View style={{ marginBottom: 90 }}>
//             <Text style={{
//               color: '#9DC0BF', fontSize: 35, textAlign: 'center', fontWeight: '600', textShadowColor: 'rgba(0, 0, 0, 0.3)',
//               textShadowOffset: { width: 1, height: 1 },
//               textShadowRadius: 3,
//             }}>Lotus Meditation</Text>
//           </View>
//         </View>
//       );
//     }
//   };
// }