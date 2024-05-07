import React from 'react';
import "./hero.css"; 
import Banner_img from "../../assets/Images/banner.png"
const CarIcon = () => (
<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.86416 16.1438H2.88556C3.52588 16.1438 4.02772 15.6505 4.02772 15.0102V13.5563C5.94941 13.6775 8.72745 13.7639 10.9516 13.7639C13.1846 13.7639 15.9626 13.6775 17.8843 13.5563V15.0102C17.8843 15.6505 18.3776 16.1438 19.0265 16.1438H20.0479C20.697 16.1438 21.1989 15.6505 21.1989 15.0102V10.0165C21.1989 8.56231 20.9046 7.73994 20.0999 6.70154L19.3728 5.75805C19.0527 4.20046 18.4814 2.56459 18.1786 1.92427C17.7196 0.946067 16.8197 0.36594 15.6687 0.210477C15.0889 0.141054 13.1934 0.0893555 10.9516 0.0893555C8.71896 0.0893555 6.82311 0.149916 6.24336 0.210477C5.09233 0.348954 4.19242 0.946067 3.73378 1.9239C3.43098 2.56459 2.85934 4.20046 2.53919 5.75805L1.81209 6.70154C1.00708 7.74031 0.713135 8.56231 0.713135 10.0165V15.0102C0.713135 15.6505 1.21534 16.1438 1.86416 16.1438ZM4.28769 5.03982C4.49522 4.08783 4.91065 2.85003 5.1961 2.34782C5.42985 1.94162 5.68095 1.76807 6.14845 1.70788C6.80576 1.6126 8.27731 1.56054 10.9516 1.56054C13.6347 1.56054 15.1059 1.59525 15.7639 1.70788C16.2226 1.77693 16.4733 1.94126 16.7159 2.34819C17.0102 2.84154 17.3994 4.08747 17.6243 5.03982C17.7026 5.35998 17.5726 5.4811 17.2351 5.45525C15.7986 5.36884 14.0849 5.27357 10.9516 5.27357C7.82753 5.27357 6.11374 5.36884 4.6769 5.45525C4.33939 5.4811 4.21827 5.35998 4.28732 5.03982M4.64182 11.5224C3.81982 11.5224 3.20535 10.8991 3.20535 10.0856C3.20535 9.26318 3.81982 8.64909 4.64182 8.64909C5.46419 8.64909 6.07866 9.26318 6.07866 10.0856C6.07866 10.8991 5.46419 11.522 4.64219 11.522M17.2698 11.522C16.4475 11.522 15.8334 10.8987 15.8334 10.0852C15.8334 9.26282 16.4475 8.64872 17.2698 8.64872C18.0833 8.64872 18.7063 9.26282 18.7063 10.0852C18.7063 10.8987 18.0833 11.522 17.2698 11.522ZM8.6584 11.1236C8.05242 11.1236 7.62813 10.6908 7.62813 10.0848C7.62813 9.47035 8.05242 9.04642 8.6584 9.04642H13.254C13.8596 9.04642 14.2839 9.47035 14.2839 10.0848C14.2839 10.6904 13.8596 11.1236 13.2536 11.1236H8.6584Z" fill="black"/>
</svg>


);

const BuildingIcon = () => (
  <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2642 5.76454H15.9875V4.04127H14.2642V5.76454ZM14.2642 9.21108H15.9875V7.48781H14.2642V9.21108ZM14.2642 12.6576H15.9875V10.9343H14.2642V12.6576ZM0.478027 16.1042V7.48781L6.50947 3.17963L12.5409 7.48781V16.1042H8.23274V10.9343H4.7862V16.1042H0.478027ZM14.2642 16.1042V6.62617L8.23274 2.27492V0.594727H19.434V16.1042H14.2642Z" fill="black"/>
</svg>

);

const StudyMaterialIcon = () => (
 <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.82012 2.31006C6.27167 2.31006 5.74569 2.52793 5.35788 2.91574C4.97007 3.30355 4.7522 3.82954 4.7522 4.37798V16.7855C4.7522 17.334 4.97007 17.86 5.35788 18.2478C5.74569 18.6356 6.27167 18.8535 6.82012 18.8535H11.2217C10.9584 18.5345 10.7306 18.1878 10.5424 17.8195H6.82012C6.5459 17.8195 6.28291 17.7106 6.089 17.5167C5.89509 17.3227 5.78616 17.0598 5.78616 16.7855H10.136C9.85951 15.8115 9.84805 14.7813 10.1029 13.8013C10.3577 12.8214 10.8695 11.9272 11.5855 11.2113C12.3014 10.4953 13.1956 9.98346 14.1755 9.72865C15.1555 9.47384 16.1857 9.48529 17.1597 9.76182V4.37798C17.1597 3.82954 16.9419 3.30355 16.5541 2.91574C16.1663 2.52793 15.6403 2.31006 15.0918 2.31006H6.82012ZM7.59559 4.89496H14.3163C14.522 4.89496 14.7193 4.97667 14.8647 5.12209C15.0101 5.26752 15.0918 5.46477 15.0918 5.67044C15.0918 5.8761 15.0101 6.07335 14.8647 6.21878C14.7193 6.36421 14.522 6.44591 14.3163 6.44591H7.59559C7.38993 6.44591 7.19268 6.36421 7.04725 6.21878C6.90182 6.07335 6.82012 5.8761 6.82012 5.67044C6.82012 5.46477 6.90182 5.26752 7.04725 5.12209C7.19268 4.97667 7.38993 4.89496 7.59559 4.89496ZM20.2616 15.2346C20.2616 16.4686 19.7714 17.6521 18.8988 18.5246C18.0263 19.3972 16.8428 19.8874 15.6088 19.8874C14.3748 19.8874 13.1913 19.3972 12.3188 18.5246C11.4462 17.6521 10.956 16.4686 10.956 15.2346C10.956 14.0006 11.4462 12.8171 12.3188 11.9445C13.1913 11.072 14.3748 10.5818 15.6088 10.5818C16.8428 10.5818 18.0263 11.072 18.8988 11.9445C19.7714 12.8171 20.2616 14.0006 20.2616 15.2346ZM15.1125 13.2018C15.0455 13.1558 14.9675 13.128 14.8865 13.1213C14.8054 13.1146 14.724 13.1292 14.6503 13.1636C14.5902 13.19 14.5357 13.228 14.4901 13.2752C14.3937 13.3739 14.3399 13.5064 14.3401 13.6444V16.8238C14.3395 16.8923 14.3524 16.9603 14.3781 17.0238C14.4039 17.0874 14.4419 17.1452 14.4901 17.1939C14.5373 17.2409 14.5922 17.2793 14.6524 17.3077C14.7573 17.3557 14.8763 17.3631 14.9864 17.3284C15.034 17.3127 15.0793 17.2904 15.1208 17.2622L17.4947 15.642C17.567 15.5944 17.6252 15.5283 17.6633 15.4507C17.7026 15.3725 17.7228 15.2861 17.7222 15.1985C17.7217 15.111 17.7004 15.0249 17.6602 14.9471C17.6198 14.8706 17.5603 14.8058 17.4875 14.759L15.1125 13.2018Z" fill="black"/>
</svg>

);

const ElectronicsIcon = () => (
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5723 8.22969V6.50642H15.2641V2.19824H13.5409V6.50642H11.8176V2.19824H10.0943V6.50642H8.37105V2.19824H6.64778V6.50642H2.3396V8.22969H6.64778V9.95296H2.3396V11.6762H6.64778V13.3995H2.3396V15.1228H6.64778V19.4309H8.37105V15.1228H10.0943V19.4309H11.8176V15.1228H13.5409V19.4309H15.2641V15.1228H19.5723V13.3995H15.2641V11.6762H19.5723V9.95296H15.2641V8.22969H19.5723Z" fill="#A3A09D"/>
<path d="M4.06287 5.64515V15.9848C4.06287 16.9326 4.83834 17.708 5.78614 17.708H16.1258C17.0736 17.708 17.849 16.9326 17.849 15.9848V5.64515C17.849 4.69735 17.0736 3.92188 16.1258 3.92188H5.78614C4.83834 3.92188 4.06287 4.69735 4.06287 5.64515Z" fill="#242424"/>
<path d="M13.9717 13.8303H7.94025C7.46635 13.8303 7.07861 13.4425 7.07861 12.9686V8.66046C7.07861 8.18656 7.46635 7.79883 7.94025 7.79883H13.9717C14.4456 7.79883 14.8333 8.18656 14.8333 8.66046V12.9686C14.8333 13.4425 14.4456 13.8303 13.9717 13.8303Z" fill="#2B2D2F"/>
</svg>

);

const JobsIcon = () => (
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.06287 18.8017C3.58897 18.8017 3.18343 18.6331 2.84624 18.296C2.50905 17.9588 2.34017 17.5529 2.3396 17.0785V7.60048C2.3396 7.12658 2.50848 6.72103 2.84624 6.38385C3.184 6.04666 3.58955 5.87778 4.06287 5.87721H7.50941V4.15393C7.50941 3.68004 7.67829 3.27449 8.01605 2.93731C8.35381 2.60012 8.75936 2.43124 9.23268 2.43066H12.6792C13.1531 2.43066 13.559 2.59954 13.8967 2.93731C14.2345 3.27507 14.4031 3.68061 14.4025 4.15393V5.87721H17.849C18.3229 5.87721 18.7288 6.04609 19.0665 6.38385C19.4043 6.72161 19.5729 7.12715 19.5723 7.60048V17.0785C19.5723 17.5524 19.4037 17.9582 19.0665 18.296C18.7293 18.6337 18.3235 18.8023 17.849 18.8017H4.06287ZM9.23268 5.87721H12.6792V4.15393H9.23268V5.87721Z" fill="black"/>
</svg>


);
const ServicesIcon= () => (
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.606 8.71681C18.6155 7.70734 18.6155 6.07067 17.606 5.0612C16.5965 4.05173 14.9599 4.05173 13.9504 5.0612L6.02991 12.9817C5.02044 13.9912 5.02044 15.6278 6.02991 16.6373C7.03938 17.6468 8.67605 17.6468 9.68552 16.6373L17.606 8.71681Z" stroke="black" stroke-width="4"/>
<path d="M8.3711 10.8496L11.8176 14.2961M3.20129 19.466L5.7862 16.8811" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.0104 7.86467C16.2484 7.45256 16.1072 6.92559 15.6951 6.68765C15.2829 6.44972 14.756 6.59092 14.518 7.00303C14.2801 7.41515 14.4213 7.94212 14.8334 8.18005C15.2455 8.41798 15.7725 8.27678 16.0104 7.86467Z" fill="black"/>
</svg>


);

const Local__Events= () => (
<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.71819 6.37663C3.71819 5.23927 4.64876 4.3087 5.78612 4.3087H14.0578L18.1937 0.172852H20.2616V16.7162H18.1937L14.0578 12.5804H5.78612C5.23767 12.5804 4.71169 12.3625 4.32387 11.9747C3.93606 11.5869 3.71819 11.0609 3.71819 10.5125H1.65027V6.37663H3.71819ZM11.9899 15.6823V20.8521H8.888L7.16129 15.6823H5.78612V13.6144H14.0578V15.6823H11.9899Z" fill="black"/>
</svg>
);



const categories = [
  { name: 'Automobiles', icon: <CarIcon /> },
  { name: 'Real estate', icon: <BuildingIcon /> },
  { name: 'Learning', icon: <StudyMaterialIcon /> },
  { name: 'Electronics', icon:  <ElectronicsIcon /> },
  { name: 'Jobs', icon:  <JobsIcon /> },
  { name: 'Services', icon:  <ServicesIcon /> },
  { name: 'Services', icon:  <Local__Events />},
];

const Hero = () => {
  return (
    <div>
      <div className='hero__section'>
        <div className='hero__container'>
          <div className='hero__row'>
            <div className='aside__content'>
              <ul className="cat-list">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a href="#">
                      <div className="category">
                        {category.icon}
                        <span className="category-name">{category.name}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='right__block'>
              <div className='bannerimg_holder'>
                <img className='Banner_img' src={Banner_img} alt="Banner_img" width={991} height={430} />
              </div>
              <div className="Banner_content">
                <div className="container">
                    <div className="Banner_title">
                        <h1>Sell and Buy near you</h1>
                        <p>“Simple, fast and efficient”</p>
                    </div>
                    <button className="btn btn_buy">Buy Now</button>
                    <button className="btn btn_sell">Sell Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
