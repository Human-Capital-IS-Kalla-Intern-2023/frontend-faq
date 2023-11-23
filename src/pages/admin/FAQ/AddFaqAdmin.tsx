// Import Library And
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

// Import Component Component
import QuillToolbar from '../../../components/editor/QuillToolbar';
import { modules, formats } from '../../../components/editor/QuillConfig';
import {
  ErrorAlert,
  SuccessAlert,
  ConfirmationAlert,
} from '../../../components/alerts/CustomAlert';
import { ResetAlert } from '../../../helpers/ResetAlert';
import CancelButton from '../../../components/buttons/CancelButton';
import { SubmitButton } from '../../../components/buttons/SubmitButton';

// Import API's
import { addFaqAdmin } from '../../../api/admin/FaqAdminAPI';
import { getCategoryAdmin } from '../../../api/admin/CategoryAdminAPI';
import SelectField from '../../../components/field/SelectField';

interface FieldOptions {
  label: string;
  value: number;
}

const AddFaqAdmin = () => {
  const [faqAdminNameValue, setFaqAdminNameValue] = useState('');

  const [categoryOptions, setCategoryOptions] = useState<Array<FieldOptions>>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<{
    topic_id: number[];
    faq_name: string;
    is_active: number;
    content: any;
  }>({
    topic_id: [], // Initialize as an empty array
    faq_name: '',
    is_active: 1,
    content: '',
  });

  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // Checkbox State
  const [leftActiveCheckbox, setLeftActiveCheckbox] = useState(true);

  const navigate = useNavigate();

  //* LOCAL STORAGE SECTION
  const saveDataToLocalStorage = (data: any) => {
    localStorage.setItem('faqAdminAddData', JSON.stringify(data));
  };

  ///* FEATCH Category
  async function featchCategory() {
    try {
      const responseData = await getCategoryAdmin();
      const categoryOptions = responseData.data.map((item: any) => ({
        label: item.topic_name,
        value: item.topic_id,
      }));
      setCategoryOptions(categoryOptions);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  }

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
  // Handle handle Category Select
  const handleCategorySelect = (e: any) => {
    const selectedOptions = e.target.value;
    const selectedValues = selectedOptions.map((option: any) => option.value);

    // Update formData with an array of category IDs
    setFormData({ ...formData, topic_id: selectedValues });

    // Save data to local storage
    const newData = { ...formData, topic_id: selectedValues };
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
  const [blogContent, setBlogContent] = useState('');

  const handleBlogContentChange = (content: any) => {
    setBlogContent(content);

    // Update the formData and save to local storage
    const updatedFormData = {
      ...formData,
      content: content,
    };

    // Save data to local storage
    setFormData(updatedFormData);
    saveDataToLocalStorage(updatedFormData);
  };
  //* USE EFFECT SECTION
  useEffect(() => {
    const savedData = localStorage.getItem('faqAdminAddData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // Update your component state with the loaded data
      setFormData(parsedData);
      setFaqAdminNameValue(parsedData.faq_name);

      setLeftActiveCheckbox(parsedData.is_active === 1);
    }
  }, []);

  useEffect(() => {
    featchCategory();
  }, []);

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
        <div className="hidden text-xs font-medium lg:flex md:flex lg:text-sm">
          <CancelButton onClick={cancelHandler} />
          <SubmitButton onClick={handleSaveAndClose} title="SAVE & ClOSE" />
        </div>
      </header>

      {/* Left Card Design  */}
      <div className="flex flex-col m-4 sm:flex-row">
        <div className="w-full mb-4 bg-gray-100 shadow-2xl sm:w-[20%] sm:mb-0">
          <div className="mb-4">
            <h1 className="py-4 pl-4 shadow-lg sm:text-sm lg:text-[18px] uppercase border-gray bg-slate-300 rounded-t-md">
              Property
            </h1>
            <div className="p-4">
              <label
                htmlFor="dropdown category"
                className="block mt-3 font-medium text-gray-700"
              >
                Category *
              </label>
              <SelectField
                id="dropdown category"
                name="dropdown category"
                isMulti
                options={categoryOptions}
                onChange={(selectedOption: any) =>
                  handleCategorySelect(selectedOption)
                }
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
        <div className="w-full ml-0 overflow-auto rounded-md shadow-2xl sm:w-[80%] sm:ml-10">
          <h1 className="flex py-4 pl-4 shadow-lg sm:text-sm lg:text-[18px] border-gray bg-slate-300 rounded-t-md">
            CONTENT
          </h1>
          <QuillToolbar />
          <ReactQuill
            theme="snow"
            value={blogContent}
            onChange={handleBlogContentChange}
            placeholder={'Write Blog Content Here....'}
            modules={modules}
            formats={formats}
          />
        </div>
      </div>

      <div className="flex justify-end mx-4 my-3 text-xs font-medium md:hidden lg:text-sm">
        <CancelButton onClick={cancelHandler} />
        <SubmitButton onClick={handleSaveAndClose} title="SAVE & ClOSE" />
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
