import {Component} from 'react'
import {
  TextEditorContainer,
  TextEditorContent,
  TextEditorBannerContainer,
  TextEditorBannerHeading,
  TextEditorBannerImgContainer,
  TextEditorBannerImg,
  TextEditorMainContent,
  TextEditorButtonContainer,
  TextBoldIcon,
  TextItalicIcon,
  TextUnderlineIcon,
  TextEditorTextArea,
  TextEditorButtonListItem,
  BoldBtn,
  ItalicBtn,
  UnderlineBtn,
} from './StyledComponents'

class TextEditor extends Component {
  state = {boldActive: false, italicActive: false, underlineActive: false}

  onClickBoldBtn = () => {
    const {boldActive} = this.state
    this.setState({boldActive: !boldActive})
  }

  onClickItalicBtn = () => {
    const {italicActive} = this.state
    this.setState({italicActive: !italicActive})
  }

  onClickUnderlineBtn = () => {
    const {underlineActive} = this.state
    this.setState({underlineActive: !underlineActive})
  }

  render() {
    const {boldActive, italicActive, underlineActive} = this.state

    return (
      <TextEditorContainer>
        <TextEditorContent>
          <TextEditorBannerContainer>
            <TextEditorBannerHeading>Text Editor</TextEditorBannerHeading>
            <TextEditorBannerImgContainer>
              <TextEditorBannerImg
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                alt="text editor"
              />
            </TextEditorBannerImgContainer>
          </TextEditorBannerContainer>
          <TextEditorMainContent>
            <TextEditorButtonContainer>
              <TextEditorButtonListItem>
                <BoldBtn
                  data-testid="bold"
                  type="button"
                  onClick={this.onClickBoldBtn}
                  active={boldActive.toString()}
                >
                  <TextBoldIcon size={30} />
                </BoldBtn>
              </TextEditorButtonListItem>
              <TextEditorButtonListItem>
                <ItalicBtn
                  data-testid="italic"
                  type="button"
                  onClick={this.onClickItalicBtn}
                  active={italicActive.toString()}
                >
                  <TextItalicIcon size={30} />
                </ItalicBtn>
              </TextEditorButtonListItem>
              <TextEditorButtonListItem>
                <UnderlineBtn
                  data-testid="underline"
                  type="button"
                  onClick={this.onClickUnderlineBtn}
                  active={underlineActive.toString()}
                >
                  <TextUnderlineIcon size={30} />
                </UnderlineBtn>
              </TextEditorButtonListItem>
            </TextEditorButtonContainer>
            <TextEditorTextArea
              bold={boldActive.toString()}
              underline={underlineActive.toString()}
              italic={italicActive.toString()}
            />
          </TextEditorMainContent>
        </TextEditorContent>
      </TextEditorContainer>
    )
  }
}

export default TextEditor
