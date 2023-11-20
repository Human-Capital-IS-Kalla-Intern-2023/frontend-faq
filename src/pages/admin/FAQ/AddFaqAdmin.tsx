// Import Library And
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { getCategoryAdmin } from '../../../api/admin/CategoryAdminAPI';
import JoditEditor from 'jodit-react';
import Select from 'react-select';

import {
  ErrorAlert,
  SuccessAlert,
  ConfirmationAlert,
} from '../../../components/alerts/CustomAlert';

import { ResetAlert } from '../../../helpers/ResetAlert';

import { addFaqAdmin } from '../../../api/admin/FaqAdminAPI';

interface FieldOptions {
  label: string;
  value: number;
}

const AddFaqAdmin = () => {
  const [companyDropdownValue, setCompanyDropdownValue] = useState<
    number | string
  >('');

  const [faqAdminNameValue, setFaqAdminNameValue] = useState('');

  const [companyOptions, setCompanyOptions] = useState<Array<FieldOptions>>([]);
  // const [masterComponentOptions, setMasterComponentOptions] = useState<
  //   Array<FieldOptions>
  // >([]);

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<{
    company_id: string | number;
    faq_name: string;
    is_active: number;
    components: {
      component_id: number;
      order: number;
      component_name: string;
      type: string;
      is_hide: number;
      is_edit: number;
      is_active: number;
    }[];
  }>({
    company_id: '',
    faq_name: '',
    is_active: 1,
    components: [],
  });

  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);

  // const [successConfirmMessage, setSuccessConfirmMessage] = useState<
  //   string | null
  // >(null);
  // const [successConfirmTitle, setSuccessConfirmTitle] = useState<string | null>(
  //   null
  // );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // Checkbox State
  const [leftActiveCheckbox, setLeftActiveCheckbox] = useState(true);

  const navigate = useNavigate();

  //* LOCAL STORAGE SECTION
  const saveDataToLocalStorage = (data: any) => {
    localStorage.setItem('faqAdminAddData', JSON.stringify(data));
  };

  ///* FEATCH SECTION
  async function fetchCompanyData() {
    try {
      const responseData = await getCategoryAdmin();
      const companyOptions = responseData.data.map((item: any) => ({
        label: item.company_name,
        value: item.id,
      }));
      setCompanyOptions(companyOptions);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  }

  // async function fetchMasterComponent() {
  //   try {
  //     const responseData = await getMasterSalary();
  //     const masterComponentOptions = responseData.data.map((item: any) => ({
  //       label: item.component_name,
  //       value: item.id,
  //     }));

  //     setMasterComponentOptions(masterComponentOptions);
  //   } catch (error) {
  //     console.error('Error fetching companies:', error);
  //   }
  // }

  ///* NAVBAR SECTION

  // Handler Cancel Navbar Button
  const cancelHandler = async () => {
    localStorage.removeItem('faqAdminAddData');

    navigate('/admin/faq');
  };

  // Handler Save and Close Navbar Button
  const handleSaveAndClose = async () => {
    try {
      setIsLoading(true);
      const savedData = localStorage.getItem('faqAdminAddData');

      // Panggil fungsi API untuk menambahkan gaji
      const responseData = await addFaqAdmin(savedData);

      ConfirmationAlert({
        title: `${responseData.status}`,
        html: `${responseData.message}<br/> <small>Click the button below to go faq page</small> `,
        confirmButtonText: 'Okay & Direct',
        onConfirm: () => {
          navigate('/admin/faq');
          localStorage.removeItem('faqAdminAddData');
        },
      });
    } catch (error: any) {
      console.error('Error adding faq:', error);
      setErrorTitle(`Error adding faq`);

      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    } finally {
      setIsLoading(false);
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  ///* LEFT CARD SECTION
  // Handle Company Name
  const handleCompanyChange = (e: any) => {
    const selectedCompany = e.target.value;
    const companyId = parseInt(selectedCompany, 10);
    setFormData({ ...formData, company_id: selectedCompany });
    setCompanyDropdownValue(companyId);

    // Save data to local storage
    const newData = { ...formData, company_id: companyId };
    saveDataToLocalStorage(newData);
  };

  // Handle Faq Admin Name
  const handleFaqAdminNameInput = (e: any) => {
    setFormData({ ...formData, faq_name: e.target.value });
    setFaqAdminNameValue(e.target.value);

    // Save data to local storage
    const newData = { ...formData, faq_name: e.target.value };
    saveDataToLocalStorage(newData);
  };

  // Handle Left Is Active Checbox
  const handleLeftActiveCheckboxChange = (e: any) => {
    const isChecked = e.target.checked;

    // Update the local state
    setLeftActiveCheckbox(isChecked);

    // Update the formData and save to local storage
    const updatedFormData = {
      ...formData,
      is_active: isChecked ? 1 : 0,
    };

    // Save data to local storage
    setFormData(updatedFormData);
    saveDataToLocalStorage(updatedFormData);
  };

  ///* RIGHT CARD SECTION

  ///* MODAL COMPONENT SECTION
  // Handle Master Component
  // const handleMasterComponentChange = async (e: any) => {
  //   const selectedComponentId = e.target.value;

  //   const responseData = await getDetailMasterSalary(selectedComponentId);
  //   const masterComponentName = responseData.data.component_name;

  //   setComponentDropdownValue({
  //     id: selectedComponentId,
  //     name: masterComponentName || '',
  //   });
  // };

  // Handle New Component Name
  // const handleNewComponentNameInput = (e: any) => {
  //   setNewComponentNameValue(e.target.value);
  // };

  //* USE EFFECT SECTION
  useEffect(() => {
    const savedData = localStorage.getItem('faqAdminAddData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // Update your component state with the loaded data
      setFormData(parsedData);
      setCompanyDropdownValue(parsedData.company_id);
      setFaqAdminNameValue(parsedData.faq_name);

      setLeftActiveCheckbox(parsedData.is_active === 1);
    }
  }, []);

  useEffect(() => {
    fetchCompanyData();
    // fetchMasterComponent();

    // async function fetchTypeOptions() {
    //   try {
    //     if (componentDropdownValue.id) {
    //       const responseData = await getDetailMasterSalary(
    //         componentDropdownValue.id
    //       );

    //       setTypeMasterComponentOptoins(responseData.data.type);
    //     }
    //   } catch (error) {
    //     console.error('Error fetching types:', error);
    //   }
    // }
    // fetchTypeOptions();
  }, []);

  const componentsByType: { [key: string]: any[] } = {};
  formData.components.forEach((component) => {
    const type = component.type;
    if (!componentsByType[type]) {
      componentsByType[type] = [];
    }
    componentsByType[type].push(component);
  });

  const editor = useRef(null);
  const [content, setContent] = useState('');

  // const config = useMemo(
  //   {
  //     readonly: false, // all options from https://xdsoft.net/jodit/docs/,
  //     placeholder: 'Start typings...',
  //   },
  //   []
  // );
  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      <ToastContainer className="top-20" />
      {/* Header Design  */}
      <header className="flex items-center justify-between p-4 shadow-lg sm:p-5 ">
        <h1 className="p-2 text-base font-medium border-b-2 sm:text-lg md:text-xl lg:text-[22px] border-primary">
          Add Frequently Asked Questions
        </h1>
        <div className="flex text-xs font-medium sm:flex-row lg:text-sm ">
          <button
            aria-label="Cancel"
            className="px-1 py-2 mr-2 duration-300 bg-transparent  rounded-md lg:text-lg text-pureBlack lg:px-4 lg:py-2 lg:mr-4 bg-stone-300 hover:text-pureBlack hover:bg-slate-400 lg:hover:scale-[1.03] "
            onClick={cancelHandler}
          >
            CANCEL
          </button>
          <button
            aria-label="Save and Close"
            className="px-1 py-2 text-white duration-300 rounded-md lg:text-[17px] lg:px-4 lg:py-2 bg-primary hover:bg-green-600 lg:hover:scale-[1.03]"
            onClick={handleSaveAndClose}
          >
            SAVE & CLOSE
          </button>
        </div>
      </header>

      {/* Left Card Design  */}
      <div className="flex flex-col m-4 sm:flex-row">
        <div className="w-full mb-4 bg-gray-100 shadow-2xl sm:w-1/4 sm:mb-0">
          <div className="mb-4">
            <h1 className="py-4 pl-4 shadow-lg sm:text-sm lg:text-[18px] uppercase border-gray bg-slate-300 rounded-t-md">
              Property
            </h1>
            <div className="p-4">
              <label
                htmlFor="dropdown company"
                className="block mt-3 font-medium text-gray-700"
              >
                Category *
              </label>
              <Select
                id="dropdown company"
                name="dropdown company"
                value={companyOptions.find(
                  (option) => option.value === companyDropdownValue
                )}
                isMulti
                onChange={(selectedOption: any) =>
                  handleCompanyChange(selectedOption.value)
                }
                styles={{
                  control: (provided) => ({
                    ...provided,
                    border: '1px solid black',
                    outline: 'none',
                    boxShadow: 'none',
                  }),
                }}
                options={companyOptions}
                className="mt-1"
              />

              <div className="mt-4 mb-4">
                <label
                  htmlFor="input"
                  className="block font-medium text-gray-700"
                >
                  FAQ Title *
                </label>
                <input
                  type="text"
                  id="input"
                  name="input"
                  placeholder="Input Faq Title"
                  value={faqAdminNameValue}
                  onChange={handleFaqAdminNameInput}
                  className="block w-full px-3 py-2 mt-1 text-sm bg-white border rounded-[3px] shadow-sm focus:outline-none focus:ring-link focus:border-link"
                />
              </div>
              <div className="flex items-center">
                <span className="mr-2">Active</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    aria-label="left active checkbox"
                    checked={leftActiveCheckbox}
                    onChange={handleLeftActiveCheckboxChange}
                  />
                  <div
                    className={`w-11 h-6 bg-red-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
                  ></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card Design  */}
        <div className="w-full ml-0 overflow-auto rounded-md shadow-2xl sm:w-3/4 sm:ml-10">
          <h1 className="flex py-4 pl-4 shadow-lg sm:text-sm lg:text-[18px] border-gray bg-slate-300 rounded-t-md">
            CONTENT
          </h1>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
        </div>
      </div>

      {successMessage && successTitle && (
        <SuccessAlert title={successTitle} text={successMessage} />
      )}
      {errorMessage && errorTitle && (
        <ErrorAlert title={errorTitle} text={errorMessage} />
      )}
    </>
  );
};

export default AddFaqAdmin;
