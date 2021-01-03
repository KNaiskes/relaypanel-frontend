import React from "react";
import { useForm } from "react-hook-form";

export function UpdateForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Update Name</label>
	<input
	    name="updateName"
	    defaultValue="##"
	    ref={register({ required: true, maxLength: 10})}
	/>
      <label>Update device type</label>
      <input
          name="updateDevice"
	  defaultValue="##"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
      <input type="submit" />
    </form>
  );
}
