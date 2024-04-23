import './filterPopUp.css'

function FilterPopUp() {
    return (
        <div className='popUp-container'>
            <div className="pop-catagory">
                <div className='pop-head'>Date updated</div>
                <div className='pop-content'>last Hour</div>
                <div className='pop-content'>Today</div>
                <div className='pop-content'>This week</div>
                <div className='pop-content'>This month</div>
            </div>
            <div className="pop-catagory">
                <div className='pop-head'>Location</div>
                <div className='pop-content'>Madesh</div>
                <div className='pop-content'>Bagmati</div>
                <div className='pop-content'>Gandaki</div>
                <div className='pop-content'>Lumbini</div>
                <div className='pop-content'>karnali</div>
                <div className='pop-content'>Sudurpashchim</div>
            </div>
            <div className="pop-catagory">
                <div className='pop-head'>Price (Rs.)</div>
                <div className='pop-content'>less 100</div>
                <div className='pop-content'>101-500</div>
                <div className='pop-content'>501-1,000</div>
                <div className='pop-content'>1,001-2,000</div>
                <div className='pop-content'>2,001-5,000</div>
                <div className='pop-content'>5,001-10,000</div>
                <div className='pop-content'>10,001 above</div>
            </div>
            <div className="pop-catagory">
                <div className='pop-head'>Catelogers</div>
                <div className='pop-content'>Automobiles</div>
                <div className='pop-content'>Learning</div>
                <div className='pop-content'>Electronic</div>
                <div className='pop-content'>Jobs</div>
                <div className='pop-content'>Services</div>
                <div className='pop-content'>Local Event</div>
            </div>
            <div className="pop-catagory">
                <div className='pop-head'>Condition</div>
                <div className='pop-content'>Brand New</div>
                <div className='pop-content'>Working</div>
                <div className='pop-content'>Not-working</div>
            </div>
        </div>
    );
}

export default FilterPopUp;