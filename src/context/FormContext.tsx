import React, { createContext, useState } from 'react';

export const FormContext: any = createContext<any>({});

export function FormProvider({ children }: any) {
    const [formData, setFormData] = useState(1);
    return (
        <FormContext.Provider value={[formData, setFormData]}>
            {children}
        </FormContext.Provider>
    );
}
