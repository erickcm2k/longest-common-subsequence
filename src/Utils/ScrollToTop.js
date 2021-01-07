import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// import React from 'react';
// import { withRouter } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <App />
//     </Router>
//   );
// }

// import { useEffect } from 'react';

// function ScrollToTopOnMount() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return null;
// }

// // Render this somewhere using:
// // <Route path="..." children={<LongContent />} />
// function LongContent() {
//   return (
//     <div>
//       <ScrollToTopOnMount />

//       <h1>Here is my long content page</h1>
//       <p>...</p>
//     </div>
//   );
// }

// // Render this somewhere using:
// // <Route path="..." children={<LongContent />} />
// class LongContent extends React.Component {
//   render() {
//     return (
//       <div>
//         <ScrollToTopOnMount />

//         <h1>Here is my long content page</h1>
//         <p>...</p>
//       </div>
//     );
//   }
// }
