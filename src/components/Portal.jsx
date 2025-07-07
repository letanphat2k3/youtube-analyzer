import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  // Tạo một node div để gắn vào body nếu chưa có
  let portalRoot = document.getElementById('portal-root');
  if (!portalRoot) {
    portalRoot = document.createElement('div');
    portalRoot.id = 'portal-root';
    document.body.appendChild(portalRoot);
  }
  return createPortal(children, portalRoot);
};

export default Portal;
