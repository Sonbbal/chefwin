import styled from 'styled-components';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

const BackgorundClick = styled.div`
    width:100vw;
    height:100vh;
    background: rgba(0,0,0,0.6);
    position:fixed;
    top:0;
    left:0;
    z-index:99;
`;
const ChildrendContainer = styled.div`
    width: 60vw;
    height:100vh;
    min-width:300px;
    position:fixed;
    ${props => props.left ? 'left:0': 'right:0'};
    z-index:100;
    background:#fff;
`;

const CloseButton = styled(CloseRoundedIcon)`
    width:1.5em !important;
    height:1.5em !important;
    color: #666;
    cursor: pointer;
    position:absolute;
    top: 20px;
    ${props => props.left ? 'right:20px':'left:20px'};
    &:hover {
        color:#000;
    }
`;

const Modal = ({children,left,closeModal}) => {
    return (
    <>
    <BackgorundClick onClick={() => closeModal()}/>
    <ChildrendContainer left={left}>
        <CloseButton left={left} onClick={() => closeModal()}/>
        {children}
    </ChildrendContainer>
    </>        
    )
}

export default Modal;