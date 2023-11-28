import QuestionCard from '../../components/faq/QuestionCard';

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

const Question: React.FC = () => {
  return (
    <>
      <QuestionCard
        addButtonText={''}
        title={''}
        filterOptions={[]}
        inputFields={[]}
        data={data}
      />
    </>
  );
};

export default Question;
