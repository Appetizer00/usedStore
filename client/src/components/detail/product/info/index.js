import './info.css';
import { Link } from 'react-router-dom';
import Location from './images/location.png';
import Category from './images/category.png';
import Tag from './images/tag.png';

// 카테고리 화살표
import { IoIosArrowForward } from "react-icons/io";

import Image1 from './images/image1.jpg';
import Profile from './images/profile_image.svg';
import Follow from './images/follow.png';
import TalkBtn from './images/talkbtn.png';


// 시간 계산
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();

    let diff = now - date;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * 1000 * 60 * 60 * 24 * 365;

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= months * 1000 * 60 * 60 * 24 * 30;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    let result = "";
    if (years > 0) {
        result = `${years}년 전`;
    } else if (months > 0) {
        result = `${months}개월 전`;
    } else if (days > 0) {
        result = `${days}일 전`;
    } else {
        result = "오늘";
    }

    return result;
}

function Info(props) {

    const info = props.info;
    // console.log(info);
    const seller = props.seller;
    // console.log(props.seller);
    const review = props.review;
    // console.log(props.review);
    // console.log(review[0]);
    const products = props.products.length;

    if (!info || !seller || !review) {
        return <div>Loading...</div>; // 여기서는 간단한 텍스트를 사용했지만, 실제 애플리케이션에서는 스피너나 로딩 애니메이션을 사용할 수 있습니다.
    }
    

    return (
        <>
            <div className='KJH_if_section'>
                <div className='KJH_if_left_section'>
                    <div className='KJH_if_left_info'>
                        <div>
                            <div className='KJH_if_left_top_title'>
                                상품 정보
                            </div>
                            <div>
                                <div className='KJH_if_left_content_top'>
                                    <p style={{ width: '663px' }}>
                                        {/* 판매자 상품 정보 설명 내용 데이터 */}
                                        {info.comment}
                                    </p>
                                </div>
                                <div className='KJH_if_left_content_bottom'>
                                    <div className='KJH_if_left_content_div'>
                                        <div className='KJH_if_left_content_div_top'>
                                            <img src={Location} alt='거래지역' width='16px' height='18px' />
                                            거래지역
                                        </div>
                                        <div className='KJH_if_left_content_div_center'>
                                            {/* 거래 지역 데이터 */}
                                            <span>{info.location}</span>
                                        </div>
                                    </div>
                                    <div className='KJH_if_left_content_div'>
                                        <div className='KJH_if_left_content_div_top'>
                                            <img src={Category} alt='카테고리' width='16px' height='18px' />
                                            카테고리
                                        </div>
                                        <div className='KJH_if_left_content_div_center'>
                                            <div className='KJH_if_left_content_div_link_span'>
                                                {info?.category?.[0] && (
                                                    <>
                                                        <Link to={`/search/${info.category[0]}`}>
                                                            {info.category[0]}
                                                        </Link>
                                                        {info?.category?.[1] && <IoIosArrowForward />}
                                                    </>
                                                )}
                                                {info?.category?.[1] && (
                                                    <>
                                                        <Link to={`/search/${info.category[1]}`}>
                                                            {info.category[1]}
                                                        </Link>
                                                        {info?.category?.[2] && <IoIosArrowForward />}
                                                    </>
                                                )}
                                                {info?.category?.[2] && (
                                                    <Link to={`/search/${info.category[2]}`}>
                                                        {info.category[2]}
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='KJH_if_left_content_div'>
                                        <div className='KJH_if_left_content_div_top'>
                                            <img src={Tag} alt='상품태그' width='15px' height='18px' />
                                            상품태그
                                        </div>
                                        <div className='KJH_if_left_content_div_bottom_tag_section'>
                                            {info.tags && info.tags.map((item) => (
                                                <div key={item}>#{item}&nbsp;</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='KJH_if_left_bottom'>
                            <div className='KJH_if_left_bottom_title_section'>
                                비슷한 새 상품 보기
                            </div>
                            <ul className='KJH_if_left_bottom_content_section'>
                                <li>
                                    <Link to='/' target='black' className='KJH_if_left_bottom_content_link_section'>
                                        {/* 랜덤 이미지 데이터 */}
                                        <img src={Image1} alt='임시 alt' width='110px' />
                                        <div className='KJH_if_left_bottom_content_link_info'>
                                            {/* 해당 가격 데이터 */}
                                            <span className='KJH_if_left_bottom_content_link_price'>
                                                000,000원
                                            </span>
                                            {/* 해당 품명 데이터 */}
                                            <span className='KJH_if_left_bottom_content_link_title'>
                                                해당 품명 데이터
                                            </span>
                                            <span className='KJH_if_left_bottom_content_link_ad'>
                                            {/* 해당 광고주 데이터 */}
                                                해당 광고주 데이터
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' target='black' className='KJH_if_left_bottom_content_link_section'>
                                        {/* 랜덤 이미지 데이터 */}
                                        <img src={Image1} alt='임시 alt' width='110px' />
                                        <div className='KJH_if_left_bottom_content_link_info'>
                                            {/* 해당 가격 데이터 */}
                                            <span className='KJH_if_left_bottom_content_link_price'>
                                                000,000원
                                            </span>
                                            {/* 해당 품명 데이터 */}
                                            <span className='KJH_if_left_bottom_content_link_title'>
                                                해당 품명 데이터 해당 품명 데이터 해당 품명 데이터 해당 품명 데이터 해당 품명 데이터 
                                            </span>
                                            <span className='KJH_if_left_bottom_content_link_ad'>
                                            {/* 해당 광고주 데이터 */}
                                                해당 광고주 데이터
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='KJH_if_right_section'>
                    <div className='KJH_if_right_info'>
                        <div className='KJH_if_right_top_section'>
                            <div className='KJH_if_right_top_title'>
                                상점정보
                            </div>
                            <div className='KJH_if_right_top_content_section'>
                                <div className='KJH_if_right_top_content_top'>
                                    {/* 해당 판매자 정보로 가는 링크 데이터 */}
                                    <Link to='/'>
                                        <img src={Profile} alt='프로필이미지' width='48px' height='48px' />
                                    </Link>
                                    <div className='KJH_if_right_top_content_user_name'>
                                        {/* 해당 판매자 닉네임 데이터 + 판매자 정보로 가는 링크 데이터 */}
                                        {seller.id}
                                        <div className='KJH_if_right_top_content_user_info'>
                                            {/* 해당 판매자가 판매하는 상품 개수 데이터 : 마이페이지 - 상품으로 연결*/}
                                            <Link to='/' className='KJH_if_right_top_content_user_product_link'>
                                                상품{products}&emsp;|
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <button className='KJH_if_right_top_content_user_follow_btn'>
                                    <img src={Follow} alt='팔로우' width='20px' height='14px' />
                                    팔로우
                                </button>
                                <div className='KJH_if_right_top_content_user_review'>
                                    상점후기 <span>{review.length}</span>
                                </div>
                                {/* 후기가 없으면 나오는 div */}
                                <div className='KJH_if_right_top_content_user_review_list_section'>
                                <div className='KJH_if_right_top_content_user_no_review'>
                                    <div className='KJH_if_right_review_section'>
                                        <div className='KJH_if_right_review_info'>
                                            <div className='KJH_if_right_review_title'>
                                                <div className='KJH_if_right_review_writer'>
                                                    리뷰 작성자 : {review[0]?.writer}
                                                </div>
                                                <div className='KJH_if_right_review_date'>
                                                    {formatDate(review[0]?.update_at)}
                                                </div>
                                            </div>
                                            <div className='KJH_if_right_review_comment'>
                                                {review[0]?.comment}
                                            </div>
                                        </div>
                                        <div className='KJH_if_right_review_info'>
                                            <div className='KJH_if_right_review_title'>
                                                <div className='KJH_if_right_review_writer'>
                                                    리뷰 작성자 : {review[1]?.writer}
                                                </div>
                                                <div className='KJH_if_right_review_date'>
                                                    {formatDate(review[1]?.update_at)}
                                                </div>
                                            </div>
                                            <div className='KJH_if_right_review_comment'>
                                                {review[1]?.comment}
                                            </div>
                                        </div>
                                        <div className='KJH_if_right_review_more'>
                                            상점후기 더보기
                                        </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                            <div className='KJH_if_right_bottom_section'>
                                <button className='KJH_if_right_bottom_talk'>
                                    <img src={TalkBtn} alt='실시간톡' width='20px' height='19px' />
                                    <div>실시간톡</div>
                                </button>
                                <button className='KJH_if_right_bottom_buy'>
                                    바로구매
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='KJH_if_section_bottom'>
                <div className='KJH_if_bottom_line'></div>
            </div>
        </>
    )
}

export default Info;