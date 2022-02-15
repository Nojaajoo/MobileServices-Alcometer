import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        margin: 20,
        marginTop: 50,
        padding: 20,
        borderRadius: 20,
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#6200EE',
        alignSelf: 'center',
        margin: 5,
    },
    separator: {
        marginTop: 5,
        borderBottomColor: 'darkgrey',
        borderBottomWidth: 1,
        alignSelf: 'stretch',
        marginBottom: 5,
    },
    picker: {
        margin: 5,
        padding: 5,
        backgroundColor: '#e2e2e2',
    },
    result: {
        fontSize: 40,
        alignSelf: 'center'
    },
    button: {
        marginTop: 10,
        marginBottom: 50,
    },
    resultColor: {
        margin: 20,
        padding: 5,
        backgroundColor: null
    },
    yellow: {
        backgroundColor: 'yellow'
    },
    red: {
        backgroundColor: 'red'
    }
});
