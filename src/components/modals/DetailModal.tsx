// Import Component
import CloseButton from '../buttons/CloseButton';

const DetailModal = ({ isOpen, onClose, data, inputField }: any) => {
  const handleOverlayClick = (e: any) => {
    if (e.target.classList.contains('overlay')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overlay"
      onClick={handleOverlayClick}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-8 bg-white rounded-lg shadow-lg">
        <CloseButton onClick={onClose} />
        <div className="relative mt-8 mb-8 text-center ">
          <span className="relative z-10 px-8 py-2 text-2xl text-white border rounded-full bg-primary border-primaryColor">
            Detail Data
          </span>
          <div className="absolute top-1/2 text-black bg-black left-0 transform -translate-y-1/2 w-full h-0.5 bg-primaryColor z-0"></div>
        </div>
        {data && (
          <div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="pb-3 text-lg font-bold leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                    Field
                  </th>
                  <th className="pb-3 pl-5 text-lg font-bold leading-4 tracking-wider text-left text-gray-500 uppercase bg-gray-50">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((key) => {
                  // Find the corresponding label in inputField
                  const field = inputField.find(
                    (field: any) => field.id === key
                  );

                  // Use field.label if found, otherwise use the key itself
                  const displayKey = field ? field.label : key;

                  return (
                    <tr key={key}>
                      <th className="px-2 py-3 border-b text-start">
                        <strong>{displayKey}</strong>
                      </th>
                      <td className="py-3 pl-5 border-b text-start">
                        {Array.isArray(data[key]) ? (
                          <ul>
                            {data[key].map((arrayData: any, index: number) => (
                              <li key={index}>
                                {Object.keys(arrayData).map(
                                  (arrayKey: string) => (
                                    <div key={arrayKey}>
                                      <strong>{arrayKey}:</strong>{' '}
                                      {arrayData[arrayKey]} <br />
                                    </div>
                                  )
                                )}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          data[key]
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailModal;
