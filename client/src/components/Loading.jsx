import React from 'react'
import './Loading.css'
// import { results } from './Calculator'
// import Solution from './Solution';

const Loading = (props) => {

    const {loading} = props

    return (
        <>
            {loading ? (
                <div>
                    <svg class="blob"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g transform="translate(300,300)">
                        <path x="0" y="0" d="M120,-157.6C152.7,-141.5,174.3,-102.6,194.8,-58.8C215.3,-14.9,234.6,33.8,228.4,80.8C222.2,127.8,190.4,173.1,148.1,184C105.8,195,52.9,171.5,-2.4,174.8C-57.8,178.2,-115.6,208.4,-137.5,190.9C-159.3,173.3,-145.3,108,-153,56.3C-160.7,4.6,-190.2,-33.4,-178.3,-54.2C-166.4,-75.1,-113.2,-78.8,-76.6,-93.6C-40,-108.3,-20,-134.2,11.9,-150.5C43.7,-166.8,87.4,-173.6,120,-157.6Z" fill="#E2A0FF" />
                        <text stroke="#8b94f3" fill='white' x="0" y="0" transform="translate(-150, 0)" font-family="'Press Start 2P', cursive" font-size="0.9em">BRB, doing some math</text>
                    </g>
                </svg>    
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

