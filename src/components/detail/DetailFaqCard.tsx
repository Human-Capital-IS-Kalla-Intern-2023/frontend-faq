import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import FooterCard from '../../components/detail/FooterCard';
import { SearchIcon } from '../../assets/icons/Icon';
// import { faMusic } from '../../assets/icons/categoriIcon';

interface FilterOption {
  id: string;
  label: string;
}

interface InputField {
  id: string;
  label: string;
  name: string;
  type?: string;
}
interface DetailFaqCardProps {
  addButtonText: string;
  title: string;
  filterOptions: FilterOption[];
  inputFields: InputField[];
  onSubmit?: any;
  onSearch?: any;
  onNavigate?: any;
  data?: any[];
}

const DetailFaqCard: React.FC<DetailFaqCardProps> = ({ onSearch }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  const [searchInput, setSearchInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSearch(searchInput);
    } catch (error) {
      throw false;
    } finally {
      setIsLoading(false);

      if (searchInput) {
        navigate(`?search=${searchInput}`);
      } else {
        navigate('');
      }
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchValue = searchParams.get('search');
    if (searchValue) {
      onSearch(searchValue);
      setSearchInput(searchValue);
    }
  }, [onSearch]);

  return (
    <section className="antialiased overlay">
      <div className="w-full ">
        <div className="flex justify-between bg-white">
          <h1 className="flex p-[14px] font-sans text-2xl font-semibold">
            Pusat Bantuan
          </h1>
          <div className="flex flex-row justify-end w-full p-[14px] md:w-1/2">
            <form className="flex items-center" onSubmit={handleSearch}>
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative flex items-center w-full">
                <input
                  type="text"
                  className="block w-full px-2 py-2 pr-4 text-black rounded-full cursor-pointer placeholder-gray focus:outline-none focus:placeholder-pureBlack bg-[#F0F2F5] pl-14 text-sm"
                  placeholder="Cari artikel bantuan..."
                  value={searchInput}
                  onChange={handleSearchInputChange}
                />
                <button
                  className="absolute left-0 flex items-center px-4 text-black duration-300 rounded-none "
                  onClick={handleSearch}
                  type="submit"
                  aria-label="Search Data"
                >
                  {isLoading && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                      <ReactLoading
                        type="spin"
                        color="green"
                        height={50}
                        width={50}
                      />
                    </div>
                  )}
                  <SearchIcon className="w-[25px] h-[20px] text-gray cursor-pointer " />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full pt-2 px-4 overflow-x-auto">
          <div className="items-start content-start justify-start">
            <div className="flex items-center">
              <Link
                to="/pengaturan-akun"
                className="text-sm text-black hover:underline"
              >
                Pengaturan Akun
              </Link>
              <span className="text-slate-600 mx-2">{' > '}</span>
              <Link
                to="/lupa-password"
                className="text-sm text-black hover:underline"
              >
                Lupa Password
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full pt-2 px-4 overflow-x-auto">
          <div className="items-start content-start justify-start">
            <div className="border-b border-slate-300">
              <div className="pt-5 text-lg py-3 font-semibold">
                Lupa Password
              </div>
            </div>
            <div className="text-base py-6 leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              consequat, ex vel lacinia facilisis, libero tortor ultricies dui,
              vel scelerisque ligula sapien vel elit. Integer rhoncus
              ullamcorper enim, nec dictum nunc congue et. Aenean nec lacus sit
              amet metus fringilla congue. Nulla facilisi. Morbi id justo sit
              amet arcu scelerisque malesuada. Duis ac volutpat arcu. Nullam eu
              elit erat. Vestibulum in dui odio. Quisque fringilla nibh eu
              aliquam malesuada. Vestibulum id euismod tortor, non tristique
              odio. Integer lacinia justo quis luctus ultrices. Curabitur dictum
              urna et mauris fringilla, a varius justo sodales. Nulla facilisi.
              Ut consectetur augue nec tincidunt accumsan. Etiam consequat eros
              vel quam tempus, eu sagittis libero sodales. Vestibulum ac sapien
              semper, iaculis justo eu, scelerisque justo. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Duis vehicula, ligula eget aliquam semper, ipsum velit
              lobortis metus, non varius lacus velit nec justo. Sed cursus
              auctor urna, vitae consequat ligula feugiat ut. Nunc rhoncus felis
              vitae tellus ultrices, sit amet ullamcorper nisl ultrices. Sed ac
              augue auctor, blandit nisl vel, scelerisque metus. Quisque
              ullamcorper erat nec tristique pharetra. Duis vel enim nec neque
              fringilla scelerisque in nec elit. Vestibulum nec felis ac purus
              gravida venenatis. Nunc euismod lacus quis neque dignissim
              efficitur. Vestibulum tincidunt mi et ex ultricies, eget ultrices
              lacus facilisis. Vivamus a arcu eu nunc tincidunt congue. Fusce ut
              libero in ligula accumsan cursus. Nulla facilisi. Ut id odio ut
              nunc aliquet blandit. Curabitur scelerisque est vel sapien
              consequat, at efficitur nunc scelerisque.
            </div>
          </div>
        </div>
      </div>
      <FooterCard></FooterCard>
    </section>
  );
};

export default DetailFaqCard;
