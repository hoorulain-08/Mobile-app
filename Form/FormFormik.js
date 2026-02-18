// import React from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';
// import { Formik } from 'formik';


// const MyForm = () => {
//     return (
//       <Formik
//         initialValues={{ email: '', password: '' }}
//         onSubmit={(values) => {
            
//           console.log(values);
//         }}
//       >
//         {({ handleChange, handleBlur, handleSubmit, values }) => (
//           <View style={styles.formContainer}>
//             <TextInput
//               style={styles.input}
//               onChangeText={handleChange('email')}
//               onBlur={handleBlur('email')}
//               value={values.email}
//               placeholder="Email"
//             />
//             <TextInput
//               style={styles.input}
//               onChangeText={handleChange('password')}
//               onBlur={handleBlur('password')}
//               value={values.password}
//               placeholder="Password"
//               secureTextEntry
//             />
//             <Button title="Submit" onPress={handleSubmit} />
//           </View>
//         )}
//       </Formik>
//     );
//   };




//   export default MyForm





  




// //  import {
//     //   View,
//     //   Text,
//     //   TouchableOpacity,
//     //   Image,
//     //   TextInput,
//     //   FlatList,
//     //   StyleSheet,
//     //   Button
//     // } from 'react-native';
//     // import React, {useRef, useState} from 'react';
//     // import { countries } from '../Components/Countries';
    
//     // import { Formik } from 'formik';
//     // const App = () => {
//     //   const [search, setSearch] = useState('');
//     //   const [clicked, setClicked] = useState(false);
//     //   const [data, setData] = useState(countries);
//     //   const [selectedCountry, setSelectedCountry] = useState('');
//     //   const searchRef = useRef();
//     //   const onSearch = search => {
//     //     if (search !== '') {
//     //       let tempData = data.filter(item => {
//     //         return item.country.toLowerCase().indexOf(search.toLowerCase()) > -1;
//     //       });
//     //       setData(tempData);
//     //     } else {
//     //       setData(countries);
//     //     }
//     //   };
//     //   return (
//     //     <>
//     //     <View style={{flex: 1}}>
//     //       <TouchableOpacity
//     //         style={{
//     //           width: '90%',
//     //           height: 50,
//     //           borderRadius: 10,
//     //           borderWidth: 0.5,
//     //           alignSelf: 'center',
//     //           marginTop: 100,
//     //           flexDirection: 'row',
//     //           justifyContent: 'space-between',
//     //           alignItems: 'center',
//     //           paddingLeft: 15,
//     //           paddingRight: 15,
//     //         }}
//     //         onPress={() => {
//     //           setClicked(!clicked);
//     //         }}>
//     //         <Text style={{fontWeight:'600'}}>
//     //           {selectedCountry == '' ? 'Select Country' : selectedCountry}
//     //         </Text>
//     //         {clicked ? (
//     //           <Image
//     //             source={require('../assets/upload.png')}
//     //             style={{width: 20, height: 20}}
//     //           />
//     //         ) : (
//     //           <Image
//     //             source={require('../assets/dropdown.png')}
//     //             style={{width: 20, height: 20}}
//     //           />
//     //         )}
//     //       </TouchableOpacity>
//     //       {clicked ? (
//     //         <View
//     //           style={{
//     //             elevation: 5,
//     //           marginTop: 20,
//     //             height: 300,
//     //             alignSelf: 'center',
//     //             width: '90%',
//     //             backgroundColor: '#fff',
//     //             borderRadius: 10,
//     //           }}>
//     //           <TextInput
//     //             placeholder="Search.."
//     //             value={search}
//     //             ref={searchRef}
//     //             onChangeText={txt => {
//     //               onSearch(txt);
//     //               setSearch(txt);
//     //             }}
//     //             style={{
//     //               width: '90%',
//     //               height: 50,
//     //               alignSelf: 'center',
//     //               borderWidth: 0.2,
//     //               borderColor: '#8e8e8e',
//     //               borderRadius: 7,
//     //               marginTop: 20,
//     //               paddingLeft: 20,
//     //             }}
//     //           />
    
//     //           <FlatList
//     //             data={data}
//     //             renderItem={({item, index}) => {
//     //               return (
//     //                 <TouchableOpacity
//     //                   style={{
//     //                     width: '85%',
//     //                     alignSelf: 'center',
//     //                     height: 50,
//     //                     justifyContent: 'center',
//     //                     borderBottomWidth: 0.5,
//     //                     borderColor: '#8e8e8e',
//     //                   }}
//     //                   onPress={() => {
//     //                     setSelectedCountry(item.country);
//     //                     setClicked(!clicked);
//     //                     onSearch('');
//     //                     setSearch('');
//     //                   }}>
//     //                   <Text style={{fontWeight: '600'}}>{item.country}</Text>
//     //                 </TouchableOpacity>
//     //               );
//     //             }}
//     //           />
//     //         </View>
//     //       ) : null}
//     //     </View>
    
    
//     //     <Formik
//     //         initialValues={{ email: '', password: '' }}
//     //         onSubmit={(values) => {
//     //           console.log(values);
//     //         }}
//     //       >
//     //         {({ handleChange, handleBlur, handleSubmit, values }) => (
//     //           <View style={styles.formContainer}>
//     //             <TextInput
//     //               style={styles.input}
//     //               onChangeText={handleChange('email')}
//     //               onBlur={handleBlur('email')}
//     //               value={values.email}
//     //               placeholder="Email"
//     //             />
//     //             <TextInput
//     //               style={styles.input}
//     //               onChangeText={handleChange('password')}
//     //               onBlur={handleBlur('password')}
//     //               value={values.password}
//     //               placeholder="Password"
//     //               secureTextEntry
//     //             />
//     //             <Button title="Submit" onPress={handleSubmit} />
//     //           </View>
//     //         )}
//     //       </Formik>
    
//     // </>
    
    
    
    
//     //   );
//     // };
    
//     // export default App;
    
//     // const styles = StyleSheet.create({
//     //   formContainer: {
//     //     padding: 16,
//     //   },
//     //   input: {
//     //    // height: 40,
//     //     borderColor: 'gray',
//     //     borderWidth: 1,
//     //     marginBottom: 8,
//     //     paddingHorizontal: 10,
//     //   },
//     // });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     //    {/* <Formik
//     //         initialValues={{search:'',  email: '', password: ''}}
//     //         onSubmit={(values) => {
//     //           console.log(values);
//     //         }}
//     //       >
//     //         {({ handleChange, handleBlur, handleSubmit, values }) => (
//     //           <View style={style.formContainer}>
    
//     //  )}
    
    
//     //         </Formik>   */}
    