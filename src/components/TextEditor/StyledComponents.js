import styled from 'styled-components'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

export const TextEditorContainer = styled.div`
  padding: 20px;
  min-height: 100vh;
  background-color: #25262c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextEditorContent = styled.div`
  padding: 20px;
  background-color: #1b1c22;
  flex-grow: 1;
  width: 80%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 767px) {
    width: 90%;
    flex-direction: column;
  }
  @media screen and (min-width: 767px) {
    margin: 30px 0px;
  }
`

export const TextEditorBannerContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 50%;
  }
`

export const TextEditorBannerHeading = styled.h1`
  align-self: center;
  font-family: roboto;
  font-weight: 600;
  font-size: 30px;
  color: #f8fafc;
`

export const TextEditorBannerImgContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextEditorBannerImg = styled.img`
  width: 100%;
  @media screen and (max-width: 767px) {
    width: 200px;
  }
`
export const TextEditorMainContent = styled.div`
  background-color: #25262c;
  border: 1px solid #334155;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  width: 50%;
  margin: 0px 0px 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 767px) {
    width: 100%;
    flex-grow: 1;
    margin: 10px 0px 0px 0px;
  }
`

export const TextEditorButtonContainer = styled.ul`
  border-bottom: 1px solid #334155;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`

export const TextEditorButtonListItem = styled.li``

export const TextEditorTextBtn = styled.button`
  margin: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  color: #f1f5f9;
`
export const BoldBtn = styled(TextEditorTextBtn)`
  color: ${props => (props.active === 'true' ? '#faff00' : '#f1f5f9')};
`
export const ItalicBtn = styled(TextEditorTextBtn)`
  color: ${props => (props.active === 'true' ? '#faff00' : '#f1f5f9')};
`

export const UnderlineBtn = styled(TextEditorTextBtn)`
  color: ${props => (props.active === 'true' ? '#faff00' : '#f1f5f9')};
`

export const TextBoldIcon = styled(VscBold)``

export const TextItalicIcon = styled(GoItalic)``

export const TextUnderlineIcon = styled(AiOutlineUnderline)``

export const TextEditorTextArea = styled.textarea`
  padding: 5px;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #cbd5e1;
  font-family: roboto;
  font-size: 16px;
  line-height: 25px;
  letter-spacing: 0.02em;
  font-weight: ${props => (props.bold === 'true' ? 'bold' : 'normal')};
  font-style: ${props => (props.italic === 'true' ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.underline === 'true' ? 'underline' : 'normal'};
  @media screen {
    flex-grow: 1;
  }
`
