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
  getFaqAdmin,
  getDetailFaqAdmin,
  addFaqAdmin,
  updateFaqAdmin,
  deleteFaqAdmin,
  searchFaqAdmin,
  changeIsActiveFaqAdmin,
} from '../../../api/admin/FaqAdminAPI';

import { colCells, inputField } from '../../../assets/data/FaqAdminData';

const FaqAdmin: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // FaqAdmin State
  const [faqAdmin, setFaqAdmin] = useState<string[]>([]);
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
    searchResults.length > 0 ? searchResults.length : faqAdmin.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const currentFaqAdminData = faqAdmin.slice(startIndex - 1, endIndex);

  // GET all faqAdmin data
  const fetchFaqAdmin = async () => {
    setIsLoading(true);

    try {
      const reponseData = await getFaqAdmin();
      setFaqAdmin(reponseData.data);
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

  // GET detail faqAdmin data by id
  const fetchDetailFaqAdmin = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await getDetailFaqAdmin(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error fetch detail faqAdmin:', error);
      setErrorTitle(`Error fetch detail faqAdmin`);
      navigate('/notfound');
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

  // POST new faqAdmin data
  const handleAddFaqAdmin = async (formData: string) => {
    try {
      const responseData = await addFaqAdmin(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      fetchFaqAdmin();
    } catch (error: any) {
      console.error('Error adding faqAdmin:', error);
      setErrorTitle(`Error adding faqAdmin`);

      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  // PUT faqAdmin data
  const handleEditFaqAdmin = async (formData: string, id: number) => {
    try {
      const responseData = await updateFaqAdmin(id, formData);

      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      fetchFaqAdmin();
    } catch (error: any) {
      console.error('Error editing faqAdmin:', error);
      setErrorTitle(`Error editing faqAdmin`);
      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  // DELETE faqAdmin data
  const handleDeleteFaqAdmin = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await deleteFaqAdmin(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      // fetchFaqAdmin();
    } catch (error: any) {
      console.error('Error deleting faqAdmin:', error);
      setErrorTitle(`Error deleting faqAdmin`);

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

  const handleSearchFaqAdmin = async (inputSearch: string) => {
    try {
      if (inputSearch.trim() === '') {
        setSearchResults([]);
      } else {
        const responseData = await searchFaqAdmin(inputSearch);

        if (responseData.data.length === 0) {
          setErrorTitle('No Results');
          setErrorMessage(`No results found for ${inputSearch}`);
        } else {
          setSearchResults(responseData.data);
        }
      }
    } catch (error: any) {
      console.error('Error search faqAdmin:', error);
      setErrorTitle('Error search faqAdmin');
      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  const handleChangeIsActiveFaqAdmin = async (
    idIsActive: any,
    newIsActive: any
  ) => {
    try {
      await changeIsActiveFaqAdmin(idIsActive, newIsActive);
      // fetchFaqAdmin();
    } catch (error: any) {
      console.error('Error change is active topic admin:', error);
      const errorMessages = Object.values(error.response.data.errors).flat();
      setErrorMessage(errorMessages.join('\n'));
    }
    ResetAlert(
      setSuccessTitle,
      setSuccessMessage,
      setErrorTitle,
      setErrorMessage
    );
  };

  useEffect(() => {
    fetchFaqAdmin();
  }, []);

  return (
    <>
      <h1 className="px-4 py-2 my-1 text-xl">FAQ Database</h1>
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
        addButtonText="Add FAQ"
        title="Add FAQ"
        inputFields={inputField}
        onSubmit={handleAddFaqAdmin}
        onSearch={handleSearchFaqAdmin}
      />
      <TabelBody
        title="Edit FAQ"
        colCells={colCells}
        data={searchResults.length > 0 ? searchResults : currentFaqAdminData}
        inputFields={inputField}
        onSubmit={handleEditFaqAdmin}
        onDelete={handleDeleteFaqAdmin}
        detailedData={detailedData}
        fetchDetailedData={fetchDetailFaqAdmin}
        changeIsActive={handleChangeIsActiveFaqAdmin}
        onDetailNavigate="detail"
        onEditNavigate="edit"
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

export default FaqAdmin;
