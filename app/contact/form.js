'use client';
import Input from '../components/input.js';
import Fieldset from '../components/fieldset.js';
import Textarea from '../components/textarea.js';
import Button from '../components/button.js';
import { useState } from 'react';

const INPUT = 'INPUT';
const TEXTAREA = 'TEXTAREA';

const initialFields = [
    {
        label: 'Name',
        component: INPUT,
        type: 'text',
        name: 'your-name',
        id: 'full_name',
        validation_error: false,
        validation_message: '',
        required: true, // Make this field required
    },
    {
        label: 'Email',
        component: INPUT,
        type: 'email',
        name: 'your-email',
        id: 'email',
        validation_error: false,
        validation_message: '',
        required: true, // Make this field required
    },
    {
        label: 'Subject',
        component: INPUT,
        type: 'text',
        name: 'your-subject',
        id: 'subject',
        validation_error: false,
        validation_message: '',
        required: false, // Optional field
    },
    {
        label: 'Message',
        component: TEXTAREA,
        name: 'your-message',
        id: 'message',
        validation_error: false,
        validation_message: '',
        required: true, // Make this field required
    }
];

const Form = () => {
    const [fields, setFields] = useState(initialFields);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Reset validation state before submission
        setFields(fields.map(field => ({
            ...field,
            validation_error: false,
            validation_message: '',
        })));

        const formData = new FormData(event.target);

        const reqOptions = {
            method: 'POST',
            body: formData,
        };

        try {
            const req = await fetch('http://headless-portfolio.local/wp-json/contact-form-7/v1/contact-forms/24/feedback', reqOptions);
            const response = await req.json();

            if (!response) {
                return alert('An unexpected error occurred. Please try again later.');
            }

            if (response.invalid_fields && response.invalid_fields.length > 0) {
                // Update fields with validation errors
                setFields(fields.map(field => {
                    const error = response.invalid_fields.find(x => x.field === field.name);

                    return {
                        ...field,
                        validation_error: !!error,
                        validation_message: error ? error.message : '',
                    };
                }));
            } else {
                alert(response.message); // Show success message if no errors
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An unexpected error occurred. Please try again later.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {fields.map((field) => (
                <Fieldset key={field.id}>
                    <label htmlFor={field.id} className="text-slate-900">{field.label}</label>
                    {field.component === INPUT && (
                        <Input
                            type={field.type}
                            required={field.required}
                            name={field.name}
                            id={field.id}
                            className="w-full"
                        />
                    )}
                    {field.component === TEXTAREA && (
                        <Textarea
                            required={field.required}
                            name={field.name}
                            id={field.id}
                            className="w-full"
                        />
                    )}
                    {field.validation_error && (
                        <div className="text-sm text-red-500">
                            {field.validation_message}
                        </div>
                    )}
                </Fieldset>
            ))}
            <Button type="submit" className="w-40">Submit</Button>
        </form>
    );
};

export default Form;
