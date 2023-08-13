import './MoreInfo.css';

const MoreInfo = () => {

    return ( 
        <div className="MoreInfo-content">
       
            <h3>More information</h3>
            <div className="more-info-container">
                <div className='layout-1'>

                    <div className="info-box accessibility">
                        <h4>Accessibility</h4>
                    </div>


                    <div className="info-box participants">
                        <h4>Participants</h4>
                    </div>

                </div>

                <div className='layout-1'>
                    <div className="info-box price">
                        <h4>price</h4>
                    </div>

                    <div className="info-box links">
                        <h4>Link</h4>
                    </div>
                    
                </div>
                
            </div>

        </div>
     );
}
 
export default MoreInfo;