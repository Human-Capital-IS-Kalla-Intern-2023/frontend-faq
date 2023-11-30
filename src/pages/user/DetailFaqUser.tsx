import DetailFaqCard from '../../components/detail/DetailFaqCard';

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

const DetailFaqUser: React.FC = () => {
  return (
    <>
      <DetailFaqCard
        addButtonText={''}
        title={''}
        filterOptions={[]}
        inputFields={[]}
        data={data}
      />
    </>
  );
};

export default DetailFaqUser;
