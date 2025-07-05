'use client'

import React from 'react'
import { useThemeSelectorStore } from '../store/useThemeStore'
import ThemeSelector from './ThemeSelector'
import OutsideClickHandler from './OutsideClickHandler'


function ThemeSelectorBox() {
    const { isVisible, handleHide } = useThemeSelectorStore()

    return (
        <>
            {isVisible && <OutsideClickHandler onOutsideClick={handleHide}><ThemeSelector /></OutsideClickHandler>}
        </>
    )
}

export default ThemeSelectorBox
