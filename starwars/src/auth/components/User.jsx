import React from 'react';
import { useSelector } from "react-redux";
import { userEmailSelector, userNameSelector } from "../store/authSelectors";

// Ce component affichera le courriel et le nom tapé par l"utilisateur

const User = () => {
    const email = useSelector(userEmailSelector);
    const name = useSelector(userNameSelector);

  return (
    <section>
        <h3 className='name'>{name}</h3>
        <h5 className='email'>{email}</h5>
    </section>
  );
};

export default User