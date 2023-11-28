import HomeUserCard from '../../components/user/HomeUserCard';
import logoKalla from '../../assets//img/logo/kalla-logo-full.webp';

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
      <div className="flex py-1 shadow-lg">
        <img src={logoKalla} height={130} width={145} alt="" />
        <h1 className="px-2 py-3 text-2xl font-sans font-semibold">
          Pusat Bantuan
        </h1>
      </div>
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
