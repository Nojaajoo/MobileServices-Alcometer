import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        margin: 20,
        marginTop: 50,
        padding: 20,
        borderRadius: 20,
        elevation: 10
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#6200EE',
        alignSelf: 'center',
        margin: 5,
    },
    subheading: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 3
    },
    input: {
        padding: 10
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
        fontSize: 50,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    button: {
        marginTop: 10,
        marginBottom: 50,
    },
    resultView: {
        margin: 20,
        padding: 5,
        backgroundColor: null,
    },
    screenBackground: {
        backgroundColor: 'white',
    }
});
