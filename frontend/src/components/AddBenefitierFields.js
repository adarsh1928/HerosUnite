import React from 'react';

export default function AddBenefitierFields({ label, field, formData, handleChange }) {
  return (
    <>
      <div className="mb-4">
        <label className="block text-richblack-25 text-sm font-bold mb-2" htmlFor={field}>
          {label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-yellow leading-tight focus:outline-none focus:shadow-outline"
          id={field}
          type="text"
          name={field}
          value={formData[field]}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
}
