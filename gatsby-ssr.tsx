const React = require("react")
// const Layout = require("./src/components/Layout");
const FormProvider = require("./src/context/FormContext")

// // Adds a class name to the body element
// exports.onRenderBody = ({ setBodyAttributes }, pluginOptions: any) => {
//     setBodyAttributes({
//         className: "my-body-class",
//     })
// }

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
    return <FormProvider {...props}>{element}</FormProvider>
}

