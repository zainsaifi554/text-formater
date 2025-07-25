

 export default function About({aboutText,mode}) {

  return (
    <div className='container my-3' >
      <h2>{aboutText}</h2>
      <div className="accordion" id="accordionExample" style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark'?   'white' : 'black', }}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', border: `2px solid ${mode === 'dark' ? 'white' : 'black'}`}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body"   style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNameNamees that we use to style each element. These classNameNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed"   style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', border: `2px solid ${mode === 'dark' ? 'white' : 'black'}`}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body"   style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', border: `2px solid ${mode === 'dark' ? 'white' : 'black'}`}} >
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNameNamees that we use to style each element. These classNameNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed"   style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black',border: `2px solid ${mode === 'dark' ? 'white' : 'black'}` }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body"   style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNameNamees that we use to style each element. These classNameNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      <div className="Container" >

        {/* <button onClick={toggleStyle} className='btn btn-primary my-3'>{btnText} </button> */}
      </div>
    </div>
  )
}

// import { useState } from "react";

// export default function About(aboutText, mode) {
//   const [changeStyle, setChangeStyle] = useState({
//     color: 'white',
//     backgroundColor: 'black',   
//     border: '1px solid white'
//   });

//   const [btnText, setBtnText] = useState('Enable light mode');

//   const toggleStyle = () => {
//     if (changeStyle.color === "white") {
//       setChangeStyle({
//         color: 'black',
//         backgroundColor: 'white',
//         border: '1px solid black'
        
//       });
//       setBtnText('Enable dark mode');
//     } else {
//       setChangeStyle({
//         color: 'white',
//         backgroundColor: 'black',
        
//       });
//       setBtnText('Enable light mode');
//     }
//   };

//   return (
//     <div className='container my-3'   style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}>
//       <h2>{aboutText}</h2>
//       <div className="accordion" id="accordionExample">
//         <div className="accordion-item"   style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}>
//           <h2 className="accordion-header" id="headingOne">
//             <button className="accordion-button" type="button"   style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//               Accordion Item #1
//             </button>
//           </h2>
//           <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
//             <div className="accordion-body"   style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}>
//               <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. You can modify any of this with custom CSS or overriding our default variables.
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item"   style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}>
//           <h2 className="accordion-header" id="headingTwo">
//             <button className="accordion-button collapsed"   style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//               Accordion Item #2
//             </button>
//           </h2>
//           <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
//             <div className="accordion-body"   style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}>
//               <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. You can modify any of this with custom CSS or overriding our default variables.
//             </div>
//           </div>
//         </div>
//         <div className="accordion-item"   style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}>
//           <h2 className="accordion-header" id="headingThree">
//             <button className="accordion-button collapsed"   style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
//               Accordion Item #3
//             </button>
//           </h2>
//           <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
//             <div className="accordion-body"   style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}style={{backgroundColor:mode==='dark' ? '#343434' : 'white' , color:mode==='dark' ? 'white' : 'black', }}>
//               <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. You can modify any of this with custom CSS or overriding our default variables.
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="Container">
//         <button onClick={toggleStyle} className='btn btn-primary my-3'>{btnText}</button>
//       </div>
//     </div>
//   )}