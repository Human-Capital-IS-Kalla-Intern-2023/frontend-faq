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
      <div className="shadow-md py-4">
        <h1 className="px-6 py-4 text-2xl font-sans font-semibold">
          FAQ - Frequently Asked Questions
        </h1>
      </div>
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
