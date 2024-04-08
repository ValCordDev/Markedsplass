import React from 'react';


const Inputs = () => {

  return (
    <form className="flex justify-center flex-col gap-5">
      <input
        type="email" // Change "mail" to "email"
        className="input input-bordered bg-white"
        placeholder="Mail"
      />

      <input
        type="password"
        className="input input-bordered bg-white"
        placeholder="Passord"
      />

      <button className="text-white hover:bg-blue-700 duration-300 rounded-lg p-3 text-base focus:border-2 bg-blue-600" type='submit'>
        Logg inn
      </button>
    </form>
  );
};

export default Inputs;
