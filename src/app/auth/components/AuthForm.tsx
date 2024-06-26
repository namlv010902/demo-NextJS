import React from 'react';
import { Control, FieldValues } from 'react-hook-form';
import Input from '@/app/components/Form/Input';
import Loading from '@/app/components/Loading/Loading';
type TypeForm = {
  onSubmit: () => void,
  control: Control<FieldValues | any>,
  register: any,
  errors: any,
  isNoLogin?: boolean,
  btnText?: string,
  loading?: boolean
}
const AuthForm: React.FC<TypeForm> = ({ onSubmit, control, isNoLogin, btnText = "Submit", loading }) => {

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
        <div className="mb-5">
          <Input
            id="email"
            label="Email"
            type="text"
            control={control}
            name="email"
            required
          />
        </div>

        <div className="mb-5">
          <Input
            id="password"
            label="Password"
            type="password"
            control={control}
            name="password"
            required
          />
        </div>
        {isNoLogin && (
          <>
            <div className="mb-5">
              <Input
                id="Username"
                label="Username"
                type="text"
                control={control}
                name="name"
              />
            </div>
            <div className="mb-5">
              <Input
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                control={control}
                name="confirmPassword"
              />
            </div>
            <div className="mb-5">
              <Input
                id="PhoneNumber"
                label="Phone Number"
                type="text"
                control={control}
                name="phoneNumber"
              />
            </div>
          </>
        )}
        <button
          style={{
            backgroundColor: loading ? '#cbd5e0' :"" ,
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
          disabled={loading}
          type="submit"
          className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center"
        >
          {loading ? "Loading..." : btnText}
        </button>
      </form>
    </div >
  );
};

export default AuthForm;
