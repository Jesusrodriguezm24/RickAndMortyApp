import './HeaderPage.css';
import imgCoverHeader from '../../assets/img/HeaderImage3.svg';
import imgNameRick_Morty from '../../assets/img/HeaderImage2.svg';

const HeaderPage = () => {
  return (
    <section className='header_container'>
        <div className='header_img_cover'>
            <img src={imgCoverHeader} alt="img_cover" />
            <img src={imgNameRick_Morty} alt="img_name" />
        </div>    
    </section>
  )
}
export default HeaderPage