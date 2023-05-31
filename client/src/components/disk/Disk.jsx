import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getFiles } from '../../actions/files'
import FileList from './fileList/FileList'
import Popup from './Popup'
import { setPopupDisplay } from '../../reducers/fileReducer'

import './disk.scss'

const Disk = () => {
  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)

  useEffect(() => {
    dispatch(getFiles(currentDir))
  }, [currentDir])

  function createDirHandler() {
    dispatch(setPopupDisplay('flex'))
  }

  return (
    <div className="disk">
      <div className="disk__btns">
        <button className="disk__back">Назад</button>
        <button className="disk__create" onClick={() => createDirHandler()}>Создать папку</button>
      </div>
      <FileList/>
      <Popup/>
    </div>
  );
};

export default Disk;
