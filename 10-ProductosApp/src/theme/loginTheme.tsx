import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    title: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20,
        alignSelf: "center",
    },
    label: {
        marginTop: 25,
        color: "#fff",
        fontWeight: "bold",

    },
    inputField: {
        color: "#fff",
        fontSize: 20,
    },
    buttonContainer: {
        alignItems: "center",
        marginTop: 50,
    },
    button: {
        borderWidth: 2,
        borderColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100,
    },
    buttonTxt: {
        color: "#fff",
        fontSize: 18,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    newUserContainer: {
        alignItems: "flex-end",
        marginTop: 20,
    },
    formContainer:{
        flex:1,
        paddingHorizontal:30,
        justifyContent:'center',
        height:600,
        marginBottom:50,
    }

})