import HomeUserCard from '../../components/user/HomeUserCard';

const data = [
  {
    kategori: 'John Doe',
    deskripsi: '1234567890123456',
  },
  {
    kategori: 'John Doe',
    deskripsi: '123456789012',
  },
];

const HomeUser: React.FC = () => {
  return (
    <>
      <h1 className="px-6 py-4 text-2xl font-sans font-semibold">
        Frequently Asked Questions
      </h1>
      <HomeUserCard
        addButtonText={''}
        title={''}
        filterOptions={[]}
        inputFields={[]}
        data={data}
      />
    </>
  );
};

export default HomeUser;
