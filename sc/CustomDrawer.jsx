import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Alert } from "react-native";
import { Button } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useEffect } from "react";
import { CommonActions, DrawerActions, StackActions } from '@react-navigation/native';

const CustomDrawer = ({ navigation }) => {
    const resetToHome = () => {
        navigation.toggleDrawer();

        // navigation.dispatch(
        //     CommonActions.reset({
        //         index: 0,
        //         routes: [{ name: 'BottomTabRoute' }],
        //     })
        // );
        navigation.navigate('BottomTabRoute', { screen: 'Home' });

    };
    return (
        <>
            {/* <Header open={false} navigation={navigation} /> */}

            <View style={styles.headerCon}>
                <View>
                    <Text style={styles.headerTxt}>MyPustak Partner</Text>
                </View>
                <TouchableOpacity style={{ alignSelf: "end" }} onPress={() => navigation.dispatch(DrawerActions?.closeDrawer())}>
                    <MaterialCommunityIcons name="close" size={30} color={"darkgray"} />
                </TouchableOpacity>
            </View>

            <View style={styles.container}>

                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={() => {
                        //  navigation.dispatch(StackActions.push('HomeStack', {
                        //     screen: 'Home',
                        //   }))
                        resetToHome()

                    }}>
                        <Text>  Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.dispatch(StackActions.push('ProfileStack', {
                            screen: 'ProfileScreen',
                        }))
                        navigation.toggleDrawer();

                    }}>
                        <Text>  Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        navigation.dispatch(StackActions.push('ProductStack', {
                            screen: 'ProductList',
                        }))
                        navigation.toggleDrawer();

                    }}>
                        <Text>  Product</Text>
                    </TouchableOpacity>

                </View>

                {/* <View style={styles.btnContainer}>
                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.btn}
                            onPress={() => handleLogout()}>
                            <Button mode="outlined" textColor="#2248ae"> LOGOUT </Button>
                        </TouchableOpacity>
                    </View>
                </View> */}

                <View style={styles.versionCon}>
                    <Text>
                        <Text style={styles.makeTxt}>Make❤️</Text>
                        <Text style={styles.indTxt}>India</Text>
                    </Text>
                </View>
            </View>
        </>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    headerCon: {
        alignItems: "center",
        marginRight: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerTxt: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#2248ae",
        marginLeft: 15,
        marginTop: 15,
    },
    container: {
        // backgroundColor: "#2248ae",
        height: "100%",
        paddingTop: 20,
        paddingHorizontal: 15,
        paddingRight: 20,
        display: "flex",
        justifyContent: "space-between",
        // paddingBottom: Dimensions.get("window").height * 0.2,
        paddingBottom: 35
    },
    innerContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    item: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingBottom: 5,
    },
    itemText: {
        color: "#0F0F0F",
    },
    line: {
        width: "100%",
        height: 1,
        backgroundColor: "#0F0F0F",
        opacity: 0.1,
        marginBottom: 25,
    },
    btnContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        border: "2px solid red",
    },
    btnView: {
        color: "black",
    },
    btn: {
        backgroundColor: "white",
        textAlign: "center",
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 10,
    },
    btnText: {
        fontSize: 15,
        fontWeight: 600,
        lineHeight: 20,
        letterSpacing: 0,
    },
    versionCon: {
        alignItems: "center",
        marginBottom: 20
    },
    makeTxt: {
        color: "#FF671F",
    },
    indTxt: {
        color: "#046A38",
    }
});
