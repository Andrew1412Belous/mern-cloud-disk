import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getFiles } from '../../actions/files'
import FileList from './fileList/FileList'
import Popup from './Popup'
import { popFromStack, setCurrentDir, setPopupDisplay } from '../../reducers/fileReducer'

import './disk.scss'

const Disk = () => {
  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)
  const dirStack = useSelector(state => state.files.dirStack)

  useEffect(() => {
    dispatch(getFiles(currentDir))
  }, [currentDir])

  function showPopupHandler () {
    dispatch(setPopupDisplay('flex'))
  }

  function backClickHandler () {
    const stack = [...dirStack]

    const backDirId = stack.pop()

    dispatch(setCurrentDir(backDirId))
    dispatch(popFromStack(stack))
  }

  return (
    <div className="disk">
      <div className="disk__btns">
        <button className="disk__back" onClick={() => backClickHandler()}>Назад</button>
        <button className="disk__create" onClick={() => showPopupHandler()}>Создать папку</button>
      </div>
      <FileList/>
      <Popup/>
    </div>
  );
};

export default Disk;
