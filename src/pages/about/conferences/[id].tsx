import React from "react";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return {
    props: { contact: data },
  };
};

const SingleConference = ({ contact }) => {
  return <div></div>;
};

export default SingleConference;
