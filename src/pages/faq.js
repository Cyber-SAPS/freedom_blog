import * as React from 'react'


export default function Faq(){
    const [isActive, setIsActive] = React.useState({item: 0});
    return(
        <>
            <div className="container display-f justify-center">
        
        
  <h1 className="font-xl mb-2 mt-2">FAQ&#39;s Page</h1>

    </div>

        <section className="container">
            
        <div className="accordion">

            <div className="accordion-item">
                <section className="accordion-header bg-primary bg-hover-primary-light-2" onClick={() => setIsActive({item: 0})} >
                    <aside className="accordion-title text-white">His thi ssite managed by a moderator?</aside>
                    <aside className="accordion-icon text-white">{isActive.item === 0 ? '-' : '+'}</aside>  
                </section>
                    <section className={`${isActive.item === 0 ? "accordion-content bg-primary-light-9 text-base content-transition" : "accordion-content bg-primary-light-9 text-base"}`}>
                        <aside className="p-1">No it is not</aside>
                    </section>
            </div>

            <div className="accordion-item">
                <section className="accordion-header bg-primary bg-hover-primary-light-2"  onClick={() => setIsActive({item: 1})}>
                    <aside className="accordion-title text-white">What type of contetn can i post?</aside>
                    <aside className="accordion-icon text-white">{isActive.item === 1 ? '-' : '+'}</aside>
                </section>
                <section className={`${isActive.item === 1 ? "accordion-content bg-primary-light-9 text-base content-transition" : "accordion-content bg-primary-light-9 text-base"}`}>
                    <aside className="m-1">You are free to post any content yo desire</aside>
                </section>
            </div>

  


        </div>
        
        
  
    </section>

        </>
    )
}