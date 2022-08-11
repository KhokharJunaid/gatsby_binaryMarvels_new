import { FormProvider } from "./src/context/FormContext";
import React from "react";
import "./src/styles/global.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const wrapRootElement = ({ element }: any) => {
    return <FormProvider>{element}</FormProvider>
}
