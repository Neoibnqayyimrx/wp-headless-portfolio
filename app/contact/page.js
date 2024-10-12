import Form from './form';

const Contact = () => {
    return (
        <div className='container mx-auto p-8 pb-16'>
            <section aria-labelledby="contact-heading">
                <h1 id="contact-heading" className='text-4xl font-bold text-center mb-8'>
                    Contact
                </h1>
                <div className='max-w-2xl mx-auto'>
                    <Form />
                </div>
            </section>
        </div>
    );
};

export default Contact;
