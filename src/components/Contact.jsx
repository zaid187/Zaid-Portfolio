import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Your Name is Required*'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Your Email is Required*'),
      message: Yup.string()
        .min(1, 'Must be at least 20 characters')
        .required('Your Message is Required*'),
    }),
    onSubmit: values => {
      fetch('https://getform.io/f/nbvvgwlb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then(response => {
        if (response.ok) {
          alert('Message sent successfully');
        } else {
          alert('Failed to send message');
        }
      }).catch(error => {
        console.error('Error:', error);
        alert('Failed to send message');
      });
    },
  });

  return (
    <div className="max-w-[1200px] mx-auto sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">Contact Me</h2>
      </div>
      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-[#161616] rounded-xl">
          <div className="p-10">
            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className={`bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400
                      border-gray-700 rounded-md focus:outline-none focus:border-pink-600 ${
                        formik.touched.name && formik.errors.name ? 'border-red-500' : ''
                      }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="text-red-500 mt-1">{formik.errors.name}</div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className={`bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400
                      border-gray-700 rounded-md focus:outline-none focus:border-pink-600 ${
                        formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                      }`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 mt-1">{formik.errors.email}</div>
                    ) : null}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      className={`bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400
                      border-gray-700 rounded-md focus:outline-none focus:border-pink-600 ${
                        formik.touched.message && formik.errors.message ? 'border-red-500' : ''
                      }`}
                      rows="4"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                    ></textarea>
                    {formik.touched.message && formik.errors.message ? (
                      <div className="text-red-500 mt-1">{formik.errors.message}</div>
                    ) : null}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
