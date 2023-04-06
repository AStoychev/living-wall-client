// not use

import { useForm } from "../hooks/useForm";

export const FullFieeldValidation = () => {

    const { values } = useForm(0);

    const isRequired = []
    const items = (Object.values(values));
    let result = false

    if (isRequired.length == items.length) {
        result = true
    } else {
        result = false
    }

    for (let i = 0; i < items.length; i++) {
        if ((items[i].length) > 0) {
            isRequired.push(1)
        }
    }

    return result
}