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

const SingleNew = ({ contact }) => {
  return (
    <>
      <div>SingleNew</div>
    </>
  );
};

export default SingleNew;
