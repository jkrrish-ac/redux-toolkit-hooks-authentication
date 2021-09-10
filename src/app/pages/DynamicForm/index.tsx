import React, { useState, useEffect } from "react";
import { Form, Button } from 'antd';

export const DynamicFormPage = () => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});

    // To disable submit button at the beginning.
    useEffect(() => {
        forceUpdate({});
    }, []);


    return (
        <Button
            type="primary"
            htmlType="submit"
            disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
        >
            Submit
        </Button>
    )
}
