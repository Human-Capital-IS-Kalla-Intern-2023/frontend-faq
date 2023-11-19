// Import Library & Package
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

// Import Component
import TabelHeader from '../../components/tabels/TabelHeader';
import TabelFooter from '../../components/tabels/TabelFooter';
import TabelBody from '../../components/tabels/TabelBody';

import { SuccessAlert, ErrorAlert } from '../../components/alerts/CustomAlert';
import { ResetAlert } from '../../helpers/ResetAlert';

// Import API
import {
  // getCategoryAdmin,
  getDetailCategoryAdmin,
  addCategoryAdmin,
  updateCategoryAdmin,
  deleteCategoryAdmin,
  searchCategoryAdmin,
  changeIsActiveCategoryAdmin,
} from '../../api/admin/CategoryAdminAPI';

const categoryAdmin = [
  {
    id: 1,
    category_name: 'Electronics',
    total_used: 25,
    is_active: true,
  },
  {
    id: 2,
    category_name: 'Clothing',
    total_used: 18,
    is_active: false,
  },
  {
    id: 3,
    category_name: 'Books',
    total_used: 30,
    is_active: true,
  },
  {
    id: 4,
    category_name: 'Home Decor',
    total_used: 15,
    is_active: true,
  },
  {
    id: 5,
    category_name: 'Sports',
    total_used: 22,
    is_active: false,
  },
];

import {
  colCells,
  inputField,
  getIconList,
} from '../../assets/data/CategoryAdminData';

const CategoryAdmin: React.FC = () => {
  // Alert State
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successTitle, setSuccessTitle] = useState<string | null>(null);
  const [errorTitle, setErrorTitle] = useState<string | null>(null);

  // CategoryAdmin State
  // const [categoryAdmin, setCategoryAdmin] = useState<string[]>([]);
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
    searchResults.length > 0 ? searchResults.length : categoryAdmin.length;
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex =
    currentPage === totalPages ? totalDataCount : startIndex + itemsPerPage - 1;
  const currentCategoryAdminData = categoryAdmin.slice(
    startIndex - 1,
    endIndex
  );

  // GET all categoryAdmin data
  // const fetchCategoryAdmin = async () => {
  //   setIsLoading(true);

  //   try {
  //     const reponseData = await getCategoryAdmin();
  //     setCategoryAdmin(reponseData.data);
  //   } catch (error: any) {
  //     console.error('Error fetch all category admin:', error);
  //     setErrorTitle(`Error fetch all category admin`);

  //     setErrorMessage(error.response.data.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  //   ResetAlert(
  //     setSuccessTitle,
  //     setSuccessMessage,
  //     setErrorTitle,
  //     setErrorMessage
  //   );
  // };

  // GET detail categoryAdmin data by id
  const fetchDetailCategoryAdmin = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await getDetailCategoryAdmin(id);
      setDetailedData(responseData.data);
    } catch (error: any) {
      console.error('Error fetch detail categoryAdmin:', error);
      setErrorTitle(`Error fetch detail categoryAdmin`);
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

  // POST new categoryAdmin data
  const handleAddCategoryAdmin = async (formData: string) => {
    try {
      const responseData = await addCategoryAdmin(formData);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);

      // fetchCategoryAdmin();
    } catch (error: any) {
      console.error('Error adding categoryAdmin:', error);
      setErrorTitle(`Error adding categoryAdmin`);

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

  // PUT categoryAdmin data
  const handleEditCategoryAdmin = async (formData: string, id: number) => {
    try {
      const responseData = await updateCategoryAdmin(id, formData);

      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      // fetchCategoryAdmin();
    } catch (error: any) {
      console.error('Error editing categoryAdmin:', error);
      setErrorTitle(`Error editing categoryAdmin`);
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

  // DELETE categoryAdmin data
  const handleDeleteCategoryAdmin = async (id: number) => {
    try {
      setIsLoading(true);

      const responseData = await deleteCategoryAdmin(id);
      setSuccessTitle(`${responseData.status}`);
      setSuccessMessage(`${responseData.message}`);
      // fetchCategoryAdmin();
    } catch (error: any) {
      console.error('Error deleting categoryAdmin:', error);
      setErrorTitle(`Error deleting categoryAdmin`);

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

  const handleSearchCategoryAdmin = async (inputSearch: string) => {
    try {
      if (inputSearch.trim() === '') {
        setSearchResults([]);
      } else {
        const responseData = await searchCategoryAdmin(inputSearch);

        if (responseData.data.length === 0) {
          setErrorTitle('No Results');
          setErrorMessage(`No results found for ${inputSearch}`);
        } else {
          setSearchResults(responseData.data);
        }
      }
    } catch (error: any) {
      console.error('Error search categoryAdmin:', error);
      setErrorTitle('Error search categoryAdmin');
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

  const handleChangeIsActiveCategoryAdmin = async (
    idIsActive: any,
    newIsActive: any
  ) => {
    try {
      await changeIsActiveCategoryAdmin(idIsActive, newIsActive);
      // fetchCategoryAdmin();
    } catch (error: any) {
      console.error('Error change is active configureSalary:', error);
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
    getIconList();
    // fetchCategoryAdmin();
  }, []);

  return (
    <>
      <h1 className="px-4 py-2 my-1 text-xl">Category Database</h1>
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
        addButtonText="Add Category"
        title="Add Category"
        inputFields={inputField}
        onSubmit={handleAddCategoryAdmin}
        onSearch={handleSearchCategoryAdmin}
      />
      <TabelBody
        title="Edit Category"
        colCells={colCells}
        data={
          searchResults.length > 0 ? searchResults : currentCategoryAdminData
        }
        inputFields={inputField}
        onSubmit={handleEditCategoryAdmin}
        onDelete={handleDeleteCategoryAdmin}
        detailedData={detailedData}
        fetchDetailedData={fetchDetailCategoryAdmin}
        changeIsActive={handleChangeIsActiveCategoryAdmin}
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

export default CategoryAdmin;
