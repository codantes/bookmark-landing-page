import React from 'react';

function Features(){
    const [tabState, setTabState] = React.useState({
        "tab1" : true,
        "tab2" : false,
        "tab3" : false
    });

    function tabToggle(event) {
        let tab = event.target.id;
        console.log(tab);

        switch(tab){
            case 'tab1':
                setTabState({
                    "tab1" : true,
                    "tab2" : false,
                    "tab3" : false
                })
                break;
            case 'tab2':
                setTabState({
                    "tab1" : false,
                    "tab2" : true,
                    "tab3" : false
                })
                break;
            case 'tab3':
                setTabState({
                    "tab1" : false,
                    "tab2" : false,
                    "tab3" : true
                })
                break;
            default:
                console.log("error");
        }
    }

    const style1 ={ 
        borderBottom : (tabState.tab1)? "4px solid orangered" : "none"
    }

    const style2 ={ 
        borderBottom : (tabState.tab2)? "4px solid orangered" : "none"
    }

    const style3 ={ 
        borderBottom : (tabState.tab3)? "4px solid orangered" : "none"
    }
    return(
        <section className='features'>
            <article>
                <h1>Features</h1>

                <p>Our aim is to make it quick and easy for you to access your favourite websites. 
                Your bookmarks sync between your devices so you can access them on the go.</p>
            </article>
            <nav>
                <ul className='feature-menu'>
                    <li id='tab1' onClick={tabToggle}>
                        <span id='tab1' style={style1}>Simple Bookmarking</span>
                    </li>

                    <li id='tab2'onClick={tabToggle}>
                        <span id='tab2' style={style2}>Speedy Seacrhing</span>
                    </li>

                    <li id='tab3' onClick={tabToggle}>
                        <span id='tab3' style={style3}>Easy Sharing</span>
                    </li>
                </ul>
            </nav>
            {
                (tabState.tab1) &&
                <section className="tab-articles">
                    <article>
                        <img src="./images/illustration-features-tab-1.svg" alt="" />
                        <h1>Bookmark in one click</h1>
                        <p>
                            Organize your bookmarks however you like. Our simple drag-and-drop interface give you complete control over how you manage your favourite sites.
                        </p>
                    </article>
                </section>
            }

            {
                (tabState.tab2) &&
                <section className="tab-articles">
                    <article>
                        <img src="./images/illustration-features-tab-2.svg" alt="" />
                        <h1>Intelligent search</h1>
                        <p>
                        Our powerful search feature will help you find saved sites in no time at all. 
                        No need to trawl through all of your bookmarks.
                        </p>

                        <button>More Info</button>
                    </article>
                </section>
            }

            {
                (tabState.tab3) &&
                <section className="tab-articles">
                    <article>
                        <img src="./images/illustration-features-tab-3.svg" alt="" />
                        <h1>Share your bookmarks</h1>
                        <p>
                        Easily share your bookmarks and collections with others. Create a shareable 
                        link that you can send at the click of a button.
                        </p>

                        <button>More Info</button>
                    </article>
                </section>
            }

        </section>
    )
}

export default Features;