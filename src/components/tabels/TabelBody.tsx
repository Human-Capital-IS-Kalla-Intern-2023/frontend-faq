// Library & Package Import
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Import Components
import EditModal from '../modals/EditModal.tsx';
import DeleteModal from '../modals/DeleteModal.tsx';
import DetailModal from '../modals/DetailModal.tsx';
import { DeleteText } from '../../helpers/DeleteText.tsx';
import { TruncateText } from '../../helpers/TruncateText.tsx';
import IconRenderer from '../../helpers/IconRenders.tsx';

// Import Assets
import {
  ThreeDotIcon,
  EditIcon,
  DetailIcon,
  TrashIcon,
} from '../../assets/icons/icon.tsx';

// Import Type
import { tagEnum } from '../../state/enum/tagEnum.tsx';
import { apiEnum } from '../../state/enum/apiEnum.tsx';

interface InputField {
  id: any;
  label: any;
  name: any;
  type?: any;
}

type ColCells = { key: any; text: string } | { keys: any[]; text: string };

interface TabelBodyProps {
  title: string;
  data?: any[];
  colCells: ColCells[];
  inputFields: InputField[];
  detailedData?: any | null;
  fetchDetailedData?: (slug: any) => void;
  onSubmit: (formData: any, slug: any) => void;
  onDelete: (slug: any) => void;
  onEditNavigate?: string;
  onDetailNavigate?: string;
  changeIsActive?: (idIsActive: any, newIsActive: any) => Promise<any>;
}

const TabelBody: React.FC<TabelBodyProps> = ({
  title,
  data,
  colCells,
  inputFields,
  onSubmit,
  onDelete,
  detailedData,
  fetchDetailedData,
  onEditNavigate,
  onDetailNavigate,
  changeIsActive,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null | boolean>(
    null
  );

  const [editId, setEditId] = useState<any>(null);

  const scrollRef = useRef(false);

  const toggleDropdown = (idOrNo: string) => {
    setActiveDropdown((prevIdOrNo) => (prevIdOrNo === idOrNo ? null : idOrNo));
  };

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [detailModalOpen, setIsDetailModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const [editedData, setEditedData] = useState<any>({});

  const navigate = useNavigate();
  const location = useLocation();

  const locationPathname = location.pathname;

  const openEditModal = useCallback(
    async (slug: string) => {
      if (data) {
        const dataToEdit = await data.find((item: any) => item.slug === slug);
        if (dataToEdit) {
          setEditId(slug);
          setEditedData(dataToEdit);
          setEditModalOpen(true);
        }
      }
    },
    [data]
  );

  const { modalEditSlug, modalDetailSlug, modalDeleteSlug } = useParams();

  const closeEditModal = useCallback(() => {
    setEditId(null);
    setEditModalOpen(false);

    if (modalEditSlug !== undefined) {
      const basePath = location.pathname.replace(`/edit/${modalEditSlug}`, '');

      navigate(basePath);
    }
  }, [navigate, modalEditSlug, location.pathname]);

  const openDetailModal = useCallback(
    async (slug: any) => {
      if (fetchDetailedData) {
        try {
          fetchDetailedData(slug);

          if (!onDetailNavigate) {
            setIsDetailModalOpen(true);
          }
        } catch (error) {
          console.error('Error fetching detailed data:', error);
        }
      }
    },
    [fetchDetailedData, onDetailNavigate]
  );

  const closeDetailModal = useCallback(() => {
    setIsDetailModalOpen(false);
    if (modalDetailSlug !== undefined) {
      const basePath = location.pathname.replace(
        `/detail/${modalDetailSlug}`,
        ''
      );

      navigate(basePath);
    }
  }, [navigate, modalDetailSlug, location.pathname]);

  const openDeleteModal = useCallback((slug: string) => {
    setDeleteId(slug);
    setDeleteModalOpen(true);
  }, []);

  const closeDeleteModal = useCallback(() => {
    setDeleteId(null);
    setDeleteModalOpen(false);

    if (modalDeleteSlug !== undefined) {
      const basePath = location.pathname.replace(
        `/delete/${modalDeleteSlug}`,
        ''
      );

      navigate(basePath);
    }
  }, [navigate, modalDeleteSlug, location.pathname]);

  const closeFilterDropdown = () => {
    setActiveDropdown(false);
  };

  const renderTableCell = (cell: ColCells, customCell: Record<string, any>) => {
    if ('key' in cell) {
      if (cell.key === apiEnum.IMAGE) {
        return (
          <img
            src={customCell.image}
            alt={`Image ${TruncateText(customCell.name, 10)}`}
            className="object-cover w-full h-8 rounded"
          />
        );
      }

      if (cell.key === apiEnum.ICON) {
        return <IconRenderer value={customCell.icon} />;
      }
    } else if ('keys' in cell) {
      // Multiple keys
      const renderedValues = cell.keys.map((key) => {
        if (customCell.image !== '') {
          if (key === apiEnum.IMAGE) {
            return (
              <img
                key={key}
                src={customCell.image}
                alt={`Image ${TruncateText(customCell.name, 10)}`}
                className="object-cover w-full h-8 rounded"
              />
            );
          }
        }
        if (customCell.icon !== '') {
          if (key === apiEnum.ICON) {
            return <IconRenderer key={key} value={customCell.icon} />;
          }
        }

        return customCell[key];
      });

      return renderedValues;
    }

    if (cell.key === 'topic_is_status' || cell.key === 'is_status') {
      return (
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            defaultChecked={customCell[cell.key] === 1}
            onChange={async () => {
              const newValue = customCell[cell.key] === 1 ? 0 : 1;
              try {
                if (changeIsActive) {
                  await changeIsActive(customCell.slug, newValue);
                }
              } catch (error) {
                console.error('Error changing topic_is_status:', error);
              }
            }}
          />

          <div
            className={`w-11 h-6 bg-red-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white dark:peer-focus:ring-gray-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}
          ></div>
        </label>
      );
    }

    if ((apiEnum.NAME, apiEnum.QUESTION.includes(cell.key))) {
      return TruncateText(customCell[cell.key], 25);
    } else {
      return customCell[cell.key];
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        closeFilterDropdown();
        scrollRef.current = false;
      }
    };

    const handleEscapeKey = (event: any) => {
      if (event.key === tagEnum.ESCAPE) {
        closeEditModal();
        closeDeleteModal();
        closeDetailModal();
        setActiveDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [closeDeleteModal, closeDetailModal, closeEditModal]);

  useEffect(() => {
    if (modalEditSlug !== undefined) {
      if (data && Array.isArray(data) && data.length > 0) {
        const dataToEdit = data.find(
          (item: any) => item.slug === modalEditSlug
        );

        if (dataToEdit && !onEditNavigate) {
          setActiveDropdown(dataToEdit.slug);
          setEditId(modalEditSlug);
          setEditedData(dataToEdit);
          setEditModalOpen(true);
        } else {
          navigate('/notfound');
        }
      }
    }
  }, [data, modalEditSlug, navigate, onEditNavigate, openEditModal]);

  useEffect(() => {
    if (modalDetailSlug !== undefined) {
      setActiveDropdown(modalDetailSlug);

      if (!detailedData && !onDetailNavigate) {
        if (fetchDetailedData) {
          setIsDetailModalOpen(true);
          fetchDetailedData(modalDetailSlug);
        }
      }
    }
  }, [
    modalDetailSlug,
    navigate,
    detailedData,
    fetchDetailedData,
    onDetailNavigate,
  ]);

  useEffect(() => {
    if (modalDeleteSlug) {
      setActiveDropdown(modalDeleteSlug);

      if (data && Array.isArray(data) && data.length > 0) {
        const dataToDelete = data.find(
          (item: any) => item.slug === modalDeleteSlug
        );

        if (dataToDelete) {
          openDeleteModal(modalDeleteSlug);
        } else {
          navigate('/notfound');
        }
      }
    }
  }, [data, location.search, modalDeleteSlug, navigate, openDeleteModal]);

  const dropdownRef = useRef<HTMLTableRowElement | null>(null);

  return (
    <section className="py-3 antialiased sm:py-2 overlay">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="relative bg-white shadow-custom sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="uppercase text-[16px] ">
                <tr>
                  <th scope="col" className="invisible w-12 px-2 py-4">
                    {'#'}
                  </th>
                  {colCells.map((cell, index) => (
                    <th key={index} scope="col" className={`px-2 py-4`}>
                      {cell.text}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data && Array.isArray(data) && data.length > 0 ? (
                  data.map((customCell: any, index: number) => (
                    <tr
                      ref={dropdownRef}
                      className={`border-b ${
                        index === data.length - 1 ? 'border-none' : ''
                      } ${
                        activeDropdown === customCell.slug ? 'bg-slate-200' : ''
                      } dropdown-wrapper`}
                      key={index}
                    >
                      <td className="flex items-center px-2 py-4 font-medium text-center text-black whitespace-nowrap">
                        <button
                          id={`dropdown-button-${index}`}
                          className="inline-flex items-center text-sm font-medium rounded-lg hover:text-center"
                          role="button"
                          aria-label="Dropdown button"
                          onClick={() => toggleDropdown(customCell.slug)}
                          aria-haspopup="menu"
                          aria-expanded={
                            activeDropdown === customCell.slug
                              ? 'true'
                              : 'false'
                          }
                        >
                          <ThreeDotIcon className="w-5 h-5" />
                        </button>
                        {activeDropdown === customCell.slug && (
                          <div
                            className={`absolute left-0 z-10 ml-10 bg-white divide-y rounded shadow-2xl w-44 ${
                              index === data.length - 1 ? 'mb-20' : ''
                            }`}
                            role="menu"
                            aria-labelledby={`dropdown-button-${index}`}
                          >
                            <ul className="py-1 text-sm shadow-[0_0px_15px_1px_rgba(0,0,0,0.4)]">
                              <li>
                                <Link
                                  to={
                                    onEditNavigate
                                      ? onEditNavigate.replace(
                                          ':QuestionSlug',
                                          customCell.slug
                                        )
                                      : `edit/${customCell.slug}`
                                  }
                                  onClick={() => openEditModal(customCell.slug)}
                                  type="button"
                                  aria-label="Edit"
                                  className="flex items-center w-full px-4 py-2 duration-200 hover:text-white hover:bg-primary"
                                >
                                  <EditIcon className="w-4 h-4 mr-2" />
                                  Edit
                                </Link>

                                {editModalOpen && (
                                  <EditModal
                                    isOpen={editModalOpen}
                                    onClose={closeEditModal}
                                    title={title}
                                    inputFields={inputFields}
                                    onSubmit={onSubmit}
                                    idToEdit={editId}
                                    initialFormData={editedData}
                                  />
                                )}
                              </li>
                              <li>
                                <Link
                                  to={
                                    onDetailNavigate
                                      ? onDetailNavigate.replace(
                                          ':QuestionSlug',
                                          customCell.slug
                                        )
                                      : `detail/${customCell.slug}`
                                  }
                                  onClick={() =>
                                    openDetailModal(customCell.slug)
                                  }
                                  type="button"
                                  aria-label="Detail"
                                  className="flex items-center w-full px-4 py-2 duration-200 hover: hover:text-white hover:bg-primary"
                                >
                                  <DetailIcon className="w-4 h-4 mr-2" />
                                  Detail
                                </Link>

                                {detailModalOpen && (
                                  <DetailModal
                                    isOpen={detailModalOpen}
                                    onClose={closeDetailModal}
                                    data={detailedData}
                                  />
                                )}
                              </li>

                              <li>
                                <Link
                                  to={`delete/${customCell.slug}`}
                                  type="button"
                                  aria-label="Delete"
                                  onClick={() =>
                                    openDeleteModal(customCell.slug)
                                  }
                                  className="flex items-center w-full px-4 py-2 text-red-500 duration-200 hover: hover:text-white hover:bg-red-800"
                                >
                                  <TrashIcon className="w-4 h-4 mr-2" />
                                  Delete
                                </Link>
                                {deleteModalOpen && (
                                  <DeleteModal
                                    deleteData={DeleteText(
                                      customCell,
                                      locationPathname
                                    )}
                                    isOpen={deleteModalOpen}
                                    onClose={closeDeleteModal}
                                    onDelete={() => {
                                      if (deleteId) {
                                        onDelete(deleteId);
                                        closeDeleteModal();
                                      }
                                    }}
                                  />
                                )}
                              </li>
                            </ul>
                          </div>
                        )}
                      </td>
                      {colCells.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`px-2 py-4 font-medium text-black whitespace-nowrap text-[15px]`}
                        >
                          {renderTableCell(cell, customCell)}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={colCells.length + 1}></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabelBody;
