import React from 'react'

export default function Test(props) {
    return (
        <div>
            {props.data.map(jack =>
                <h6>{jack}</h6>
            )}
            {props.data2.map(data =>
                <div>
                    <h1>{data.name}</h1>
                    <h1>{data.age}</h1>
                </div>
            )}
        </div>
    )
}
