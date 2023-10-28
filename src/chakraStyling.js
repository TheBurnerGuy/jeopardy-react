import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: 'blue.900',
                color: 'gray.200',
            },
        }
    },
    colors: {
        main: {
            100: "#00A3C4",
            200: "#38A169",
        },
    },
    components: {
        Button: {
            defaultProps: {
                colorScheme: 'blue', // default is gray
            },
        },
        Input: {
            baseStyle: {
                color: 'gray.200',
                bg: 'teal.900',
                borderColor : 'teal.700',
            },
        },
    },
})

export default theme