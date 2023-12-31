// Import Library And
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import {
  updateFaqAdmin,
  getDetailFaqAdmin,
} from '../../../api/admin/FaqAdminAPI';
import { getTopicAdmin } from '../../../api/admin/TopicAdminAPI';
import SelectField from '../../../components/field/SelectField';

interface FieldOptions {
  label: string;
  value: number;
}

const EditFaqAdmin = () => {
  const [faqAdminNameValue, setFaqAdminNameValue] = useState('');

  const [topicOptions, setTopicOptions] = useState<Array<FieldOptions>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [blogContent, setBlogContent] = useState('');

  const [formData, setFormData] = useState<{
    topic_id: any[];
    question: string;
    is_status: number;
    answer: any;
  }>({
    topic_id: [],
    question: '',
    is_status: 1,
    answer: '',
  });

  const { QuestionSlug } = useParams();

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
    localStorage.setItem('faqAdminEditData', JSON.stringify(data));
  };

  ///* FEATCH Topic
  async function featchTopic() {
    try {
      const responseData = await getTopicAdmin();
      const topicOptions = responseData.data.map((item: any) => ({
        label: item.name,
        value: item.id,
      }));
      setTopicOptions(topicOptions);
    } catch (error) {
      console.error('Error fetching companies:', error);
    }
  }

  ///* NAVBAR SECTION
  // Handler Cancel Navbar Button
  const cancelHandler = async () => {
    localStorage.removeItem('faqAdminEditData');

    navigate('/admin/faq');
  };

  // Handler Save and Close Navbar Button
  const handleUpdateFaqAdmin = async () => {
    try {
      setIsLoading(true);
      const savedData = localStorage.getItem('faqAdminEditData');

      if (savedData) {
        const parsedData = JSON.parse(savedData);

        // Transform topic_id to an array of numbers
        const transformedData = {
          ...parsedData,
          topic_id: parsedData.topic_id.map((topic: any) => topic.value),
        };

        // Panggil fungsi API untuk menambahkan gaji
        const responseData = await updateFaqAdmin(
          QuestionSlug,
          transformedData
        );

        ConfirmationAlert({
          title: `${responseData.status}`,
          html: `${responseData.message}<br/> <small>Click the button below to go faq page</small> `,
          confirmButtonText: 'Okay & Direct',
          onConfirm: () => {
            navigate('/admin/faq');
            localStorage.removeItem('faqAdminEditData');
          },
        });
      }
    } catch (error: any) {
      console.error('Error editing faq:', error);
      setErrorTitle(`Error editing faq`);

      if (error.response.data.errors) {
        const errorMessages = Object.values(error.response.data.errors);
        setErrorMessage(errorMessages.join('\n'));
      } else {
        setErrorMessage(error.response.data.message);
      }
    } finally {
      setIsLoading(false);
      ResetAlert(
        setSuccessTitle,
        setSuccessMessage,
        setErrorTitle,
        setErrorMessage
      );
    }
  };

  ///* LEFT CARD SECTION
  // Handle handle Topic Select
  const handleTopicSelect = (selectedOptions: any) => {
    const selected = selectedOptions.target.value;
    const selectedValues = selected.map((option: any) => ({
      label: option.label,
      value: option.value,
    }));

    // Update formData with an array of topic IDs
    setFormData({ ...formData, topic_id: selectedValues });

    // Save data to local storage
    const newData = { ...formData, topic_id: selectedValues };
    saveDataToLocalStorage(newData);
  };

  // Handle Faq Admin Name
  const handleFaqAdminNameInput = (e: any) => {
    const newName = e.target.value;
    setFaqAdminNameValue(newName);

    // Update the formData and save to local storage
    const updatedFormData = {
      ...formData,
      question: newName,
    };

    // Save data to local storage
    saveDataToLocalStorage(updatedFormData);
  };

  // Handle Left Is Active Checkbox
  const handleLeftActiveCheckboxChange = (e: any) => {
    const isChecked = e.target.checked;

    // Update the local state
    setLeftActiveCheckbox(isChecked);

    // Update the formData and save to local storage
    const updatedFormData = {
      ...formData,
      is_status: isChecked ? 1 : 0,
    };

    // Save data to local storage
    saveDataToLocalStorage(updatedFormData);
  };

  // Handle Blog Content Change
  const handleBlogContentChange = (answer: any) => {
    setBlogContent(answer);

    // Update the formData and save to local storage
    const updatedFormData = {
      ...formData,
      answer: answer,
    };

    // Save data to local storage
    saveDataToLocalStorage(updatedFormData);
  };
  //* USE EFFECT SECTION
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await getDetailFaqAdmin(QuestionSlug);
        const faqData = response.data;

        // Update the component state with the fetched data
        setFaqAdminNameValue(faqData.question);
        setLeftActiveCheckbox(faqData.is_status === 1);
        setBlogContent(faqData.answer);

        const newData = {
          topic_id: faqData.topics.map((topic: any) => ({
            label: topic.name,
            value: topic.id,
          })),
          question: faqData.question,
          is_status: faqData.is_status,
          answer: faqData.answer,
        };

        // Save data to local storage
        setFormData(newData);
        saveDataToLocalStorage(newData);
      } catch (error) {
        console.error('Error fetching faq details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [QuestionSlug]);

  useEffect(() => {
    const savedData = localStorage.getItem('faqAdminEditData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      // Update your component state with the loaded data
      setFormData(parsedData);
      setFaqAdminNameValue(parsedData.question);

      setLeftActiveCheckbox(parsedData.is_status === 1);
    }
  }, []);

  useEffect(() => {
    featchTopic();
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
          Edit Frequently Asked Questions
        </h1>
        <div className="hidden text-xs font-medium lg:flex md:flex lg:text-sm">
          <CancelButton onClick={cancelHandler} />
          <SubmitButton onClick={handleUpdateFaqAdmin} title="SAVE & ClOSE" />
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
                htmlFor="dropdown topic"
                className="block mt-3 font-medium text-gray-700"
              >
                Topic *
              </label>
              <SelectField
                id="dropdown-topic"
                name="dropdown-topic"
                isMulti
                options={topicOptions}
                value={formData.topic_id}
                onChange={handleTopicSelect}
                ariaLabel="dropdown topic"
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
                    className={`w-11 h-6 bg-red-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:answer-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
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
        <SubmitButton onClick={handleUpdateFaqAdmin} title="SAVE & ClOSE" />
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

export default EditFaqAdmin;
