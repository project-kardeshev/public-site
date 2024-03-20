import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import './quill.css';

function RichTextArea({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <>
      {' '}
      <ReactQuill
        theme="snow"
        className="h-1/2 bg-black/10"
        value={value}
        onChange={setValue}
        formats={[
          'bold',
          'italic',
          'underline',
          'strike',
          'link',
          'list',
          'bullet',
          'align',
          'color',
          'blockquote',
          'code',
          'header',
          'size',
          'code-block',
        ]}
        modules={{
          toolbar: true,
        }}
      />
    </>
  );
}

export default RichTextArea;
