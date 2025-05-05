// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   FiDownload, FiBookOpen, FiVideo, FiCode, 
//   FiUsers, FiSettings, FiArrowRight 
// } from 'react-icons/fi';
// import { TbDeviceDesktopShare } from 'react-icons/tb';
// import { RiLiveLine } from 'react-icons/ri';
// import { SiWebrtc } from 'react-icons/si';

// const ResourcesPage = () => {
//   const [activeTab, setActiveTab] = useState('guides');
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [videoPlaying, setVideoPlaying] = useState(false);

//   // Sample resources data
//   const resources = {
//     guides: [
//       {
//         id: 1,
//         title: "Getting Started with ConnectHub",
//         description: "Complete guide to setting up your first video meeting",
//         icon: <FiBookOpen size={24} />,
//         download: "https://example.com/guides/getting-started.pdf"
//       },
//       {
//         id: 2,
//         title: "Advanced Screen Sharing",
//         description: "Master sharing your screen with annotation tools",
//         icon: <TbDeviceDesktopShare size={24} />,
//         download: "https://example.com/guides/screen-sharing.pdf"
//       }
//     ],
//     tutorials: [
//       {
//         id: 1,
//         title: "Live Streaming Setup",
//         description: "How to broadcast your meetings to large audiences",
//         icon: <RiLiveLine size={24} />,
//         video: "https://example.com/videos/live-streaming.mp4"
//       },
//       {
//         id: 2,
//         title: "WebRTC Deep Dive",
//         description: "Understanding the technology behind ConnectHub",
//         icon: <SiWebrtc size={24} />,
//         video: "https://example.com/videos/webrtc-explained.mp4"
//       }
//     ],
//     api: [
//       {
//         id: 1,
//         title: "API Documentation",
//         description: "Integrate ConnectHub with your applications",
//         icon: <FiCode size={24} />,
//         link: "https://api.connecthub.com/docs"
//       }
//     ]
//   };

//   return (
//     <div className="resources-page bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white p-6">
//       {/* Animated Header */}
//       <motion.header
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-7xl mx-auto mb-12"
//       >
//         <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
//           ConnectHub Resources
//         </h1>
//         <p className="text-xl text-gray-300 max-w-3xl">
//           Everything you need to master real-time video communication. Download guides, watch tutorials, 
//           and integrate our API into your applications.
//         </p>
//       </motion.header>

//       {/* Interactive Tabs */}
//       <motion.div 
//         className="flex gap-4 mb-8 max-w-7xl mx-auto"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//       >
//         {['guides', 'tutorials', 'api'].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setActiveTab(tab)}
//             className={`px-6 py-3 rounded-full font-medium transition-all ${
//               activeTab === tab 
//                 ? 'bg-blue-600 shadow-lg shadow-blue-500/20' 
//                 : 'bg-gray-700 hover:bg-gray-600'
//             }`}
//           >
//             {tab.charAt(0).toUpperCase() + tab.slice(1)}
//           </button>
//         ))}
//       </motion.div>

//       {/* Resource Cards Grid */}
//       <motion.div 
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
//         layout
//       >
//         <AnimatePresence>
//           {resources[activeTab].map((resource) => (
//             <motion.div
//               key={resource.id}
//               layout
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               transition={{ duration: 0.3 }}
//               whileHover={{ y: -5 }}
//               onHoverStart={() => setHoveredCard(resource.id)}
//               onHoverEnd={() => setHoveredCard(null)}
//               className={`bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all ${
//                 hoveredCard === resource.id ? 'shadow-lg shadow-blue-500/10' : ''
//               }`}
//             >
//               <div className="p-6">
//                 <div className="flex items-start mb-4">
//                   <div className="p-3 rounded-lg bg-blue-900/30 text-blue-400 mr-4">
//                     {resource.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-1">{resource.title}</h3>
//                     <p className="text-gray-400">{resource.description}</p>
//                   </div>
//                 </div>

//                 {activeTab === 'tutorials' ? (
//                   <div className="mt-4 relative rounded-lg overflow-hidden bg-black aspect-video">
//                     <video
//                       src={resource.video}
//                       poster={`https://source.unsplash.com/random/400x225/?${resource.title.split(' ').join(',')}`}
//                       controls={videoPlaying === resource.id}
//                       onPlay={() => setVideoPlaying(resource.id)}
//                       className="w-full h-full object-cover"
//                     />
//                     {videoPlaying !== resource.id && (
//                       <div className="absolute inset-0 flex items-center justify-center">
//                         <button 
//                           onClick={() => setVideoPlaying(resource.id)}
//                           className="p-4 bg-blue-600 rounded-full hover:bg-blue-500 transition-all"
//                         >
//                           <FiVideo size={24} />
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 ) : null}

//                 <div className="mt-6 flex justify-between items-center">
//                   {activeTab === 'guides' && (
//                     <a
//                       href={resource.download}
//                       download
//                       className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
//                     >
//                       <FiDownload /> Download PDF
//                     </a>
//                   )}

//                   {activeTab === 'api' && (
//                     <a
//                       href={resource.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors"
//                     >
//                       View Documentation <FiArrowRight />
//                     </a>
//                   )}

//                   {activeTab === 'tutorials' && videoPlaying !== resource.id && (
//                     <button
//                       onClick={() => setVideoPlaying(resource.id)}
//                       className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
//                     >
//                       <FiVideo /> Watch Tutorial
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </AnimatePresence>
//       </motion.div>

//       {/* Feature Highlights Section */}
//       <motion.section 
//         className="max-w-7xl mx-auto mt-20"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-3xl font-bold mb-8 text-center">Why Developers Love ConnectHub</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               icon: <SiWebrtc size={32} />,
//               title: "Built on WebRTC",
//               description: "Industry-standard technology for real-time communication"
//             },
//             {
//               icon: <FiUsers size={32} />,
//               title: "Scalable Infrastructure",
//               description: "Supports from 1:1 calls to large webinars with thousands"
//             },
//             {
//               icon: <FiSettings size={32} />,
//               title: "Customizable API",
//               description: "Tailor the experience to your specific needs"
//             }
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.03 }}
//               className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
//             >
//               <div className="text-blue-400 mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-400">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* CTA Section */}
//       <motion.div 
//         className="max-w-4xl mx-auto mt-20 mb-10 p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-gray-700 text-center"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-3xl font-bold mb-4">Ready to Build with ConnectHub?</h2>
//         <p className="text-xl text-gray-300 mb-6">
//           Join thousands of developers creating next-gen communication experiences.
//         </p>
//         <div className="flex gap-4 justify-center">
//           <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-colors">
//             Get Started for Free
//           </button>
//           <button className="px-6 py-3 bg-transparent border border-gray-600 hover:bg-gray-700 rounded-lg font-medium transition-colors">
//             Contact Sales
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default ResourcesPage;


// 


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiDownload, FiBookOpen, FiVideo, FiCode,
  FiUsers, FiSettings, FiArrowRight
} from 'react-icons/fi';
import { TbDeviceDesktopShare } from 'react-icons/tb';
import { RiLiveLine } from 'react-icons/ri';
import { SiWebrtc } from 'react-icons/si';

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('guides');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const resources = {
    guides: [
      {
        id: 1,
        title: "Getting Started with ConnectHub",
        description: "Complete guide to setting up your first video meeting",
        icon: <FiBookOpen size={24} className="text-primary" />,
        download: "#"
      },
      {
        id: 2,
        title: "Advanced Screen Sharing",
        description: "Master sharing your screen with annotation tools",
        icon: <TbDeviceDesktopShare size={24} className="text-primary" />,
        download: "#"
      }
    ],
    tutorials: [
      {
        id: 1,
        title: "Live Streaming Setup",
        description: "How to broadcast your meetings to large audiences",
        icon: <RiLiveLine size={24} className="text-primary" />,
        video: "https://example.com/videos/live-streaming.mp4"
      },
      {
        id: 2,
        title: "WebRTC Deep Dive",
        description: "Understanding the technology behind ConnectHub",
        icon: <SiWebrtc size={24} className="text-primary" />,
        video: "https://example.com/videos/webrtc-explained.mp4"
      }
    ],
    api: [
      {
        id: 1,
        title: "API Documentation",
        description: "Integrate ConnectHub with your applications",
        icon: <FiCode size={24} className="text-primary" />,
        link: "https://api.connecthub.com/docs"
      }
    ]
  };

  return (
    <div className="bg-white py-5">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container text-center mb-5"
      >
        <h1 className="display-4 fw-bold text-primary">ConnectHub Resources</h1>
        <p className="lead text-muted">
          Everything you need to master real-time video communication. Download guides, watch tutorials, and integrate our API into your applications.
        </p>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="container d-flex justify-content-center gap-3 mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {['guides', 'tutorials', 'api'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`btn btn-lg ${activeTab === tab ? 'btn-primary text-white' : 'btn-outline-primary'}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </motion.div>

      {/* Resource Cards */}
      <motion.div
        className="container"
        layout
      >
        <div className="row g-4">
          <AnimatePresence>
            {resources[activeTab].map(resource => (
              <motion.div
                key={resource.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredCard(resource.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="col-md-6 col-lg-4"
              >
                <div className={`card h-100 shadow-sm border ${hoveredCard === resource.id ? 'border-primary shadow' : ''}`}>
                  <div className="card-body">
                    <div className="d-flex mb-3 align-items-start">
                      <div className="bg-light p-2 rounded me-3">{resource.icon}</div>
                      <div>
                        <h5 className="card-title">{resource.title}</h5>
                        <p className="card-text text-muted">{resource.description}</p>
                      </div>
                    </div>

                    {activeTab === 'tutorials' && (
                      <div className="ratio ratio-16x9 mb-3 rounded overflow-hidden bg-light">
                        <video
                          src={resource.video}
                          poster={`https://source.unsplash.com/random/400x225/?${resource.title}`}
                          controls={videoPlaying === resource.id}
                          onPlay={() => setVideoPlaying(resource.id)}
                          className="rounded"
                        />
                      </div>
                    )}

                    <div className="d-flex justify-content-between align-items-center">
                      {activeTab === 'guides' && (
                        <a href={resource.download} download className="btn btn-primary">
                          <FiDownload className="me-2" /> Download PDF
                        </a>
                      )}
                      {activeTab === 'api' && (
                        <a href={resource.link} target="_blank" rel="noreferrer" className="btn btn-primary">
                          View Docs <FiArrowRight className="ms-2" />
                        </a>
                      )}
                      {activeTab === 'tutorials' && videoPlaying !== resource.id && (
                        <button
                          onClick={() => setVideoPlaying(resource.id)}
                          className="btn btn-primary"
                        >
                          <FiVideo className="me-2" /> Watch Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Feature Highlights */}
      <motion.div className="container mt-5">
        <h2 className="text-center text-primary fw-bold mb-4">Why Developers Love ConnectHub</h2>
        <div className="row g-4">
          {[
            {
              icon: <SiWebrtc size={32} className="text-primary" />,
              title: "Built on WebRTC",
              description: "Industry-standard technology for real-time communication"
            },
            {
              icon: <FiUsers size={32} className="text-primary" />,
              title: "Scalable Infrastructure",
              description: "Supports from 1:1 calls to large webinars with thousands"
            },
            {
              icon: <FiSettings size={32} className="text-primary" />,
              title: "Customizable API",
              description: "Tailor the experience to your specific needs"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="col-md-4"
            >
              <div className="card h-100 border-0 shadow-sm p-3">
                <div className="mb-3">{feature.icon}</div>
                <h5 className="fw-semibold">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call To Action */}
      <motion.div
        className="container mt-5 mb-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-5 rounded bg-primary text-white text-center shadow">
          <h2 className="fw-bold mb-3">Ready to Build with ConnectHub?</h2>
          <p className="lead mb-4">
            Join thousands of developers creating next-gen communication experiences.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-light text-primary fw-semibold px-4 py-2 shadow-sm">
              Get Started for Free
            </button>
            <button className="btn btn-outline-light px-4 py-2 fw-semibold">
              Contact Sales
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResourcesPage;
