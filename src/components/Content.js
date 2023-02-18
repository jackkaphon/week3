import React from 'react'
import Meal from '../images/meal.png'
import '../styles/content.css'

export default function Content() {
    return (
        <div>
            <content>
                <div>
                    <h1 style={{fontSize: 80}}>Delicious Menu</h1>
                    <p style={{fontSize: 18}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <button >Read more</button>
                    <div className="icon">
                        <i className="fa fa-facebook-f" style={{fontSize: 36}}></i>
                        <i className="fa fa-instagram" style={{fontSize:36, marginLeft: 10}}></i>
                        <i className="fa fa-twitter" style={{fontSize:36, marginLeft: 10}}></i>
                    </div>
                </div>
                <div>
                    <img src={Meal} alt=""/>
                </div>

            </content>
        </div>
    )
}
