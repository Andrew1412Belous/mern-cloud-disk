import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getFiles, uploadFile } from '../../actions/file'
import FileList from './fileList/FileList'
import Popup from './Popup'
import { popFromStack, setCurrentDir, setPopupDisplay } from '../../reducers/fileReducer'

import './disk.scss'
import Uploader from './uploader/Uploader'

const Disk = () => {
  const [dragEnter, setDragEnter] = useState(false)
  const [sort, setSort] = useState('type')

  const dispatch = useDispatch()
  const currentDir = useSelector(state => state.files.currentDir)
  const dirStack = useSelector(state => state.files.dirStack)

  useEffect(() => {
    dispatch(getFiles(currentDir, sort))
  }, [currentDir, sort])

  function showPopupHandler () {
    dispatch(setPopupDisplay('flex'))
  }

  function backClickHandler () {
    const stack = [...dirStack]

    const backDirId = stack.pop()

    dispatch(setCurrentDir(backDirId))
    dispatch(popFromStack(backDirId))
  }

  function fileUploadHandler (event) {
    const files = [...event.target.files]

    files.forEach(file => dispatch(uploadFile(file, currentDir)))
  }

  function dragEnterHandler (event) {
    event.preventDefault()
    event.stopPropagation()

    setDragEnter(true)
  }

  function dragLeaveHandler (event) {
    event.preventDefault()
    event.stopPropagation()

    setDragEnter(false)
  }

  function dropHandler (event) {
    event.preventDefault()
    event.stopPropagation()

    let files = [...event.dataTransfer.files]
    files.forEach(file => dispatch(uploadFile(file, currentDir)))

    setDragEnter(false)
  }

  return ( !dragEnter ?
    <div className="disk"
         onDragEnter={dragEnterHandler}
         onDragLeave={dragLeaveHandler}
         onDragOver={dragEnterHandler}>
      <div className="disk__btns">
        <button className="disk__back" onClick={() => backClickHandler()}>Назад</button>
        <button className="disk__create" onClick={() => showPopupHandler()}>Создать папку</button>
        <div className="disk__upload">
          <label htmlFor="disk__upload-input" className="disk__upload-label">Upload file</label>
          <input multiple={true} onChange={event => fileUploadHandler(event)} type="file" id="disk__upload-input" className="disk__upload-input"/>
        </div>
        <select value={sort}
                onChange={e => setSort(e.target.value)}
                className='disk__select'>
          <option value="name">By name</option>
          <option value="type">By type</option>
          <option value="date">By date</option>
        </select>
      </div>
      <FileList/>
      <Popup/>
      <Uploader/>
    </div>
    :
    <div className="drop-area"
         onDrop={dropHandler}
         onDragEnter={dragEnterHandler}
         onDragLeave={dragLeaveHandler}
         onDragOver={dragEnterHandler}>
      Перетащите файлы сюда
    </div>
  );
};

export default Disk;
