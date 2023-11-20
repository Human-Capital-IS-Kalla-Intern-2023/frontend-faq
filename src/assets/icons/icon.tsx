interface SvgIconProps {
  className?: string;
  onClick?: () => void;
}

const OpenEyeIcon: React.FC<SvgIconProps> = ({ className, onClick }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 16 16"
    width="16"
    height="16"
    onClick={onClick}
  >
    <path d="M10.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
  </svg>
);

const CloseEyeIcon: React.FC<SvgIconProps> = ({ className, onClick }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 16 16"
    width="16"
    height="16"
    onClick={onClick}
  >
    <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 01-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 002.79-.588zM5.21 3.088A7.028 7.028 0 018 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 00-4.474-4.474L5.21 3.089z" />
    <path d="M5.525 7.646a2.5 2.5 0 002.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 012.829 2.829zm3.171 6l-12-12 .708-.708 12 12-.708.708z" />
  </svg>
);

const ThreeDotIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    className={className}
  >
    <path d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);
const EditIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
    />
  </svg>
);

const DetailIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const TrashIcon: React.FC<SvgIconProps> = ({ className, onClick }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    aria-hidden="true"
    className={className}
    onClick={onClick}
  >
    <path d="M2.5 1a1 1 0 00-1 1v1a1 1 0 001 1H3v9a2 2 0 002 2h6a2 2 0 002-2V4h.5a1 1 0 001-1V2a1 1 0 00-1-1H10a1 1 0 00-1-1H7a1 1 0 00-1 1H2.5zm3 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zM8 5a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7A.5.5 0 018 5zm3 .5v7a.5.5 0 01-1 0v-7a.5.5 0 011 0z" />
  </svg>
);

const LeftArrowIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    className={className}
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const RightArrowIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    className={className}
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const SearchIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    className={className}
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    />
  </svg>
);

const PlusIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      clipRule="evenodd"
      fillRule="evenodd"
      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
    />
  </svg>
);

const ArrowButtonIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      clipRule="evenodd"
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    />
  </svg>
);
const CompanyIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="23"
    width="23"
    className={className}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M21 19h2v2H1v-2h2V4a1 1 0 011-1h10a1 1 0 011 1v15h4v-8h-2V9h3a1 1 0 011 1v9zM5 5v14h8V5H5zm2 6h4v2H7v-2zm0-4h4v2H7V7z" />
  </svg>
);

const SettingIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 1024 1024"
    fill="currentColor"
    height="23"
    width="23"
    className={className}
  >
    <path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z" />
  </svg>
);

const DashboardIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    fill="none"
    viewBox="0 0 15 15"
    height="23"
    width="23"
    className={className}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 001.04 2.15C1 2.324 1 2.52 1 2.75V5.25c0 .229 0 .426.041.6A1.5 1.5 0 002.15 6.96C2.324 7 2.52 7 2.75 7H5.25c.229 0 .426 0 .6-.041A1.5 1.5 0 006.96 5.85C7 5.676 7 5.48 7 5.25V2.75c0-.229 0-.426-.041-.6A1.5 1.5 0 005.85 1.04C5.676 1 5.48 1 5.25 1H2.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.003.374-.014.417a.5.5 0 01-.37.37C5.575 5.996 5.509 6 5.2 6H2.8c-.308 0-.374-.003-.417-.014a.5.5 0 01-.37-.37C2.004 5.575 2 5.509 2 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37zM9.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 008.04 2.15C8 2.324 8 2.52 8 2.75V5.25c0 .229 0 .426.041.6A1.5 1.5 0 009.15 6.96C9.324 7 9.52 7 9.75 7H12.25c.229 0 .426 0 .6-.041A1.5 1.5 0 0013.96 5.85C14 5.676 14 5.48 14 5.25V2.75c0-.229 0-.426-.041-.6A1.5 1.5 0 0012.85 1.04C12.676 1 12.48 1 12.25 1H9.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 01-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.003-.417-.014a.5.5 0 01-.37-.37C9.004 5.575 9 5.509 9 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37zM2.75 8H5.25c.229 0 .426 0 .6.041A1.5 1.5 0 016.96 9.15C7 9.324 7 9.52 7 9.75V12.25c0 .229 0 .426-.041.6A1.5 1.5 0 015.85 13.96C5.676 14 5.48 14 5.25 14H2.75c-.229 0-.426 0-.6-.041A1.5 1.5 0 011.04 12.85C1 12.676 1 12.48 1 12.25V9.75c0-.229 0-.426.041-.6A1.5 1.5 0 012.15 8.04C2.324 8 2.52 8 2.75 8zm.05 1c-.308 0-.374.003-.417.014a.5.5 0 00-.37.37C2.004 9.425 2 9.491 2 9.8v2.4c0 .308.003.374.014.417a.5.5 0 00.37.37c.042.01.108.013.416.013h2.4c.308 0 .374-.004.417-.014a.5.5 0 00.37-.37c.01-.042.013-.108.013-.416V9.8c0-.308-.003-.374-.014-.417a.5.5 0 00-.37-.37C5.575 9.004 5.509 9 5.2 9H2.8zm7-1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 008.04 9.15C8 9.324 8 9.52 8 9.75V12.25c0 .229 0 .426.041.6A1.5 1.5 0 009.15 13.96c.174.041.371.041.6.041H12.25c.229 0 .426 0 .6-.041a1.5 1.5 0 001.109-1.109c.041-.174.041-.371.041-.6V9.75c0-.229 0-.426-.041-.6A1.5 1.5 0 0012.85 8.04C12.676 8 12.48 8 12.25 8H9.8zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 01.37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 01-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.004-.417-.014a.5.5 0 01-.37-.37C9.004 12.575 9 12.509 9 12.2V9.8c0-.308.003-.374.014-.417a.5.5 0 01.37-.37z"
      clipRule="evenodd"
    />
  </svg>
);

const UserIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="23"
    width="23"
    className={className}
  >
    <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm2-3a2 2 0 11-4 0 2 2 0 014 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
  </svg>
);
const ReportIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="23"
    width="23"
    className={className}
  >
    <path d="M9.5 0a.5.5 0 01.5.5.5.5 0 00.5.5.5.5 0 01.5.5V2a.5.5 0 01-.5.5h-5A.5.5 0 015 2v-.5a.5.5 0 01.5-.5.5.5 0 00.5-.5.5.5 0 01.5-.5h3z" />
    <path d="M3 2.5a.5.5 0 01.5-.5H4a.5.5 0 000-1h-.5A1.5 1.5 0 002 2.5v12A1.5 1.5 0 003.5 16h9a1.5 1.5 0 001.5-1.5v-12A1.5 1.5 0 0012.5 1H12a.5.5 0 000 1h.5a.5.5 0 01.5.5v12a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-12z" />
    <path d="M10 7a1 1 0 112 0v5a1 1 0 11-2 0V7zm-6 4a1 1 0 112 0v1a1 1 0 11-2 0v-1zm4-3a1 1 0 00-1 1v3a1 1 0 102 0V9a1 1 0 00-1-1z" />
  </svg>
);

const LogoutIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="23"
    width="23"
    className={className}
  >
    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
    <path d="M10.828.122A.5.5 0 0111 .5V1h.5A1.5 1.5 0 0113 2.5V15h1.5a.5.5 0 010 1h-13a.5.5 0 010-1H3V1.5a.5.5 0 01.43-.495l7-1a.5.5 0 01.398.117zM11.5 2H11v13h1V2.5a.5.5 0 00-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
  </svg>
);

const CloseSidebarIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="25"
    width="25"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M12.5 15a.5.5 0 01-.5-.5v-13a.5.5 0 011 0v13a.5.5 0 01-.5.5zM10 8a.5.5 0 01-.5.5H3.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L3.707 7.5H9.5a.5.5 0 01.5.5z"
    />
  </svg>
);
const ReponsiveSidebarIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    width="20"
    viewBox="0 0 448 512"
    className={className}
  >
    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
  </svg>
);

const DropdownSidebarMenuIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    viewBox="0 0 448 512"
    className={className}
  >
    <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
  </svg>
);

const CloseButtonIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    className={className}
  >
    <path
      fill="currentColor"
      d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
    />
  </svg>
);

const PositionIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    className={className}
  >
    <path d="M22 10v3h-3v-3h3M2 13h3v-3H2v3m15-8c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v8h10V5M7 15H6v2h5v1l-4 4h2.8l2.2-2.2 2.2 2.2H17l-4-4v-1h5v-2H7z" />
  </svg>
);

const SalaryIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    <path d="M11 3 H13 A2 2 0 0 1 15 5 V5 A2 2 0 0 1 13 7 H11 A2 2 0 0 1 9 5 V5 A2 2 0 0 1 11 3 z" />
    <path d="M14 11h-2.5a1.5 1.5 0 000 3h1a1.5 1.5 0 010 3H10M12 17v1m0-8v1" />
  </svg>
);

const EmployeeIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 640 512"
    fill="currentColor"
    height="1em"
    width="1em"
    className={className}
  >
    <path d="M184 88c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zM64 245.7c-10 11.2-16 26.1-16 42.3s6 31.1 16 42.3v-84.6zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32v-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416v-21.5c20-24.7 32-56.2 32-90.5 0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112 0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32zM568 88c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56zm8 157.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm-80 144c0 16.2 6 31 16 42.3v-84.6c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zm64 42.3c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32v-42.8c-37.8-18-64-56.5-64-101.2 0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
  </svg>
);

const DirectorateIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    className={className}
  >
    <path d="M17 16h-2v6h-3v-5H8v5H5v-6H3l7-6 7 6M6 2l4 4H9v3H7V6H5v3H3V6H2l4-4m12 1l5 5h-1v4h-3V9h-2v3h-1.66L14 10.87V8h-1l5-5z" />
  </svg>
);

const DivisionIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 640 512"
    fill="currentColor"
    height="1em"
    width="1em"
    className={className}
  >
    <path d="M48 0C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h96v-80c0-26.5 21.5-48 48-48s48 21.5 48 48v80h89.9c-6.3-10.2-9.9-22.2-9.9-35.1 0-46.9 25.8-87.8 64-109.2V48c0-26.5-21.5-48-48-48H48zm16 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16zm304 176c0-44.2-35.8-80-80-80s-80 35.8-80 80 35.8 80 80 80 80-35.8 80-80zM352 477.1c0 19.3 15.6 34.9 34.9 34.9h218.2c19.3 0 34.9-15.6 34.9-34.9 0-51.4-41.7-93.1-93.1-93.1H445.1c-51.4 0-93.1 41.7-93.1 93.1z" />
  </svg>
);

const SectionIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    className={className}
  >
    <path d="M15 11h7v2h-7zm1 4h6v2h-6zm-2-8h8v2h-8zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2zm4-7c1.995 0 3.5-1.505 3.5-3.5S9.995 5 8 5 4.5 6.505 4.5 8.5 6.005 12 8 12z" />
  </svg>
);

const CompanyIcon2: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    className={className}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M12 19h2V6l6.394 2.74a1 1 0 01.606.92V19h2v2H1v-2h2V5.65a1 1 0 01.594-.914l7.703-3.424A.5.5 0 0112 1.77V19z" />
  </svg>
);

const AssigmentIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="23"
    width="23"
    className={className}
  >
    <path d="M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10h20V10c0-1.1-.9-2-2-2M9 6h6v2H9V6m11 12H4v-3h2v1h2v-1h8v1h2v-1h2v3m-2-5v-1h-2v1H8v-1H6v1H4v-3h16v3h-2z" />
  </svg>
);

const EligiblesIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    height="23"
    width="23"
    className={className}
  >
    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <path d="M12.5 7 A4 4 0 0 1 8.5 11 A4 4 0 0 1 4.5 7 A4 4 0 0 1 12.5 7 z" />
    <path d="M17 11l2 2 4-4" />
  </svg>
);

const TeamIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    height="23"
    width="23"
    className={className}
  >
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <path d="M13 7 A4 4 0 0 1 9 11 A4 4 0 0 1 5 7 A4 4 0 0 1 13 7 z" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const UserGear: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    height="23"
    width="23"
    className={className}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 17 A4 4 0 0 1 17 21 A4 4 0 0 1 13 17 A4 4 0 0 1 21 17 z" />
    <path d="M17 13v4h4M12 3v4a1 1 0 001 1h4" />
    <path d="M11.5 21H5a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v2m0 3v4" />
  </svg>
);

const LeftArrowIcon2: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M12 8a.5.5 0 01-.5.5H5.707l2.147 2.146a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 11.708.708L5.707 7.5H11.5a.5.5 0 01.5.5z"
    />
  </svg>
);

const RefreshIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    className={className}
  >
    <path d="M6 18.7V21a1 1 0 01-2 0v-5a1 1 0 011-1h5a1 1 0 110 2H7.1A7 7 0 0019 12a1 1 0 112 0 9 9 0 01-15 6.7zM18 5.3V3a1 1 0 012 0v5a1 1 0 01-1 1h-5a1 1 0 010-2h2.9A7 7 0 005 12a1 1 0 11-2 0 9 9 0 0115-6.7z" />
  </svg>
);
const WarningIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 1024 1024"
    fill="currentColor"
    height="1em"
    width="1em"
    className={className}
  >
    <path d="M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z" />
  </svg>
);

const PDFIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 384 512"
    fill="currentColor"
    height="1em"
    width="1em"
    className={className}
  >
    <path d="M320 464c8.8 0 16-7.2 16-16v-32h48v32c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64v-32h48v32c0 8.8 7.16 16 16 16h256zm-64-304c-17.7 0-32-14.3-32-32V48H64c-8.84 0-16 7.16-16 16v128H0V64C0 28.65 28.65 0 64 0h165.5c17 0 33.2 6.743 45.2 18.75l90.6 90.55c12 12 18.7 28.2 18.7 45.2V192h-48v-32h-80zM88 224c30.9 0 56 25.1 56 56s-25.1 56-56 56h-8v32c0 8.8-7.16 16-16 16s-16-7.2-16-16V240c0-8.8 7.16-16 16-16h24zm24 56c0-13.3-10.7-24-24-24h-8v48h8c13.3 0 24-10.7 24-24zm48-40c0-8.8 7.2-16 16-16h24c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-24c-8.8 0-16-7.2-16-16V240zm32 112h8c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-8v96zm144-128c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V240c0-8.8 7.2-16 16-16h48z" />
  </svg>
);

const FAQIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    className={className}
  >
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16v12M12.2 5.5c-.9 0-1.6.2-2.1.5-.6.4-.9 1-.8 1.7h2c0-.3.1-.5.3-.6.2-.1.4-.2.7-.2.3 0 .6.1.8.3.2.2.3.4.3.7 0 .3-.1.5-.2.7-.2.2-.4.4-.6.5-.5.3-.9.6-1.1.8-.4.3-.5.6-.5 1.1h2c0-.3.1-.5.1-.7.1-.2.3-.3.5-.5.5-.2.8-.5 1.1-.9.3-.4.4-.8.4-1.2 0-.7-.3-1.3-.8-1.7-.4-.3-1.2-.5-2.1-.5M11 12v2h2v-2h-2z" />
  </svg>
);

const CategoryIcon: React.FC<SvgIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    height="1em"
    width="1em"
    className={className}
  >
    <path d="M10 3H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
  </svg>
);
export {
  FAQIcon,
  CategoryIcon,
  EmployeeIcon,
  SectionIcon,
  DivisionIcon,
  DirectorateIcon,
  ThreeDotIcon,
  EditIcon,
  DetailIcon,
  TrashIcon,
  LeftArrowIcon,
  RightArrowIcon,
  SearchIcon,
  PlusIcon,
  ArrowButtonIcon,
  OpenEyeIcon,
  CloseEyeIcon,
  CompanyIcon,
  CompanyIcon2,
  SettingIcon,
  DashboardIcon,
  UserIcon,
  ReportIcon,
  LogoutIcon,
  CloseSidebarIcon,
  ReponsiveSidebarIcon,
  DropdownSidebarMenuIcon,
  CloseButtonIcon,
  PositionIcon,
  SalaryIcon,
  AssigmentIcon,
  EligiblesIcon,
  TeamIcon,
  UserGear,
  LeftArrowIcon2,
  RefreshIcon,
  PDFIcon,
  WarningIcon,
};
