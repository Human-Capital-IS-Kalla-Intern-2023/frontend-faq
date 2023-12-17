// Import Library & Package
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

// Import Component
import TabelHeader from '../../../components/tabels/TabelHeader';
import TabelFooter from '../../../components/tabels/TabelFooter';
import TabelBody from '../../../components/tabels/TabelBody';

import {
  SuccessAlert,
  ErrorAlert,
} from '../../../components/alerts/CustomAlert';
import { ResetAlert } from '../../../helpers/ResetAlert';

// Import API
import {
  getTopicAdmin,
  getDetailTopicAdmin,
  addTopicAdmin,
  updateTopicAdmin,
  deleteTopicAdmin,
  searchTopicAdmin,
  changeIsActiveTopicAdmin,
} from '../../../api/admin/TopicAdminAPI';

import {
  colCells,
  inputField,
  getIconList,
} from '../../../assets/data/TopicAdminData';

const TopicAdmin: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // TopicAdmin State
  const [topicAdmin, setTopicAdmin] = useState<string[]>([]);
  const [detailedData, setDetailedData] = useState<string | null>(null);

  // Loading
  const [isLoading, setIsLoading] = useState(false);

  // Search
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const navigate = useNavigate();
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalDataCount =
    searchResults.length > 0 ? searchResults.length : topicAdmin.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const currentTopicAdminData = topicAdmin.slice(startIndex - 1, endIndex);

  // GET all topicAdmin data
  const fetchTopicAdmin = async () => {
    setIsLoading(true);

    try {
      const responseData = await getTopicAdmin();
      setTopicAdmin(responseData.data);
    } catch (error: any) {
      console.error('Error fetch all topic admin:', error);
      setErrorTitle(`Error fetch all topic admin`);

      setErrorMessage(error.response.data.message);
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

  // GET detail topicAdmin data by id
  const fetchDetailTopicAdmin = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await getDetailTopicAdmin(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error fetch detail topic admin:', error);
      setErrorTitle(`Error fetch detail topic admin`);
      navigate('/notfound');
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

  // POST new topicAdmin data
  const handleAddTopicAdmin = async (formData: string) => {
    try {
      const responseData = await addTopicAdmin(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      fetchTopicAdmin();
    } catch (error: any) {
      console.error('Error adding topic admin:', error);
      setErrorTitle(`Error adding topic admin`);

      if (error.response.data.errors) {
        const errorMessages = Object.values(error.response.data.errors);
        setErrorMessage(errorMessages.join('\n'));
      } else {
        setErrorMessage(error.response.data.message);
      }
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  // PUT topicAdmin data
  const handleEditTopicAdmin = async (formData: string, id: number) => {
    try {
      const responseData = await updateTopicAdmin(id, formData);

      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchTopicAdmin();
    } catch (error: any) {
      console.error('Error editing topic admin:', error);
      setErrorTitle(`Error editing topic admin`);
      if (error.response.data.errors) {
        const errorMessages = Object.values(error.response.data.errors);
        setErrorMessage(errorMessages.join('\n'));
      } else {
        setErrorMessage(error.response.data.message);
      }
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  // DELETE topicAdmin data
  const handleDeleteTopicAdmin = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await deleteTopicAdmin(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchTopicAdmin();
    } catch (error: any) {
      console.error('Error deleting topic admin:', error);
      setErrorTitle(`Error deleting topic admin`);
      if (error.response.data.errors) {
        const errorMessages = Object.values(error.response.data.errors);
        setErrorMessage(errorMessages.join('\n'));
      } else {
        setErrorMessage(error.response.data.message);
      }
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

  const handleSearchTopicAdmin = async (inputSearch: string) => {
    try {
      if (inputSearch.trim() === '') {
        setSearchResults([]);
      } else {
        const responseData = await searchTopicAdmin(inputSearch);

        if (responseData.data.length === 0) {
          setErrorTitle('No Results');
          setErrorMessage(`No results found for ${inputSearch}`);
        } else {
          setSearchResults(responseData.data);
        }
      }
    } catch (error: any) {
      console.error('Error search topic admin:', error);
      setErrorTitle('Error search topic admin');
      if (error.response.data.errors) {
        const errorMessages = Object.values(error.response.data.errors);
        setErrorMessage(errorMessages.join('\n'));
      } else {
        setErrorMessage(error.response.data.message);
      }
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  const handleChangeIsActiveTopicAdmin = async (
    idIsActive: any,
    newIsActive: any
  ) => {
    try {
      await changeIsActiveTopicAdmin(idIsActive, newIsActive);
      fetchTopicAdmin();
    } catch (error: any) {
      console.error('Error change is active topic admin:', error);
      setErrorTitle('Error when delete topic admin');
      if (error.response.data.errors) {
        const errorMessages = Object.values(error.response.data.errors);
        setErrorMessage(errorMessages.join('\n'));
      } else {
        setErrorMessage(error.response.data.message);
      }
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  useEffect(() => {
    getIconList();
    fetchTopicAdmin();
  }, []);

  return (
    <>
      <h1 className="px-4 py-2 my-1 text-xl">Topic Database</h1>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <ReactLoading type="spin" color="green" height={50} width={50} />
        </div>
      )}
      {successMessage && successTitle && (
        <SuccessAlert title={successTitle} text={successMessage} />
      )}
      {errorMessage && errorTitle && (
        <ErrorAlert title={errorTitle} text={errorMessage} />
      )}
      <TabelHeader
        onNavigate="add"
        addButtonText="Add Topic"
        title="Add Topic"
        inputFields={inputField}
        onSubmit={handleAddTopicAdmin}
        onSearch={handleSearchTopicAdmin}
      />
      <TabelBody
        title="Edit Topic"
        colCells={colCells}
        data={searchResults.length > 0 ? searchResults : currentTopicAdminData}
        inputFields={inputField}
        onSubmit={handleEditTopicAdmin}
        onDelete={handleDeleteTopicAdmin}
        detailedData={detailedData}
        fetchDetailedData={fetchDetailTopicAdmin}
        changeIsActive={handleChangeIsActiveTopicAdmin}
        onDetailNavigate="detail/:TopicSlug"
      />
      <TabelFooter
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        totalDataCount={totalDataCount}
        onPreviousPage={() => setCurrentPage(currentPage - 1)}
        onNextPage={() => setCurrentPage(currentPage + 1)}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default TopicAdmin;
