import { Link } from "react-router-dom";
import "./pro.css";

function Pro() {
  return (
      
    <div className="ymj_pro_all">
      <div className="ymj_pro_link">
        <div className="ymj_pro_link1">
          <Link to={'/rules'}>리셀마켓</Link>
        </div>
        <div className="ymj_pro_link2">       
          <Link to={'/pro'}>프로상점</Link>
        </div>
        <div className="ymj_pro_link3">
          <Link to={'/location'}>위치기반</Link>
        </div>
      </div>

      <div className="ymj_pro_entire">
        <h2>리셀 마켓 프로상점 서비스 이용약관</h2>
        <div className="ymj_pro_Chapter">
          <h3>제1장 총직</h3>
          <div className="ymj_pro_number">
            <p>제1조 (목적)</p>
            <span>본 약관은 서비스 이용자가 번개장터 주식회사(이하 “회사”라 합니다)가 제공하는 프로상점 서비스(이하 “본 서<br />
              비스”라 합니다)에 가입하고 이를 이용함에 있어 회사와 그 이용자의 권리⋅의무 및 책임 사항을 규정함을 목적으 <br />
              로 합니다. </span>
            </div>
          </div>

          <div className="ymj_pro_number">
            <p>제2조 (정의)</p>
            <span>본 약관에서 사용하는 용어의 정의는 다음과 같습니다. 본 약관에서 정의되지 않은 용어는 번개장터 서비스 이<br />
              용약관(이하 “번개장터 이용약관”이라 합니다) 에서 정의된 바에 따릅니다.</span>
            <div className="ymj_pro_li">
              <li>프로상점: 대량의 상품을 판매하는 등 상품 판매를 업(業)으로 영위하거나 전문적으로 하려는 회원에게<br />
                보다 적합한 상점 형태로서, 본 서비스 가입 시 운영할 수 있는 상점을 말합니다.</li>
              <li>일반상점: 번개장터 서비스 가입 시 기본적으로 운영할 수 있는 상점 형태를 말합니다.</li>
              <li>회원: 번개장터 이용약관에 동의하고 번개장터 회원으로 가입함으로써 본 서비스에 가입 신청을 할 수 <br />
                있는 회원을 말합니다.</li>
              <li>서비스 회원: 회원 중 본 약관에 동의하고 이용신청 절차를 거쳐 본 서비스에 가입한 회원을 말합니다.</li>
              <li>수수료: 서비스 회원이 본 서비스를 이용하여 판매한 물품의 매출액에 대하여 상품 카테고리별로 미리 <br />
                정한 일정 비율을 적용하여 부과되는 수수료를 말합니다.</li>
              <li>번개페이: 구매자가 물품 구매를 위해 회사에 물품 대금을 결제할 수 있는 결제 시스템을 말합니다.</li>
              <li>번개페이거래: 회원이 다른 회원이 판매하는 물품을 구매하기 위하여 회사에 구매 청약의 접수를 하고 <br />
                판매자와 구매 계약을 체결한 후 번개페이를 통해 물품 대금을 지급하는 거래 형태를 말합니다. </li>
              <li>프로모션: 수수료를 지불하지 않거나, 할인된 이용료 또는 수수료를 지불하고 본 서비스를 이용할 수 <br />
                있도록 회사가 진행하는 각종 이벤트 등을 말합니다.</li>
              <li>솔루션: 서비스 회원이 본 서비스를 이용한 물품 매에 도움이 될 수 있도록 회사가 서비스 회원에게 제<br />
                공하는 기능 일체를 말합니다.</li>
            </div>
          </div>

          <div className="ymj_pro_number">
            <p>제3조 (약관의 효력)</p>
            <div className="ymj_pro_li">
              <li>본 약관에 규정되어 있지 않은 내용에 대해서는 번개장터 이용약관을 따르며, 본 서비스와 관련하여 <br />
                본 약관과 번개장터 이용약관 조항 간 불일치가 존재하는 경우 본 약관 조항이 우선하여 적용됩합니다. </li>
              <li>회사는 본 약관에 규정되지 않은 세부적인 내용에 대해 개별 운영정책 등(이하 “프로상점 운영정책”이<br />
                라 합니다)을 제정하여 운영할 수 있으며, 해당 내용을 판매자센터를 통하여 게시합니다. 프로상점 운영<br />
                정책은 본 약관 및 번개장터 이용약관과 더불어 프로상점 서비스 이용 계약(이하 "프로상점 이용계약"이<br />
                라 합니다)의 일부를 구성합니다.</li>
            </div>
          </div>
        </div>

        <div>
          <h3>제2장 서비스의 내용 및 가입</h3>
          <div className="ymj_pro_number">
            <p>제4조 (프로상점 서비스 이용계약의 성립)</p>
            <div className="ymj_pro_li">
              <li>프로상점 이용계약은 본 서비스를 이용하고자 하는 회원이 본 약관에 동의한 뒤 이용신청 절차를 거<br />
                쳐 이용신청을 완료하고, 회사가 회원의 이용신청을 승낙함으로써 성립합니다. </li>
              <li>서비스 이용신청을 하기 위해서는 번개장터 이용약관 제4조에 의해 번개장터 서비스 회원 가입을 완<br />
                료한 회원이어야 합니다.</li>
              <li>번개장터 서비스 운영정책(이하 “번개장터 운영정책”이라 합니다) 또는 프로상점 운영정책 위반으로 <br />
                이용이 제한된 회원은 서비스 이용신청이 제한될 수 있습니다.</li>
              <li>회사는 본 서비스를 이용하기 위해 서비스 신청을 한 자가 이용신청을 완료한 경우 원칙적으로 본 서<br />
                비스의 이용을 승낙합니다. 다만, 회사는 다음과 같은 사유가 있는 경우 서비스 신청의 승낙을 거절 또는<br />
                보류할 수 있고, 이 경우 회사는 승낙 거절 또는 보류의 사유와 승낙에 필요한 추가 요청 정보 등 관련 사<br />
                항을 통지합니다.</li>
              <div className="ymj_pro_li2">
                <li>회사의 설비에 여유가 없는 경우</li>
                <li>회사의 서비스 제공에 기술적인 문제가 있는 경우</li>
                <li>회원가입 신청자가 본 약관 또는 번개장터 이용약관에 따라회원 자격을 상실하거나 프로상점 이용계<br />
                  약이              해지된 적이 있는 경우 (단, 회사의 회원 재가입 승낙을 얻은 경우는 예외)</li>
                <li>타인의 명의를 도용한 경우</li>
                <li>허위의 정보를 기재한 경우</li>
                <li>기타 회사의 합리적인 판단 하에 필요하다고 인정하는 경우</li>
              </div>
            </div>
          </div>

          <div className="ymj_pro_number">
            <p>제5조 (대리행위 및 보증의 부인)</p>
            <span>회사는 서비스 회원이 본 서비스를 통해 취급하는 상품의 판매효과에 대하여 어떠한 보증을 제공하지 아니하며,<br /> 
              서비스 회원은 자신이 의도한 판매효과의 미흡 등을 이유로 회사에 어떠한 책임도 물을 수 없습니다.</span>
          </div>

          <div className="ymj_pro_number">
            <p>제6조 (서비스의 제공)</p>
            <div className="ymj_pro_li">
              <li>회사는 번개장터 이용약관에 따라 제공되는 서비스에 더하여 본 약관에 따라 대량의 상품을 판매하고<br />
                자 하는 회원, 상품판매를 업으로 영위하거나 전문적으로 하려는 회원에게 관련 기능과 혜택을 제공하는<br />
                프로상점 서비스를 제공합니다. </li>
              <li>서비스 회원은 번개장터 운영정책 및 프로상점 운영정책의 거래 제한/금지 품목 또는 금지행위 등에 <br />
                해당하지 않는 한, 번개장터 이용약관 및 번개장터 운영정책에 규정된 일반상점에서 판매가 제한되는 상<br />
                품의 판매가 가능합니다.</li>
            </div>
          </div>

          <div className="ymj_pro_number">
            <p>제7조 (번개페이거래를 통한 물품 거래) </p>
            <div className="ymj_pro_li">
              <li>서비스 회원이 본 서비스를 이용하여 물품을 판매는 경우, 구매자와 서비스 회원 간의 물품 거래는 번<br />
                개페이거래로 이루어집니다 . 번개페이거래를 통한 물품 거래와 관련해 본 약관에 기재되어 있지 않은 내<br />
                용은 번개장터 이용약관을 따릅니다.</li>
              <li>본 약관에 의해 서비스 회원으로 가입한 자는 번개페이 안전결제 거래한도 제한 내용 및 제한 해지를 <br />
                위한 조건을 숙지하고 이에 동의합니다.</li>
            </div>
          </div>

          <div className="ymj_pro_number">
            <p>제8조 (서비스의 수수료) </p>
            <div className="ymj_pro_li">
              <li>회사는 서비스 회원에게 상품 판매에 대한 수수료를 부과할 수 있으며, 수수료의 종류, 요율, 부과 기<br />
                준, 청구 방법 등의 구체적인 사항은 프로상점 운영정책에 정하고, 판매자센터를 통해 공지합니다.</li>
              <li>회사는 필요한 경우 서비스 사용에 대한 수수료를 신규로 설정 또는 변경할 수 있으며, 신규 설정 또는<br />
                변경된 수수료의 세부 사항은 프로상점 운영정책에 정하고, 판매자센터를 통하여 사전 공지합니다.  </li>
              <li>회사는 서비스 사용에 대한 수수료를 서비스 회원에게 지급해야 하는 정산대금에서의 공제 등으로 징<br />
                수할 수 있으며, 회사의 내부적인 정책 등에 따라 수수료 징수 방법을 다르게 정할 수 있습니다. 정산의 <br />
                시기와 방법 등 구체적인 내용은 번개장터 이용약관을 따릅니다.</li>
            </div>
          </div>

          <div className="ymj_pro_number">
            <p>제9조 (프로상점 서비스 이용계약의 해지)</p>
            <div className="ymj_pro_li">
              <li>서비스 회원은 언제든지 회사에 해지의 의사를 통지함으로써 프로상점 이용계약을 해지할 수 있습니<br />
                다. 단, 서비스 회원은 회사에 해지 의사를 통지하기 전에 판매 진행 중인 절차를 완료, 철회, 취소하는 등<br />
                 필요한 조치를 취하여야 하며, 완료, 철회 또는 취소로 발생하는 불이익 및 적절한 시점에 완료, 철회 또<br />
                 는 취소를 하지 않음으로써 발생하는 불이익은 해당 회원이 부담합니다.</li>
              <li>회사는 서비스 회원의 프로상점 이용계약 해지의 의사 표시를 확인한 후에 해당 회원이 운영하는 프로<br />
                상점을 일반상점으로 변경합니다. 서비스 회원은 프로상점 이용계약이 해지되더라도 회원으로서 번개장<br />
                터 이용약관에 따라 제공되는 서비스를 이용할 수 있습니다.</li>
              <li>프로상점 이용계약이 해지되면, 서비스 회원이 적용 받은 일부 프로모션 혜택은 소멸되며, 재가입에도 <br />
                불구하고 소멸된 일부 프로모션 혜택은 복구되지 않습니다.</li>
              <li>서비스 회원은 해지 의사를 통지하기 전에 프로상점 이용계약 해지 시 발생할 수 있는 내용을 충분히 <br />
                인지하여야 하고, 이를 인지하지 못해 발생하는 불이익은 해당 회원이 부담합니다. </li>
              <li>프로상점 이용계약의 해지는 해지 전에 서비스 회원과 회사 사이에서 발생한 권리, 의무 관계에 영향<br />
                을 미치지 않습니다.</li>
            </div>
          </div>

          <div className="ymj_pro_number">
            <p>제10조 (이용제한 및 자격 정지)</p>
            <div className="ymj_pro_li">
              <li> 회사는 본 서비스를 통한 거래의 안전성과 신뢰성을 제고하기 위하여 본 약관 및 프로상점 운영정책에<br />
                서 정한 바에 따라 서비스 회원 자격을 정지하거나 본 서비스의 이용을 제한할 수 있습니다.</li>
              <li>회사는 번개페이거래를 회피하기 위한 목적으로 다음과 같은 행위를 하는 서비스 회원에게 일정한 제<br />
                재를 부여할 수 있습니다.</li>
              <div className="ymj_pro_li2">
                <li>계좌거래 및 직거래를 유도하는 행위</li>
                <li>자사몰, 타 사이트, 외부 채널로의 유도 후, 타 사이트에서 결제 또는 구매를 유도하는 행위</li>
                <li>카테고리를 오설정하여 수수료를 과소 부담하는 행위</li>
              </div>
              <li>회사는 서비스 회원이 제재의 내용 및 기준을 확인할 수 있도록 프로상점 운영정책을 통해 제재 내용 <br />
                및 기준을 안내합니다.</li>
              <li>회사는 본 약관 또는 프로상점 운영정책에 따라 특정한 사유가 발생한 경우 및 어떠한 사유에서든 서<br />
                비스 회원이 번개장터 이용약관에 따른 회원 자격을 상실하는 경우에 서비스 회원의 자격을 박탈하고 이<br />
                용계약을 해지할 수 있습니다.</li>
              <li>본 서비스 이용 중에 서비스 회원의 귀책사유로 번개장터 이용약관 또는 번개장터 운영정책에 의해 본<br />
                서비스 이용이 제한될 수 있으며, 이에 대한 책임은 회사가 지지 않습니다.</li>
            </div>
          </div>

          <div className="ymj_pro_number">
            <p>제11조 (서비스 회원 혜택) </p>
            <div className="ymj_pro_li">
              <li>회사는 프로상점 이용계약을 체결한 회원에게 아래와 같은 솔루션을 제공합니다. </li>
              <div className="ymj_pro_li2">
                <li>상품일괄등록</li>
                <li>베스트 후기 설정</li>
                <li>추천 상품 설정 관리</li>
                <li>상품상세의 상점 영역에 노출 상품 수 확대</li>
                <li>번개톡 자주 사용하는 문구 설정</li>
                <li>번개톡 업무시간 외 자동응답 설정</li>
                <li>정산내역 및 세금계산서 조회 및 관리</li>
              </div>
              <li>본 조의 혜택은 서비스 제공 상황 및 정책 등에 따라 솔루션의 내용 및 이용가능 대상 등이 변경될 수 <br />
                있습니다. 변경사항이 있는 경우 회사는 판매자센터를 통하여 공지합니다.</li>
            </div>
          </div>

          <div className="ymj_pro_number">
            <p>제12조 (서비스 종료)</p>
            <span>회사가 본 서비스를 종료하고자 할 경우 회사는 종료일 30일전에 판매자센터에 본 서비스의 종료 사실을 공지<br />
              하고 번개장터 이용약관에서 정한 통지수단을 통하여 서비스 회원에게 통지합니다.</span>
          </div>
        </div>

        <div className="ymj_pro_end">
          <p>이 약관은 2022년 10월 26일부터 시행합니다. </p>
        </div>
    </div>
  );
}

export default Pro;