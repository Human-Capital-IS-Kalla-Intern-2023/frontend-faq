import { useEffect } from 'react';
import { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CustomUndo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
    <path
      className="ql-stroke"
      d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
    />
  </svg>
);

const CustomRedo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
    <path
      className="ql-stroke"
      d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
    />
  </svg>
);

const undoChange = (quill: any) => () => {
  quill.history.undo();
};

const redoChange = (quill: any) => () => {
  quill.history.redo();
};

const registerFormats = async () => {
  // Register custom size formats
  const Size = Quill.import('attributors/style/size');
  Size.whitelist = [
    '10px',
    '12px',
    '14px',
    '16px',
    '18px',
    '20px',
    '24px',
    '28px',
    '32px',
    '36px',
    '40px',
    '44px',
    '48px',
    '52px',
    '56px',
    '60px',
    '64px',
    '72px',
    '80px',
    '90px',
    '100px',
  ];
  Quill.register(Size, true);

  // Register custom font formats
  const Font = Quill.import('attributors/style/font');
  Font.whitelist = [
    'poppins',
    'arial',
    'comic-sans',
    'courier-new',
    'georgia',
    'helvetica',
    'lucida',
    'times-new-roman',
    'verdana',
    'calibri',
    'palatino',
    'garamond',
    'bookman',
    'impact',
    'cursive',
    'monospace',
    'fantasy',
    'serif',
    'sans-serif',
    'cambria',
    'arial-black',
    'roboto',
  ];
  Quill.register(Font, true);
};
export const QuillToolbar = ({ quill }: any) => {
  useEffect(() => {
    registerFormats();
  }, []);

  const renderFontOptions = () => (
    <>
      <select className="ql-font" defaultValue="helvetica">
        <option value="poppins">Poppins</option>
        <option value="arial">Arial</option>
        <option value="comic-sans">Comic Sans</option>
        <option value="courier-new">Courier New</option>
        <option value="georgia">Georgia</option>
        <option value="helvetica">Helvetica</option>
        <option value="lucida">Lucida</option>
        <option value="times-new-roman">Times New Roman</option>
        <option value="verdana">Verdana</option>
        <option value="calibri">Calibri</option>
        <option value="palatino">Palatino</option>
        <option value="garamond">Garamond</option>
        <option value="bookman">Bookman</option>
        <option value="impact">Impact</option>
        <option value="cursive">Cursive</option>
        <option value="monospace">Monospace</option>
        <option value="fantasy">Fantasy</option>
        <option value="serif">Serif</option>
        <option value="sans-serif">Sans-serif</option>
        <option value="cambria">Cambria</option>
        <option value="arial-black">Arial Black</option>
        <option value="roboto">Roboto</option>
      </select>
    </>
  );

  const renderSizeOptions = () => (
    <>
      <select className="ql-size" defaultValue="10px">
        <option value="10px">10px</option>
        <option value="12px">12px</option>
        <option value="14px">14px</option>
        <option value="16px">16px</option>
        <option value="18px">18px</option>
        <option value="20px">20px</option>
        <option value="24px">24px</option>
        <option value="28px">28px</option>
        <option value="32px">32px</option>
        <option value="36px">36px</option>
        <option value="40px">40px</option>
        <option value="44px">44px</option>
        <option value="48px">48px</option>
        <option value="52px">52px</option>
        <option value="56px">56px</option>
        <option value="60px">60px</option>
        <option value="64px">64px</option>
        <option value="72px">72px</option>
        <option value="80px">80px</option>
        <option value="90px">90px</option>
        <option value="100px">100px</option>
      </select>
    </>
  );

  const renderHeaderOptions = () => (
    <>
      <select className="ql-header" defaultValue="3">
        <option value="1">Heading</option>
        <option value="2">Subheading</option>
        <option value="3">Normal</option>
      </select>
    </>
  );

  const renderStyleOptions = () => (
    <>
      <span className="ql-formats">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
      </span>
    </>
  );

  const renderListOptions = () => (
    <>
      <span className="ql-formats">
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <button className="ql-indent" value="-1" />
        <button className="ql-indent" value="+1" />
      </span>
    </>
  );

  const renderScriptOptions = () => (
    <>
      <span className="ql-formats">
        <button className="ql-script" value="super" />
        <button className="ql-script" value="sub" />
        <button className="ql-blockquote" />
        <button className="ql-direction" />
      </span>
    </>
  );

  const renderAlignmentOptions = () => (
    <>
      <span className="ql-formats">
        <select className="ql-align" />
      </span>
    </>
  );

  const renderColorOptions = () => (
    <>
      <span className="ql-formats">
        <select className="ql-color" />
        <select className="ql-background" />
      </span>
    </>
  );

  const renderLinkImageOptions = () => (
    <>
      <span className="ql-formats">
        <button className="ql-link" />
        <button className="ql-image" />
        <button className="ql-video" />
      </span>
    </>
  );

  const renderOtherOptions = () => (
    <>
      <span className="ql-formats">
        <button className="ql-formula" />
        <button className="ql-code-block" />
        <button className="ql-clean" />
      </span>
    </>
  );

  const renderUndoRedoOptions = () => (
    <>
      <span className="ql-formats">
        <button className="ql-undo" onClick={undoChange(quill)}>
          <CustomUndo />
        </button>
        <button className="ql-redo" onClick={redoChange(quill)}>
          <CustomRedo />
        </button>
      </span>
    </>
  );

  return (
    <div id="toolbar">
      {renderFontOptions()}
      {renderSizeOptions()}
      {renderHeaderOptions()}
      {renderStyleOptions()}
      {renderListOptions()}
      {renderScriptOptions()}
      {renderAlignmentOptions()}
      {renderColorOptions()}
      {renderLinkImageOptions()}
      {renderOtherOptions()}
      {renderUndoRedoOptions()}
    </div>
  );
};

export default QuillToolbar;
