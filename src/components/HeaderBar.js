// import React from 'react';
// import './HeaderBar.css';

// function HeaderBar() {
//   return (
//     <div className="header-bar">
//       <div className="header-info">
//         <div className="location">
//           <span>📍</span> SR Nagar, new police station
//         </div>
//         <div className="phone">
//           <span>📞</span> +92 31304754657
//         </div>
//         <div className="email">
//           <span>✉️</span> snritsolutions@gmail.com
//         </div>
//       </div>
//       <div className="header-social">
//         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">linkedin
//           <i className="fab fa-linkedin"></i>
//         </a>
//         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">instagram
//           <i className="fab fa-instagram"></i>
//         </a>
//       </div>
//     </div>
//   );
// }

// export default HeaderBar;

import React from 'react';
import './HeaderBar.css';

function HeaderBar() {
  return (
    <div className="header-bar">
      <div className="header-info">
        <div className="location">
          <span role="img" aria-label="location pin">📍</span> SR Nagar, new police station
        </div>
        <div className="phone">
          <span role="img" aria-label="telephone">📞</span> +92 31304754657
        </div>
        <div className="email">
          <span role="img" aria-label="envelope">✉️</span> snritsolutions@gmail.com
        </div>
      </div>
      <div className="header-social">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          linkedin
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          instagram
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default HeaderBar;

