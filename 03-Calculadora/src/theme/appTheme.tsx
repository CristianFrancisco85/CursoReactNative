import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        backgroundColor: 'black',
        flex: 1,
    },
    calculadoraContainer: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'flex-end',
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10,
    },
    resultadoAux: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },

});