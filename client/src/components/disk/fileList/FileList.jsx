import { useSelector } from 'react-redux'
import File from './file/File'

import './fileList.scss'

const FileList = () => {
  const files = useSelector(state => state.files.files).map(file => <File key={file._id} file={file}/>)

  return ( files.length ?
    <div className='filelist'>
      <div className="filelist__header">
        <div className="filelist__name">Название</div>
        <div className="filelist__date">Дата</div>
        <div className="filelist__size">Размер</div>
      </div>
      {files}
    </div>
    :
    <div className="filelist__empty">This folder is still empty...</div>
  );
};

export default FileList;
