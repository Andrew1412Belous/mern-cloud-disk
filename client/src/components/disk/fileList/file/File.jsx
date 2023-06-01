import dirLogo from '../../../../assets/img/dir.svg'
import fileLogo from '../../../../assets/img/file.svg'

import { useDispatch, useSelector } from 'react-redux'
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer'

import './file.scss'
import { downloadFile } from '../../../../actions/files'

const File = ({ file }) => {
  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)

  function openDirHandler (file) {
    if (file.type === 'dir') {
      dispatch(setCurrentDir(file._id))
      dispatch(pushToStack(currentDir))
    }
  }

  function downloadClickHandler (event) {
    event.stopPropagation()

    downloadFile(file)
  }

  return (
    <div className='file' onClick={() => openDirHandler(file)}>
      <img src={file.type === 'dir' ? dirLogo : fileLogo} alt="" className="file__img"/>
      <div className="file__name">{file.name}</div>
      <div className="file__date">{file.date.slice(0,10)}</div>
      <div className="file__size">{file.size}</div>
      {file.type !== 'dir' &&
        <button className="file__btn file__download" onClick={(event) => downloadClickHandler(event)}>Download</button>}
      <button className="file__btn file__delete">Delete</button>
    </div>
  );
};

export default File;
