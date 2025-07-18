import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useForm, ValidationError } from '@formspree/react';

const SimpleForm: React.FC = () => {
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return "<p>Thanks for joining!</p>";
  } 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Button type="submit" disabled={state.submitting}>
        Submit
      </Button>
      <ValidationError errors={state.errors} />
    </form>
  );
};

export default SimpleForm;







