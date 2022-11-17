import React from 'react';
import { useDispatch } from 'react-redux';
import CV from '../../../../features/components/CV/CV';
import { ClassNames } from '../../../function/functions';
import { clearScreenWrapper } from '../../../store/screenWrapperSlice';


/**
 * Preview of the CV when user click 'preview CV'
 */
const PreviewCV = () => {
    const dispatch = useDispatch()

    /**close the wrapper of PreviewCV */
    const handleClickOutside = (e) => {
        if (!e.target.classList.contains(ClassNames.noClose)) {
            dispatch(clearScreenWrapper())
        }
    }

    /**
     * ClassNames.noClose, that mean will be 
     * close wheather user click on this component
     */
    return (
        <div id="screen-wrapper" onClick={handleClickOutside}>
            <div id="preview-cv" 
            className={ClassNames.noClose} 
            style={{
                'transform': 'scale(0.5) translateY(-55%)',
                }}>
                <CV classNames={ClassNames.noClose}/>
            </div>
        </div>
    )
}

export default PreviewCV