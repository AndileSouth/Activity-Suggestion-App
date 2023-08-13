import './MoreInfo.css';

const MoreInfo = ({ jsonData }) => {
    if (!jsonData) {
        return null; // You might want to handle the case where jsonData is not available
    }

    let { accessibility, link, participants, price, type } = jsonData;

    let typeValue = type.toUpperCase();

    let Access = accessibility < 0.3 ? "Easy 😁"
                : accessibility < 0.6 ? 'Medium'
                :  'Hard ';

    let Expense = price < 0 ? "No Money Needed 😁"
                : price < 0.3 ? 'Cheap 😁'
                :  'Expensive 🤑😎';

    let nthParticipants = participants < 2 ?  "🧍‍♂️"
                : participants < 3 ? "🧍‍♂️🧍‍♂️"
                : participants < 4 ? "🧍‍♀️🧍‍♂️🧍‍♀️"
                : participants < 5 ? "🧍‍♀️🧍‍♀️🧍‍♀️🧍‍♀️"
                : participants > 4 ? "🧍‍♂️🧍‍♀️🧍‍♂️🧍‍♀️+"
                : '🧍🧍‍♀️🧍‍♂️🧍‍♀️+';

    let nthType = typeValue === "SOCIAL" ? "🧍‍♂️🧍‍♂️+"
                : typeValue === "RELAXATION" ? "💆‍♂️"
                : typeValue === "COOKING" ? "🥘"
                : typeValue === "EDUCATION" ? "👩‍🎓"
                : typeValue === "RECREATIONAL" ? ""
                : typeValue === "DIY" ? "🔨🛠🧱⚙"
                : typeValue === "CHARITY" ? "👩‍👩‍👦‍👦"
                : typeValue === "MUSIC" ? "🎧🎷🎸"
                : typeValue === "BUSYWORK" ? ""
                : "";
                


    return ( 
        <div className="MoreInfo-content">
       
            <h3>More information</h3>
            <div className="more-info-container">
                <div className='layout-1'>

                    <div className="info-box accessibility">
                        <h4>Accessibility</h4>
                        {accessibility && <div>{accessibility}</div>}
                        {Access && <div>{Access}</div>}
                    </div>


                    <div className="info-box participants">
                        <h4>Participants</h4>
                        <div>{participants}</div>
                        {participants && <div>{nthParticipants}</div>}
                    </div>

                </div>

                <div className='layout-1'>
                    <div className="info-box price">
                        <h4>price</h4>
                        {price && <div>{price}</div>}
                        {Expense && <div>{Expense}</div>}
                    </div>

                    <div className="info-box links">
                        <h4>Link💻</h4>
                        {link && <div>{link}</div>}
                    </div>
                    
                </div>

                <div className="info-box type">
                        <h4>Type</h4>
                        <div>{typeValue}</div>
                        {nthType && <div>{nthType}</div>}
                    </div>
                
                </div>

        </div>
     );
}
 
export default MoreInfo;