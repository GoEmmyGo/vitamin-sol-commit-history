import React from 'react'
import './Loading.css'
// import { results } from './Calculator'
// import Solution from './Solution';

const Loading = (props) => {

    const {loading} = props

    // const [data, setData] = useState([]);
    // const [loading, setloading] = useState(undefined)

    // useEffect(() => {
    //     setTimeout(() => {
    //       fetch({results})
    //         .then((response) => response.results)
    //         .then((results) => {
    //           console.log(results);
    //           setData(results);
    //           setloading(true);
    
    //           setTimeout(() => {
    //             setcompleted(true);
    //           }, 1000);
    //         });
    //     }, 2000);
    //   }, [])
//   console.clear();  

    return (
        <>
            {loading ? (
                <div>
                    <div className='loading-text'>BRB, doing some math</div>
                    <svg class="blob"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g transform="translate(300,300)">
                        <path d="M120,-157.6C152.7,-141.5,174.3,-102.6,194.8,-58.8C215.3,-14.9,234.6,33.8,228.4,80.8C222.2,127.8,190.4,173.1,148.1,184C105.8,195,52.9,171.5,-2.4,174.8C-57.8,178.2,-115.6,208.4,-137.5,190.9C-159.3,173.3,-145.3,108,-153,56.3C-160.7,4.6,-190.2,-33.4,-178.3,-54.2C-166.4,-75.1,-113.2,-78.8,-76.6,-93.6C-40,-108.3,-20,-134.2,11.9,-150.5C43.7,-166.8,87.4,-173.6,120,-157.6Z" fill="#E2A0FF" />
                    </g>
                    </svg>    
                    <div class="dwf">
                    <a class="btn" href="https://codepen.io/uchardon/">done with fun - @uchardon &copy; 2019</a></div>
                    <div class="share">
                    <a target="_blank" rel="noreferrer" href='https://twitter.com/intent/tweet?text=Atom%20SVG%20stroke%20animation%20with%20no%20JS&url=https://codepen.io/uchardon/pen/NORoXJ&via=CodePen'>
                    <svg class="twitter" viewBox="0 0 612 612" >
                    <path class="ani" d="M 612 116 c -23 10 -47 17 -72 20 26 -15 46 -40 55 -69 -24 14 -51 24 -80 30 a 125 125 0 0 0 -217 86 c 0 10 1 19 3 29 -104 -6 -196 -56 -258 -132 a 125 125 0 0 0 39 168 c -21 -1 -40 -6 -57 -16 v 2 c0 61 43 111 100 123 a127 127 0 0 1 -56 2 c 16 50 62 86 117 87 A 252 252 0 0 1 0 498 a 355 355 0 0 0 550 -301 l -1 -16 c 25 -17 46 -40 63 -65 z"  />
                    <path d="M 612 116 c -23 10 -47 17 -72 20 26 -15 46 -40 55 -69 -24 14 -51 24 -80 30 a 125 125 0 0 0 -217 86 c 0 10 1 19 3 29 -104 -6 -196 -56 -258 -132 a 125 125 0 0 0 39 168 c -21 -1 -40 -6 -57 -16 v 2 c0 61 43 111 100 123 a127 127 0 0 1 -56 2 c 16 50 62 86 117 87 A 252 252 0 0 1 0 498 a 355 355 0 0 0 550 -301 l -1 -16 c 25 -17 46 -40 63 -65 z"  />
                    </svg>
                </a>
            </div>
        </div>
            ) : (
                null
                // <div className="calc-completed"><Solution /></div>
            )}
            {/* </>
        ) : (
            <>
        <div className='error-message'>You telling me you can't spell your city? Give it another go</div>
    </>
    )} */}
    </>
  )
}

export default Loading

